'use client';

import { MutatePostContext } from '@/components/context/mutate-post-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ChangeEvent, useContext } from 'react';

export default function ContentCard() {
  const { states, actions } = useContext(MutatePostContext);

  function changeEventHandler(event: ChangeEvent<HTMLTextAreaElement>): void {
    actions.setContent(event.target.value);
  }

  return (
    <Card className="grid auto-rows-max items-start gap-4 col-span-3 lg:gap-8">
      <CardHeader>
        {/* <CardTitle>글</CardTitle> */}
        <CardDescription>코멘트를 남겨주세요.</CardDescription>
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
