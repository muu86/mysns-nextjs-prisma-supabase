'use client';

import { UpdateUserAction, updateUserReducer } from '@/components/reducer/update-user-reducer';
import {
  ActiveStatus,
  AddressesQuery,
  GetUserQuery,
  Role,
  UserAddressUpdateManyWithoutUserNestedInput,
  UserAddressUpsertWithWhereUniqueWithoutUserInput,
  UserUpdateInput,
  UserWhereUniqueInput,
} from '@/graphql/generated/gql/graphql';
import { MutationUpdateOneUser } from '@/graphql/query/user';
import { ImageFile } from '@/lib/types';
import { useMutation } from '@apollo/client';
import { Session } from 'next-auth';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { Dispatch, PropsWithChildren, createContext, useMemo, useReducer } from 'react';
import { produce } from 'immer';

export default function UpdateUserContextProvider({
  user,
  children,
}: PropsWithChildren<{ user: GetUserQuery['getUser'] }>) {
  const { data: session, update } = useSession();
  const [updateOneUser] = useMutation(MutationUpdateOneUser);

  const initialState = useMemo((): UpdateUserContextState => {
    if (user) {
      console.log(user.files);
      return {
        before: user,
        session,
        username: user.username!,
        babyBirth: user.babyBirth,
        isUploading: false,
        address: produce(
          user.addresses.map((ua) => ua.address),
          (draft) => draft
        ),
        content: user.content as string | undefined,
      };
    } else {
      return {
        session: session,
        isUploading: false,
        address: [],
      };
    }
  }, [user, session]);
  const [state, dispatch] = useReducer(updateUserReducer, initialState);

  const submit = async () => {
    if (state.isUploading) return;
    if (!session?.user?.email) redirect('/login');
    if (!state.username) return;

    dispatch({
      type: 'setIsUploading',
      payload: true,
    });
    const variables = createVariables(state);

    const result = await updateOneUser({
      variables,
    });

    dispatch({
      type: 'setIsUploading',
      payload: false,
    });

    if (!result.errors) {
      update({
        username: result.data?.updateOneUser?.username,
        role: result.data?.updateOneUser?.role,
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

  console.log(addressTobeInactivated);
  console.log(addressTobeCreated);

  const fileTobeInactivated = newFile && before && before.files.length > 0 ? before.files[0] : undefined;
  console.log(fileTobeInactivated);

  console.log(newFile);

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
      update: fileTobeInactivated
        ? [
            {
              where: {
                id: parseInt(fileTobeInactivated.id),
              },
              data: {
                status: {
                  set: ActiveStatus.Inactive,
                },
              },
            },
          ]
        : [],
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
