import { graphql } from '@/graphql/generated/gql';

export const QueryPosts = graphql(`
  query posts {
    posts {
      id
      content
      user {
        id
        files {
          status
          file {
            url {
              raw
              lg
              md
              sm
            }
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
          url {
            raw
            lg
            md
            sm
          }
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
            url {
              raw
              lg
              md
              sm
            }
          }
        }
      }
      updatedAt
    }
  }
`);

export const MutationCreateOnePost = graphql(`
  mutation createPost($data: PostCreateInput!, $strategy: RelationLoadStrategy) {
    createOnePost(data: $data, relationLoadStrategy: $strategy) {
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
