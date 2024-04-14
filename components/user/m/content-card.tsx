'use client';

import { MutateUserContext } from '@/components/context/mutate-user-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ChangeEvent, useContext } from 'react';

export default function ContentCard() {
  const { states, actions } = useContext(MutateUserContext);

  function changeEventHandler(event: ChangeEvent<HTMLTextAreaElement>): void {
    actions.setContent(event.target.value);
  }

  return (
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
            <Textarea id="description" className="min-h-32" value={states.content} onChange={changeEventHandler} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
