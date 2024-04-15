'use server';

import { graphql } from '@/graphql/generated/gql';
import { getClient } from '@/lib/apollo';

const QueryUserByIssAndSub = graphql(`
  query QueryUserByIssAndSub($where: UserWhereInput!) {
    findFirstUserOrThrow(where: $where) {
      id
      username
      iss
      sub
    }
  }
`);

export async function getUserByIssAndSub(iss: string, sub: string) {
  const { data, error } = await getClient().query({ query: QueryUserByIssAndSub });

  return data.findFirstUserOrThrow;
}
