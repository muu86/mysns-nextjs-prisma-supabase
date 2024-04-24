'use client';

import { UpdateUserAction, updateUserReducer } from '@/components/reducer/update-user-reducer';
import {
  ActiveStatus,
  AddressesQuery,
  GetUserQuery,
  Role,
  UserUpdateInput,
  UserWhereUniqueInput,
} from '@/graphql/generated/gql/graphql';
import { MutationUpdateOneUser, QueryGetUser } from '@/graphql/query/user';
import { ImageFile } from '@/lib/types';
import { useMutation } from '@apollo/client';
import { produce } from 'immer';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Dispatch, PropsWithChildren, createContext, useMemo, useReducer, useState } from 'react';
import { useToast } from '../ui/use-toast';
import _ from 'lodash';

export default function UpdateUserContextProvider({
  user,
  children,
}: PropsWithChildren<{ user: GetUserQuery['getUser'] }>) {
  const { data: session, update } = useSession();
  const [updateOneUser] = useMutation(MutationUpdateOneUser, {
    refetchQueries: [
      {
        query: QueryGetUser,
      },
    ],
  });
  const [snapshot, setSnapshot] = useState<UpdateUserContextState>();

  const initialState = useMemo((): UpdateUserContextState => {
    return {
      before: user,
      session,
      username: user?.username || '',
      babyBirth: user?.babyBirth,
      isUploading: false,
      address:
        produce(
          user?.addresses.map((ua) => ua.address),
          (draft) => draft
        ) || [],
      content: user?.content || '',
    };
  }, [user, session]);
  const [state, dispatch] = useReducer(updateUserReducer, initialState);
  const { toast } = useToast();

  const submit = async () => {
    if (state.isUploading) return;
    if (!session?.user?.email) redirect('/login');
    if (!state.username) return;
    if (snapshot && _.isEqual(snapshot, state)) {
      toast({
        description: '프로필이 변경되지 않았습니다.',
        duration: 1000,
      });
      return;
    }

    dispatch({
      type: 'setIsUploading',
      payload: true,
    });
    const variables = createVariables(state);

    const { data, errors } = await updateOneUser({
      variables,
    });

    dispatch({
      type: 'setIsUploading',
      payload: false,
    });

    if (data) {
      console.log('rhrh');
      toast({
        description: '프로필을 수정했습니다.',
        duration: 1000,
      });
      update({
        username: data.updateOneUser?.username,
        role: data.updateOneUser?.role,
      });
      setSnapshot(_.cloneDeep(state));
    }

    if (errors) {
      toast({
        variant: 'destructive',
        title: '오류 발생',
        description: '프로필 업데이트 중 오류가 발생했습니다.',
        duration: 1000,
      });
    }
  };

  return <UpdateUserContext.Provider value={{ state, dispatch, submit }}>{children}</UpdateUserContext.Provider>;
}

export const UpdateUserContext = createContext<UpdateUserContextType>({} as UpdateUserContextType);

export type UpdateUserContextState = {
  before?: GetUserQuery['getUser'];
  session: Session | null;
  username?: string;
  content?: string;
  isUploading: boolean;
  babyBirth?: Date;
  newFile?: ImageFile;
  address: AddressesQuery['addresses'];
};

export type UpdateUserContextType = {
  state: UpdateUserContextState;
  dispatch: Dispatch<UpdateUserAction>;
  submit: () => void;
};

function createVariables({ before, session, username, content, babyBirth, newFile, address }: UpdateUserContextState) {
  const addressTobeInactivated = before?.addresses.filter(
    (ua) => address.findIndex((a) => a.id === ua.address.id) === -1
  );
  const addressTobeCreated = before?.addresses
    ? address.filter((a) => before.addresses.findIndex((ua) => ua.address.id === a.id) === -1)
    : address;

  const fileTobeInactivated = newFile && before ? before.files.filter((bf) => bf.status === ActiveStatus.Active) : [];

  const data = {
    username: {
      set: username,
    },
    role: {
      set: Role.Write,
    },
    babyBirth: {
      set: babyBirth,
    },
    content: {
      set: content,
    },
    addresses: {
      delete: addressTobeInactivated
        ? addressTobeInactivated.map((ua) => ({
            // where: {
            //   id: parseInt(ua.id),
            // },
            // data: {
            //   status: {
            //     set: ActiveStatus.Inactive,
            //   },
            // },
            id: parseInt(ua.id),
          }))
        : [],
      create: addressTobeCreated.map((a) => ({
        address: {
          connect: {
            id: parseInt(a.id),
          },
        },
      })),
    },
    files: {
      update: fileTobeInactivated.map((f) => ({
        where: {
          id: parseInt(f.id),
        },
        data: {
          status: {
            set: ActiveStatus.Inactive,
          },
        },
      })),
      create:
        newFile && newFile.s3Key
          ? [
              {
                file: {
                  create: {
                    location: newFile.s3Key,
                  },
                },
              },
            ]
          : undefined,
    },
  } satisfies UserUpdateInput;
  console.log('data ====== ', data);
  const where = {
    email: session!.user!.email!,
  } satisfies UserWhereUniqueInput;

  return {
    data,
    where,
  };
}
