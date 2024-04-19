'use client';

import { QueryPosts } from '@/graphql/query/posts';
import { useSuspenseQuery } from '@apollo/client';
import PostCardOne from './post-card-one';

export default function PostCardList() {
  const { data } = useSuspenseQuery(QueryPosts);

  return (
    <>
      {data.posts?.map((p, i) => (
        <PostCardOne key={i} post={p} />
      ))}
    </>
  );
}
