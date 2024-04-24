import { graphql } from '@/graphql/generated/gql';

export const QueryPosts = graphql(`
  query posts(
    $where: PostWhereInput
    $orderBy: [PostOrderByWithRelationInput!]
    $cursor: PostWhereUniqueInput
    $take: Int
    $skip: Int
  ) {
    posts(where: $where, orderBy: $orderBy) {
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
        email
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

export const QueryPostsNear = graphql(`
  query postsNear($selectedAddressId: ID!, $take: Int, $skip: Int, $cursor: PostWhereUniqueInput) {
    postsNear(selectedAddressId: $selectedAddressId, take: $take, skip: $skip, cursor: $cursor) {
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
        email
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
        status
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
