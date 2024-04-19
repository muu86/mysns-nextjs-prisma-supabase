import { graphql } from '@/graphql/generated/gql';

export const QueryPosts = graphql(`
  query posts {
    posts {
      id
      content
      user {
        id
        files {
          file {
            location
          }
        }
        username
        addresses {
          address {
            id
            c1
            c2
            c3
            c4
          }
        }
      }
      address {
        id
        c1
        c2
        c3
        c4
      }
      files {
        file {
          location
        }
      }
      updatedAt
    }
  }
`);

export const QueryComments = graphql(`
  query comments($where: CommentWhereInput, $orderBy: [CommentOrderByWithRelationInput!]) {
    comments(where: $where, orderBy: $orderBy) {
      id
      content
      user {
        id
        username
        files {
          file {
            location
          }
        }
      }
      updatedAt
    }
  }
`);

export const MutationCreateOneComment = graphql(`
  mutation createOneComment($data: CommentCreateInput!) {
    createOneComment(data: $data) {
      id
      content
      user {
        id
      }
      post {
        id
      }
    }
  }
`);
