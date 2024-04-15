'use client';

import { getPresignedUrl } from '@/actions/file';
import { graphql } from '@/gql';
import { GetAllAddressQuery, UserCreateInput } from '@/gql/graphql';
import { ImageFile } from '@/lib/types';
import { useMutation } from '@apollo/client';
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useCallback, useState } from 'react';

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

export default function MutateUserContextProvider({ children }: PropsWithChildren) {
  const [createUser, { data, loading, error }] = useMutation(createUserMutation);

  const [username, setUsername] = useState<string | undefined>();
  const [content, setContent] = useState<string | undefined>();
  const [file, setFile] = useState<ImageFile | undefined>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [birthDate, setBirthDate] = useState<Date | undefined>();
  const [address, setAddress] = useState<GetAllAddressQuery['addresses']>([]);

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
    if (!username) return;

    const data: UserCreateInput = {
      username,
      babyBirth: birthDate,
      content,
      addresses: {
        create: address.map((a) => ({
          address: {
            connect: {
              id: a.id,
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
    };

    const result = await createUser({
      variables: {
        data,
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

export const MutateUserContext = createContext<MutateUserContextType>({} as MutateUserContextType);

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
