'use client';

import { getPresignedUrl } from '@/actions/file';
import { graphql } from '@/graphql/generated/gql';
import { GetAllAddressQuery } from '@/graphql/generated/gql/graphql';
import { UserUpdateInput, UserWhereUniqueInput } from '@/graphql/generated/type-graphql';
import { ImageFile } from '@/lib/types';
import { useMutation } from '@apollo/client';
import { Session } from 'next-auth';
import { redirect } from 'next/navigation';
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useCallback, useEffect, useState } from 'react';

const createUserMutation = graphql(`
  mutation createUser($data: UserCreateInput!, $strategy: RelationLoadStrategy) {
    createOneUser(data: $data, relationLoadStrategy: $strategy) {
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
const QueryFindFirstUser = graphql(`
  query findFirstUser($where: UserWhereInput) {
    findFirstUser(where: $where) {
      id
      username
      content
      babyBirth
      email
      addresses {
        address {
          id
          c1
          c2
          c3
          c4
        }
      }
      files {
        file {
          
        }
      }
    }
  }
`);
const MutationUpdateUser = graphql(`
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

function MutateUserContextProvider({ session, children }: PropsWithChildren<{ session: Session | null }>) {
  // const [createUser, { data, loading, error }] = useMutation(createUserMutation);
  const [updateOneUser, { data, loading, error }] = useMutation(MutationUpdateUser);

  const [username, setUsername] = useState<string | undefined>();
  const [content, setContent] = useState<string | undefined>();
  const [file, setFile] = useState<ImageFile | undefined>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [birthDate, setBirthDate] = useState<Date | undefined>();
  const [address, setAddress] = useState<GetAllAddressQuery['addresses']>([]);

  // useEffect(() => {
  //   setUsername(session?.user?.username);
  //   setContent();
  // }, [session]);

  const fileUploadHandler = useCallback(async (file: File) => {
    setIsUploading(true);

    const tempUrl = URL.createObjectURL(file);
    const newFile: ImageFile = { tempUrl, file };

    setFile(newFile);
    await uploadFile(newFile);

    setIsUploading(false);
  }, []);

  const submit = async () => {
    if (isUploading) return;
    if (!session?.user?.email) redirect('/login');
    if (!username) return;

    const data = {
      username: {
        set: username,
      },
      babyBirth: {
        set: birthDate,
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
      email: session.user.email,
    } satisfies UserWhereUniqueInput;

    // const result = await createUser({
    //   variables: {
    //     data,
    //   },
    // });
    const result = await updateOneUser({
      variables: {
        data,
        where,
      },
    });
    console.log(result);
  };

  const value = {
    states: {
      username,
      content,
      file,
      isUploading,
      birthDate,
      address,
    },
    actions: {
      setUsername,
      setContent,
      setBirthDate,
      setAddress,
      fileUploadHandler,
      submit,
    },
  };

  return <MutateUserContext.Provider value={value}>{children}</MutateUserContext.Provider>;
}

const MutateUserContext = createContext<MutateUserContextType>({} as MutateUserContextType);

export type MutateUserContextStates = {
  username: string | undefined;
  content: string | undefined;
  file: ImageFile | undefined;
  isUploading: boolean;
  birthDate: Date | undefined;
  address: GetAllAddressQuery['addresses'];
};

export type MutateUserContextActions = {
  setUsername: Dispatch<SetStateAction<string | undefined>>;
  setContent: Dispatch<SetStateAction<string | undefined>>;
  setBirthDate: Dispatch<SetStateAction<Date | undefined>>;
  setAddress: Dispatch<SetStateAction<GetAllAddressQuery['addresses']>>;
  fileUploadHandler: (file: File) => void;
  submit: () => void;
};

export type MutateUserContextType = {
  states: MutateUserContextStates;
  actions: MutateUserContextActions;
};

async function uploadFile(newFile: ImageFile) {
  const buffer = await newFile.file.arrayBuffer();
  const { key, signedUrl } = await getPresignedUrl();

  const response = await fetch(signedUrl, {
    method: 'PUT',
    body: buffer,
  });
  newFile.s3Key = key;
}
