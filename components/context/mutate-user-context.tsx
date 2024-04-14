'use client';

import { getPresignedUrl } from '@/actions/file';
import { ImageFile } from '@/lib/types';
import { gql, useMutation } from '@apollo/client';
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useCallback, useState } from 'react';
import { z } from 'zod';
import { formatRFC3339 } from 'date-fns';
import { Address } from '@/gql/graphql';
import { graphql } from '@/gql';

const createUserMutation = graphql(`
  mutation createUser(
    $username: String!
    $content: String
    $babyBirth: Date
    $addressIds: [ID!]!
    $fileKeys: [String!]!
  ) {
    createUser(
      username: $username
      content: $content
      babyBirth: $babyBirth
      addressIds: $addressIds
      fileKeys: $fileKeys
    ) {
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

const CreateUserSchema = z.object({
  username: z.string(),
  babyBirth: z.string().optional(),
  content: z.string().optional(),
  addressIds: z.string().array(),
  fileKeys: z.string().uuid().array(),
});

export default function MutateUserContextProvider({ children }: PropsWithChildren) {
  const [createUser, { data, loading, error }] = useMutation(createUserMutation);

  const [username, setUsername] = useState<string | undefined>();
  const [content, setContent] = useState<string | undefined>();
  const [file, setFile] = useState<ImageFile | undefined>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [birthDate, setBirthDate] = useState<Date | undefined>();
  const [address, setAddress] = useState<Address[]>([]);

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

    const variables = {
      username,
      babyBirth: formatRFC3339(birthDate!, { fractionDigits: 2 }),
      content,
      addressIds: address.map((a) => a.id),
      fileKeys: file ? [file.s3Key] : [],
    };

    const validate = CreateUserSchema.safeParse(variables);
    if (!validate.success) {
      console.log(validate.error);
      return;
    }

    const result = await createUser({
      variables: validate.data,
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
  address: Address[];
};

export type MutateUserContextActions = {
  setUsername: Dispatch<SetStateAction<string | undefined>>;
  setContent: Dispatch<SetStateAction<string | undefined>>;
  setBirthDate: Dispatch<SetStateAction<Date | undefined>>;
  setAddress: Dispatch<SetStateAction<Address[]>>;
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
