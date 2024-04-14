'use client';

import { MutateUserContext } from '@/components/context/mutate-user-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { UploadIcon } from 'lucide-react';
import Image from 'next/image';
import { ChangeEvent, useContext } from 'react';

export default function ImageCard() {
  const { states, actions } = useContext(MutateUserContext);
  function changeEventHandler(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();

    const file = event.target.files && event.target.files[0];
    if (!file) return;

    actions.fileUploadHandler(file);
  }

  return (
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
            {states.file ? (
              <Image
                alt="profile image"
                className="mx-auto aspect-square w-1/2 rounded-full object-cover hover:cursor-pointer"
                height="300"
                width="300"
                src={`${states.file.tempUrl}`}
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
  );
}
