'use server';

import { graphql } from '@/graphql/generated/gql';
import { getClient } from '@/lib/apollo-client';

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
export async function getPosts() {
  const { data, loading, error } = await getClient().query({ query: QueryPosts });
  if (error) {
    throw new Error(error.message);
  }
  console.log('[server action][getPosts] data.length: ', data.posts.length);
  return data.posts;
}
