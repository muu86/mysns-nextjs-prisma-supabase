import { graphql } from '../generated/gql';

export const QueryGetUser = graphql(`
  query getUser($where: UserWhereUniqueInput!) {
    getUser(where: $where) {
      id
      username
      content
      babyBirth
      email
      updatedAt
      addresses {
        address {
          id
          c1
          c2
          c3
          c4
        }
      }
      files {
        file {
          id
          location
        }
      }
    }
  }
`);
