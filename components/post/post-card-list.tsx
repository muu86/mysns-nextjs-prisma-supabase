'use client';

import { QueryPosts, QueryPostsNear } from '@/graphql/query/posts';
import { useSuspenseQuery } from '@apollo/client';
import PostCardOne from './post-card-one';
import { useContext } from 'react';
import { PostContext } from '../context/post-context';

export default function PostCardList() {
  const { state } = useContext(PostContext);
  const userEmail = state.session?.user?.email;
  // useSuspenseQuery();

  const { data } = useSuspenseQuery(QueryPosts);
  // const { data } = useSuspenseQuery(QueryPostsNear, {
  //   variables: {
  //     selectedAddressId:
  //   }
  // });

  return (
    <>
      {data.posts?.map((p, i) => (
        <PostCardOne key={i} post={p} />
      ))}
    </>
  );
}
