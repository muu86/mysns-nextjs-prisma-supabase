'use client';

import { getPresignedUrl } from '@/actions/file';
import { graphql } from '@/gql';
import { PostCreateInput } from '@/gql/graphql';
import { ImageFile } from '@/lib/types';
import { useMutation } from '@apollo/client';
import { PropsWithChildren, createContext, useCallback, useState } from 'react';

const createPostMutation = graphql(`
  mutation createPost($data: PostCreateInput!, $strategy: RelationLoadStrategy) {
    createOnePost(data: $data, relationLoadStrategy: $strategy) {
      id
      content
      address {
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
    // 임시 주소 코드
    const tempAddressCode = '1111010100';

    const data: PostCreateInput = {
      content,
      address: {
        connect: {
          code: tempAddressCode,
        },
      },
      files: {
        create: files
          .filter((f) => !!f.s3Key)
          .map((f) => f.s3Key!)
          .map((k) => ({
            file: {
              create: {
                location: k,
              },
            },
          })),
      },
    };

    const post = await createPost({
      variables: {
        data,
      },
    });
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
