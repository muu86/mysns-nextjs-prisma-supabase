'use client';

import { getPresignedUrlForPut } from '@/actions/file';
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
      dispatch({ type: 'setFile', payload: { tempUrl, file } });

      await uploadFile(newFile);

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
              {state.file ? (
                <Image
                  alt="profile image"
                  className="mx-auto aspect-square w-1/2 rounded-full object-cover hover:cursor-pointer"
                  height="300"
                  width="300"
                  src={`${state.file.tempUrl}`}
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
  const buffer = await newFile.file.arrayBuffer();
  const { key, signedUrl } = await getPresignedUrlForPut();

  const response = await fetch(signedUrl, {
    method: 'PUT',
    body: buffer,
  });
  newFile.s3Key = key;
}
