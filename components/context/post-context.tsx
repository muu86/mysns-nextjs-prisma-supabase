'use client';

import { getPosts } from '@/actions/post';
import { GetPostsQuery } from '@/graphql/generated/gql/graphql';
import { Session } from 'next-auth';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';

export default function PostContextProvider({ session, children }: PropsWithChildren<{ session: Session | null }>) {
  const [posts, setPosts] = useState<GetPostsQuery['posts']>([]);

  // useEffect(() => {
  //   getNextPosts();
  // }, []);

  // async function getNextPosts() {
  //   const data = await getPosts();
  //   const filterDuplicated = data.filter((n) => posts.findIndex((p) => p.id === n.id) < 0);
  //   setPosts([...posts, ...filterDuplicated]);
  // }

  const value = {
    state: {
      session,
      posts,
    },
    action: {},
  };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export const PostContext = createContext<PostContextType>({} as PostContextType);

export type PostContextStates = {
  session: Session | null;
  posts: GetPostsQuery['posts'];
};

export type PostContextActions = {};

export type PostContextType = {
  state: PostContextStates;
  action: PostContextActions;
};