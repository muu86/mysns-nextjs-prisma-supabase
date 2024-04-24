'use client';

import { SortOrder } from '@/graphql/generated/gql/graphql';
import { QueryPosts } from '@/graphql/query/posts';
import { useSuspenseQuery } from '@apollo/client';
import PostCardOne from './post-card-one';

export default function PostListWithoutAddress() {
  const { data } = useSuspenseQuery(QueryPosts, {
    variables: {
      orderBy: [
        {
          updatedAt: SortOrder.Desc,
        },
      ],
    },
  });
  return (
    <>
      {data.posts?.map((p, i) => (
        <PostCardOne key={i} post={p} />
      ))}
    </>
  );
}
