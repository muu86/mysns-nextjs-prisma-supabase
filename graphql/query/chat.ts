import { graphql } from '../generated/gql';

export const MutationChat = graphql(`
  mutation createOneChat($data: ChatCreateInput!) {
    createOneChat(data: $data) {
      id
    }
  }
`);
