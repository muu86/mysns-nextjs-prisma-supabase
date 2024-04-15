'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';

export default function PostCard() {
  return (
    <div className="grid auto-rows-max items-start gap-4 col-span-3 lg:gap-8">
      <Card x-chunk="dashboard-07-chunk-0">
        <CardHeader>
          <CardTitle>코멘트</CardTitle>
          <CardDescription>코멘트 등록입니다</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            {/* <div className="grid gap-3">
            <Label htmlFor="name">제목</Label>
            <Input id="name" type="text" className="w-full" defaultValue="Gamer Gear Pro Controller" />
          </div> */}
            <div className="grid gap-3">
              {/* <Label htmlFor="description">글</Label> */}
              {/* <Textarea id="description" className="min-h-32" value={states.content} onChange={changeEventHandler} /> */}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
