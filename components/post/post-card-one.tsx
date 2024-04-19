'use client';

import { Card, CardContent } from '@/components/ui/card';
import { PostsQuery } from '@/graphql/generated/gql/graphql';
import Comment from './comment';
import { Suspense, lazy, useContext } from 'react';
import CommentContextProvider from '../context/comment-context';
import { PostContext } from '../context/post-context';
import { Skeleton } from '../ui/skeleton';
import PostCardProfile from './post-profile';
const PostCarousel = lazy(() => import('./post-carousel'));

export default function PostCardOne({ post }: { post: PostsQuery['posts'][number] }) {
  const { state } = useContext(PostContext);
  return (
    <div className="grid auto-rows-max items-start gap-4 col-span-3 lg:gap-8">
      <Card>
        <CardContent className="grid gap-2">
          <PostCardProfile post={post} />

          <Suspense fallback={<Skeleton className="w-full aspect-square"></Skeleton>}>
            <PostCarousel post={post} />
          </Suspense>

          <Card className="border-0 shadow-none">
            <CardContent className="p-6">{post.content}</CardContent>
          </Card>

          <CommentContextProvider>
            <Comment post={post} />
          </CommentContextProvider>
        </CardContent>
      </Card>
    </div>
  );
}
