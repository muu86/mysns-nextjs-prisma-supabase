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
          url {
            raw
            lg
            md
            sm
          }
        }
      }
    }
  }
`);

export const MutationUpdateOneUser = graphql(`
  mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {
    updateOneUser(data: $data, where: $where) {
      id
      username
      babyBirth
      content
      addresses {
        address {
          c3
        }
      }
      files {
        file {
          url {
            raw
            lg
            md
            sm
          }
        }
      }
      role
    }
  }
`);
