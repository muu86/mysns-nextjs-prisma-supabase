'use client';

import { getPosts } from '@/actions/post';
import { GetPostsQuery } from '@/graphql/generated/gql/graphql';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';

export default function PostContextProvider({ children }: PropsWithChildren) {
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
    states: {
      posts,
    },
    actions: {},
  };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export const PostContext = createContext<PostContextType>({} as PostContextType);

export type PostContextStates = {
  posts: GetPostsQuery['posts'];
};

export type PostContextActions = {};

export type PostContextType = {
  states: PostContextStates;
  actions: PostContextActions;
};
