'use client';

import { UpdateUserContext } from '@/components/context/update-user-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ChangeEvent, useContext } from 'react';

export default function ContentCard() {
  const { state, dispatch } = useContext(UpdateUserContext);

  function changeEventHandler(event: ChangeEvent<HTMLTextAreaElement>): void {
    dispatch({
      type: 'setContent',
      payload: event.target.value,
    });
  }

  return (
    <div className="grid auto-rows-max items-start gap-4 col-span-3 lg:gap-8">
      <Card>
        <CardHeader>
          {/* <CardTitle>소개</CardTitle> */}
          <CardDescription>소개글을 작성해주세요</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* <div className="grid gap-3">
            <Label htmlFor="name">제목</Label>
            <Input id="name" type="text" className="w-full" defaultValue="Gamer Gear Pro Controller" />
          </div> */}
            <div className="grid gap-3">
              {/* <Label htmlFor="description">글</Label> */}
              <Textarea id="description" className="min-h-32" value={state.content} onChange={changeEventHandler} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
