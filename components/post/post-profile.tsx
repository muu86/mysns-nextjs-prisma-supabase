import { ActiveStatus, PostsQuery } from '@/graphql/generated/gql/graphql';
import * as dfn from 'date-fns';
import { Suspense, useState } from 'react';
import ProfileImageWithFallback from '../common/profile-image-with-fallback';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { CircleUser } from 'lucide-react';

export default function PostCardProfile({ post }: { post: PostsQuery['posts'][number] }) {
  const src = post.user.files.find((f) => f.status === ActiveStatus.Active)?.file.url.sm;
  return (
    <div className="my-2 pt-2 flex flex-row items-center">
      <div className="flex-1 flex flex-row items-center justify-start gap-4">
        {/* <Suspense fallback={<div className="w-full h-full bg-black">hi</div>}>
          <ProfileImageWithFallback className="col-span-8" src={url} />
        </Suspense> */}
        <div className="relative flex justify-center items-center rounded-full overflow-hidden h-10 w-10 shrink-0">
          {src ? (
            <Image fill src={src} alt="profile" className="object-cover" />
          ) : (
            <div className="w-full aspect-square flex items-center justify-center bg-muted">
              <CircleUser />
            </div>
          )}
        </div>

        <div className="">
          <p className="text-sm font-medium leading-none">{post.user.username ? post.user.username : '?'}</p>
          {/* <p className="text-sm text-muted-foreground">olivia.martin@email.com</p> */}
        </div>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Badge>{post.address.c3}</Badge>
        <div className="ml-auto font-medium">{dfn.differenceInDays(Date.now(), post.updatedAt)}</div>
      </div>
    </div>
  );
}
