'use client';

import { graphql } from '@/graphql/generated/gql';
import { AddressesQuery, Role } from '@/graphql/generated/gql/graphql';
import { UserUpdateInput, UserWhereUniqueInput } from '@/graphql/generated/type-graphql';
import { ImageFile } from '@/lib/types';
import { useMutation } from '@apollo/client';
import { Session } from 'next-auth';
import { redirect } from 'next/navigation';
import { Dispatch, PropsWithChildren, createContext, useReducer } from 'react';
import { UpdateUserAction, updateUserReducer } from '../reducer/update-user-reducer';

const MutationUpdateOneUser = graphql(`
  mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateOneUser(data: $data, where: $where) {
      id
      username
      babyBirth
      content
      addresses {
        address {
          c3
        }
      }
      files {
        file {
          location
        }
      }
    }
  }
`);

export default function UpdateUserContextProvider({
  session,
  children,
}: PropsWithChildren<{ session: Session | null }>) {
  const [updateOneUser] = useMutation(MutationUpdateOneUser);

  const [state, dispatch] = useReducer(updateUserReducer, { session: session, isUploading: false, address: [] });
  console.log(state.address);

  const submit = async () => {
    if (state.isUploading) return;
    if (!session?.user?.email) redirect('/login');
    if (!state.username) return;

    const variables = createVariables(state);

    const result = await updateOneUser({
      variables,
    });
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
