'use client';

import { MutatePostContext } from '@/components/context/mutate-post-context';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { ChangeEvent, useContext } from 'react';

export default function Content() {
  const { states, actions } = useContext(MutatePostContext);

  function changeEventHandler(event: ChangeEvent<HTMLTextAreaElement>): void {
    actions.setContent(event.target.value);
  }

  return (
    <Card x-chunk="dashboard-07-chunk-0">
      <CardHeader>
        <CardTitle>포스트</CardTitle>
        <CardDescription>포스트 등록화면입니다</CardDescription>
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
