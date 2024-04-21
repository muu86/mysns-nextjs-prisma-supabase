'use client';

import { getSignedUrlForPut } from '@/actions/file';
import { UpdateUserContext } from '@/components/context/update-user-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { ImageFile } from '@/lib/types';
import { UploadIcon } from 'lucide-react';
import Image from 'next/image';
import { ChangeEvent, useCallback, useContext } from 'react';

export default function ImageCard() {
  const { state, dispatch } = useContext(UpdateUserContext);
  const changeEventHandler = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      const file = event.target.files && event.target.files[0];
      if (!file) return;

      dispatch({ type: 'setIsUploading', payload: true });

      const tempUrl = URL.createObjectURL(file);
      const newFile: ImageFile = { tempUrl, file };
      await uploadFile(newFile);

      dispatch({ type: 'setFile', payload: newFile });
      dispatch({ type: 'setIsUploading', payload: false });
    },
    [dispatch]
  );

  return (
    <div className="grid auto-rows-max items-start gap-4 col-span-3 lg:gap-8">
      <Card>
        <CardHeader>
          {/* <CardTitle>이미지</CardTitle> */}
          <CardDescription>이미지를 업로드하세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <input
              onChange={changeEventHandler}
              id="profile-image-upload"
              type="file"
              accept="image/*"
              className="hidden"
            />
            <label htmlFor="profile-image-upload">
              {state.newFile ? (
                <Image
                  alt="profile image"
                  className="mx-auto aspect-square w-1/2 rounded-full object-cover hover:cursor-pointer"
                  height="300"
                  width="300"
                  src={`${state.newFile.tempUrl}`}
                />
              ) : state.before && state.before.files.length > 0 ? (
                <Image
                  alt="profile image"
                  className="mx-auto aspect-square w-1/2 rounded-full object-cover hover:cursor-pointer"
                  height="300"
                  width="300"
                  src={`${state.before.files[0].file.url.md}`}
                />
              ) : (
                <Skeleton className="mx-auto w-1/2 rounded-full aspect-square flex items-center justify-center hover:cursor-pointer">
                  <UploadIcon className="h-4 w-4 text-muted-foreground" />
                  <span className="sr-only">업로드</span>
                </Skeleton>
              )}
            </label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

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
