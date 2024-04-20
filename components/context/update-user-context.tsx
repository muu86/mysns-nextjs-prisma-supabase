'use client';

import { graphql } from '@/graphql/generated/gql';
import { AddressesQuery, Role } from '@/graphql/generated/gql/graphql';
import { UserUpdateInput, UserWhereUniqueInput } from '@/graphql/generated/type-graphql';
import { ImageFile } from '@/lib/types';
import { useLoadableQuery, useMutation, useReadQuery, useSuspenseQuery } from '@apollo/client';
import { Session } from 'next-auth';
import { redirect } from 'next/navigation';
import { Dispatch, PropsWithChildren, createContext, useEffect, useReducer } from 'react';
import { UpdateUserAction, updateUserReducer } from '../reducer/update-user-reducer';
import { useSession } from 'next-auth/react';
import { MutationUpdateOneUser, QueryGetUser } from '@/graphql/query/user';

export default function UpdateUserContextProvider({ children }: PropsWithChildren) {
  const { data: session, update } = useSession();
  const [state, dispatch] = useReducer(updateUserReducer, { session: session, isUploading: false, address: [] });

  const [updateOneUser] = useMutation(MutationUpdateOneUser);
  const [getUser, getUserQueryRef] = useLoadableQuery(QueryGetUser);
  const {
    data: { getUser: currentUser },
  } = useSuspenseQuery(QueryGetUser, {
    variables: {
      where: {
        email: session?.user?.email,
      },
    },
  });
  useEffect(() => {
    if (session?.user?.role !== 'WRITE') return;
    getUser({
      where: {
        email: session.user.email!,
      },
    });
  }, [session, getUser]);

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

export type UserContextState = {
  session: Session | null;
  username?: string;
  content?: string;
  file?: ImageFile;
  isUploading: boolean;
  babyBirth?: Date;
  address: AddressesQuery['addresses'];
};

export type UpdateUserContextType = {
  state: UserContextState;
  dispatch: Dispatch<UpdateUserAction>;
  submit: () => void;
};

function createVariables({ session, username, content, babyBirth, file, address }: UserContextState) {
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
      create: address.map((a) => ({
        address: {
          connect: {
            id: parseInt(a.id),
          },
        },
      })),
    },
    files: file?.s3Key
      ? {
          create: [
            {
              file: {
                create: {
                  location: file?.s3Key,
                },
              },
            },
          ],
        }
      : undefined,
  } satisfies UserUpdateInput;
  const where = {
    email: session!.user!.email!,
  } satisfies UserWhereUniqueInput;

  return {
    data,
    where,
  };
}
