import { getPresignedUrlForGet } from '@/actions/file';
import { PostsQuery } from '@/graphql/generated/gql/graphql';
import { Suspense, useEffect, useState } from 'react';
import ProfileImageWithFallback from '../common/profile-image-with-fallback';
import * as dfn from 'date-fns';
import { Badge } from '../ui/badge';

export default function PostCardProfile({ post }: { post: PostsQuery['posts'][number] }) {
  const [url, setUrl] = useState<string | undefined>();

  useEffect(() => {
    (async () => {
      if (post.user.files.length > 0) {
        const urls = await getPresignedUrlForGet(post.user.files[0].file.location);
        setUrl(urls.lg);
      }
    })();
  }, [post]);

  const [error, setError] = useState(false);

  return (
    <div className="my-2 flex flex-row">
      <div className="flex-1 flex flex-row items-center justify-start gap-4">
        <Suspense fallback={<div className="w-full h-full bg-black">hi</div>}>
          <ProfileImageWithFallback className="col-span-8" src={url} />
        </Suspense>
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
