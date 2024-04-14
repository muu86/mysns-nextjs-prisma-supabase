'use client';

import { getPresignedUrl } from '@/actions/file';
import { graphql } from '@/gql';
import { ImageFile } from '@/lib/types';
import { gql, useMutation } from '@apollo/client';
import { PropsWithChildren, createContext, useCallback, useState } from 'react';
import { z } from 'zod';

const createPostMutation = graphql(`
  mutation createPost($content: String!, $addressCode: String!, $fileKeys: [String!]!) {
    createPost(content: $content, addressCode: $addressCode, fileKeys: $fileKeys) {
      id
      content
      address {
        id
        code
        c3
      }
      files {
        file {
          location
        }
      }
    }
  }
`);

const CreatePostSchema = z.object({
  content: z.string(),
  addressCode: z.string(),
  fileKeys: z.string().array(),
});

export default function MutatePostContextProvider({ children }: PropsWithChildren) {
  const [createPost, { data, loading, error }] = useMutation(createPostMutation);

  const [content, setContent] = useState('');
  const [files, setFiles] = useState<ImageFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<ImageFile | undefined>();
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const fileUploadHandler = useCallback(async (file: File) => {
    setIsUploading(true);

    const tempUrl = URL.createObjectURL(file);
    const newFile: ImageFile = { tempUrl, file };

    setFiles((prev) => [...prev, newFile]);
    setSelectedFile(newFile);
    await uploadFile(newFile);

    setIsUploading(false);
  }, []);

  const submit = async () => {
    console.log(files);
    // 임시 주소 코드
    const tempAddressCode = '1111010100';
    const fileKeyList = files.map((f) => f.s3Key);
    console.log(fileKeyList);
    const variables = {
      content,
      addressCode: tempAddressCode,
      fileKeys: fileKeyList,
    };
    const validate = CreatePostSchema.safeParse(variables);
    if (!validate.success) {
      throw new Error(validate.error.message);
    }

    const post = await createPost({
      variables: validate.data,
    });
    console.log(post);
  };

  const value = {
    states: {
      content,
      files,
      selectedFile,
    },
    actions: {
      setContent,
      fileUploadHandler,
      submit,
    },
  };

  return <MutatePostContext.Provider value={value}>{children}</MutatePostContext.Provider>;
}

export const MutatePostContext = createContext<MutatePostContextType>({} as MutatePostContextType);

export type MutatePostContextStates = {
  content: string;
  files: ImageFile[];
  selectedFile: ImageFile | undefined;
};

export type MutatePostContextActions = {
  setContent: (content: string) => void;
  fileUploadHandler: (file: File) => void;
  submit: () => void;
};

export type MutatePostContextType = {
  states: MutatePostContextStates;
  actions: MutatePostContextActions;
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
