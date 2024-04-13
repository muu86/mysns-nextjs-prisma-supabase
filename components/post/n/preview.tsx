'use client';

import Image from 'next/image';

import { MutatePostContext } from '@/components/context/mutate-post-context';
import { Skeleton } from '@/components/ui/skeleton';
import { ImageFile } from '@/lib/types';
import { UploadIcon } from 'lucide-react';
import { ChangeEvent, useContext } from 'react';

export default function Preview() {
  const { states, actions } = useContext(MutatePostContext);

  function changeEventHandler(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();

    const file = event.target.files && event.target.files[0];
    if (!file) return;

    actions.fileUploadHandler(file);
  }

  return (
    <div className="grid gap-2">
      {states.selectedFile ? (
        <Image
          alt="Product image"
          className="aspect-square w-full rounded-md object-cover"
          height="300"
          width="300"
          src={`${states.selectedFile.tempUrl}`}
        />
      ) : (
        <Skeleton className="w-full aspect-square" />
      )}
      <div className="grid grid-cols-3 gap-2">
        {states.files.map((f, i) => (
          <PreviewOne key={i} file={f} />
        ))}

        <Skeleton>
          <label className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed hover:cursor-pointer">
            <input onChange={changeEventHandler} type="file" accept="image/*" className="hidden" />
            <UploadIcon className="h-4 w-4 text-muted-foreground" />
            <span className="sr-only">업로드</span>
          </label>
        </Skeleton>
      </div>
    </div>
  );
}

function PreviewOne({ file }: { file: ImageFile }) {
  return (
    <button>
      <Image
        alt="Product image"
        className="aspect-square w-full rounded-md object-cover"
        height="84"
        src={`${file.tempUrl}`}
        width="84"
      />
    </button>
  );
}
