'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Preview from './preview';
import { UploadIcon } from 'lucide-react';
import { ChangeEvent, useContext } from 'react';
import { UpdatePostContext } from '@/components/context/update-post-context';
import { Button } from '@/components/ui/button';

export default function UploadCard() {
  const { states, actions } = useContext(UpdatePostContext);
  function changeEventHandler(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();

    const file = event.target.files && event.target.files[0];
    if (!file) return;

    actions.fileUploadHandler(file);
  }

  return (
    <div className="col-span-3 grid auto-rows-max items-start gap-4 lg:gap-8">
      <Card className="overflow-hidden">
        <CardHeader className="flex-row items-center">
          {/* <CardTitle>이미지 업로드</CardTitle> */}
          <CardDescription className="flex-1">이미지 업로드하세요.</CardDescription>
          <label className="border w-12 h-12 rounded-sm flex items-center justify-center hover:cursor-pointer">
            {/* <Button className="m-0"> */}
            <input onChange={changeEventHandler} type="file" accept="image/*" className="hidden" />
            <UploadIcon className="h-4 w-4" />
            <span className="sr-only">업로드</span>
            {/* </Button> */}
          </label>
        </CardHeader>
        <CardContent>
          <Preview />
        </CardContent>
      </Card>
    </div>
  );
}
