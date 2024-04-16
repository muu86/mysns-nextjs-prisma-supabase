'use client';

import { graphql } from '@/graphql/generated/gql';
import { useSuspenseQuery } from '@apollo/client';
import { Suspense, useContext } from 'react';
import { PostContext } from '../context/post-context';
import PostCardOne from './post-card-one';

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

export default function PostCardList() {
  const { states, actions } = useContext(PostContext);
  // const { data, loading, error } = useQuery(QueryPosts);
  // if (loading) return <div>loading...</div>;
  // if (error) throw new Error(error.message);
  const { data } = useSuspenseQuery(QueryPosts);
  return (
    <>
      {data.posts?.map((p, i) => (
        <PostCardOne key={i} post={p} />
      ))}
    </>
  );
}
