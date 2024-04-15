'use client';

import { graphql } from '@/graphql/generated/gql';
import { useQuery } from '@apollo/client';
import { PropsWithChildren, createContext } from 'react';

const QueryPosts = graphql(`
  query getPosts {
    posts {
      id
      content
      address {
        c3
      }
      files {
        file {
          location
        }
      }
    }
  }
`);

export default function PostContextProvider({ children }: PropsWithChildren) {
  const { data, loading, error } = useQuery(QueryPosts);
  console.log(data);
  const value = {
    states: {},
    actions: {},
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

export const PostContext = createContext<PostContextType>({} as PostContextType);

export type PostContextStates = {};

export type PostContextActions = {};

export type PostContextType = {
  states: PostContextStates;
  actions: PostContextActions;
};
