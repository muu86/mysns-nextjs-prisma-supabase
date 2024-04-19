'use client';

import { getPresignedUrlForGet } from '@/actions/file';
import { CommentsQuery } from '@/graphql/generated/gql/graphql';
import * as dfn from 'date-fns';
import { Suspense, useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Separator } from '../ui/separator';
import { CircleUserRound } from 'lucide-react';

export function CommentOne({ comment }: { comment: CommentsQuery['comments'][number] }) {
  const [url, setUrl] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      if (comment.user.files.length > 0) {
        const urls = await getPresignedUrlForGet(comment.user.files[0].file.location);
        setUrl(urls.sm);
      }
    })();
  }, [comment]);

  return (
    <>
      <div className="flex flex-row items-center w-full px-2 py-2 gap-4">
        <div className="flex flex-col items-center justify-start gap-2">
          <Avatar className="">
            <AvatarImage src={url} alt="profile-image" className="object-cover" />
            <AvatarFallback>
              <CircleUserRound />
            </AvatarFallback>
          </Avatar>
          <div className="">
            <p className="text-sm font-medium leading-none">{comment.user.username ? comment.user.username : '?'}</p>
          </div>
        </div>
        <div className="flex-1">{comment.content}</div>
        <div className="flex flex-row items-center self-end gap-2">
          <div className="ml-auto">
            <span className="text-xs font-extralight">{dfn.differenceInDays(Date.now(), comment.updatedAt)}일전</span>
          </div>
        </div>
      </div>
      <Separator />
    </>
  );
}
