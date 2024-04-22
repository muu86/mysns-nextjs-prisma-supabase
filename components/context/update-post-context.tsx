'use client';

import { getSignedUrlForPut } from '@/actions/file';
import { PostCreateInput } from '@/graphql/generated/gql/graphql';
import { MutationCreateOnePost, QueryPosts } from '@/graphql/query/posts';
import { ImageFile } from '@/lib/types';
import { useMutation } from '@apollo/client';
import { Session } from 'next-auth';
import { Dispatch, PropsWithChildren, SetStateAction, createContext, useCallback, useState } from 'react';
import { useToast } from '../ui/use-toast';
import _ from 'lodash';
import { revalidatePath } from 'next/cache';

type SelectedAddress = {
  id: string;
  address: {
    id: string;
    code: string;
    c1: string;
    c2?: string | null | undefined;
    c3?: string | null | undefined;
    c4?: string | null | undefined;
  };
};

export default function UpdatePostContextProvider({ session, children }: PropsWithChildren<{ session: Session }>) {
  const { toast } = useToast();
  const [createPost, { data, loading, error }] = useMutation(MutationCreateOnePost, {
    refetchQueries: [
      {
        query: QueryPosts,
      },
    ],
  });

  const [content, setContent] = useState('');
  const [files, setFiles] = useState<ImageFile[]>([]);
  const [selectedFile, setSelectedFile] = useState<ImageFile>();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [selectedAddress, setSelectedAddress] = useState<SelectedAddress>();
  const [snapshot, setSnapshot] = useState<UpdatePostContextStates>();

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
    if (content.length < 3) {
      toast({
        variant: 'destructive',
        description: '3글자 이상 적어주세요.',
        duration: 1000,
      });
      return;
    }
    if (content.length > 300) {
      toast({
        variant: 'destructive',
        description: '글자수가 너무 많아요.',
        duration: 1000,
      });
      return;
    }
    setIsUploading(true);
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
          id: selectedAddress ? parseInt(selectedAddress.address.id) : 1,
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

    if (data) {
      toast({
        description: '포스트를 저장했습니다.',
        duration: 1000,
      });
    }

    if (error) {
      toast({
        variant: 'destructive',
        description: '포스트 저장 중 오류가 발생했습니다.',
        duration: 1000,
      });
    }

    setIsUploading(false);
  };

  const value = {
    states: {
      content,
      files,
      selectedFile,
      isUploading,
      selectedAddress,
    },
    actions: {
      setContent,
      fileUploadHandler,
      setSelectedAddress,
      submit,
    },
  };

  return <UpdatePostContext.Provider value={value}>{children}</UpdatePostContext.Provider>;
}

export const UpdatePostContext = createContext<UpdatePostContextType>({} as UpdatePostContextType);

export type UpdatePostContextStates = {
  content: string;
  files: ImageFile[];
  selectedFile?: ImageFile;
  isUploading: boolean;
  selectedAddress?: SelectedAddress;
};

export type UpdatePostContextActions = {
  setContent: (content: string) => void;
  fileUploadHandler: (file: File) => void;
  setSelectedAddress: Dispatch<SetStateAction<SelectedAddress | undefined>>;
  submit: () => void;
};

export type UpdatePostContextType = {
  states: UpdatePostContextStates;
  actions: UpdatePostContextActions;
};

export async function uploadFile(newFile: ImageFile) {
  const { url, key, error } = await getSignedUrlForPut(newFile.file.name, newFile.file.type);

  if (url) {
    const uploadResponse = await fetch(url, {
      method: 'PUT',
      body: await newFile.file.arrayBuffer(),
    });

    console.log(uploadResponse);

    newFile.s3Key = key;
  }

  if (error) {
    console.log(error);
  }
}
