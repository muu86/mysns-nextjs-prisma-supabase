'use client';

import { getSignedUrlForPut } from '@/actions/file';
import { PostCreateInput } from '@/graphql/generated/gql/graphql';
import { MutationCreateOnePost } from '@/graphql/query/posts';
import { ImageFile } from '@/lib/types';
import { useMutation } from '@apollo/client';
import { Session } from 'next-auth';
import { PropsWithChildren, createContext, useCallback, useState } from 'react';

export default function MutatePostContextProvider({ session, children }: PropsWithChildren<{ session: Session }>) {
  const [createPost, { data, loading, error }] = useMutation(MutationCreateOnePost);

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
    setIsUploading(true);
    // if (!session.user?.email) redirect('/login');
    // 임시 주소 코드
    const tempAddressCode = '1111010100';

    const input: PostCreateInput = {
      content,
      user: {
        connect: {
          email: session.user?.email,
        },
      },
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

    const { data, errors } = await createPost({
      variables: {
        data: input,
      },
    });

    setIsUploading(false);
  };

  const value = {
    states: {
      content,
      files,
      selectedFile,
      isUploading,
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
  isUploading: boolean;
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

export async function uploadFile(newFile: ImageFile) {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/upload`, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ filename: newFile.file.name, contentType: newFile.file.type }),
  // });
  // if (response.ok) {
  //   const { url, key } = await response.json();

  //   const uploadResponse = await fetch(url, {
  //     method: 'PUT',
  //     body: await newFile.file.arrayBuffer(),
  //   });

  //   console.log(uploadResponse);

  //   newFile.s3Key = key;
  // }

  const { url, key, data, error } = await getSignedUrlForPut(newFile.file.name, newFile.file.type);

  console.log('error : ', error);
  console.log('data is ', data);
  const uploadResponse = await fetch(url!, {
    method: 'PUT',
    body: await newFile.file.arrayBuffer(),
  });

  console.log(uploadResponse);

  newFile.s3Key = key;
}
