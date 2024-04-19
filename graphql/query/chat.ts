import { graphql } from '../generated/gql';

export const QueryChats = graphql(`
  query chats($where: ChatWhereInput!) {
    chats(where: $where) {
      id
      name
      users {
        user {
          id
          username
          email
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
      }
    }
  }
`);

export const QueryChatMessages = graphql(`
  query chatMessages($where: ChatMessageWhereInput!, $orderBy: [ChatMessageOrderByWithRelationInput!]) {
    chatMessages(where: $where, orderBy: $orderBy) {
      id
      chatId
      user {
        id
        username
        email
        files {
          file {
            url {
              sm
            }
          }
        }
      }
      message
      updatedAt
    }
  }
`);

export const MutationCreateOneChat = graphql(`
  mutation createOneChat($data: ChatCreateInput!) {
    createOneChat(data: $data) {
      id
    }
  }
`);

export const MutationCreateOneChatMessage = graphql(`
  mutation createOneChatMessage($data: ChatMessageCreateInput!) {
    createOneChatMessage(data: $data) {
      id
      message
      updatedAt
    }
  }
`);

export const SubscriptionChat = graphql(`
  subscription chat($chatId: Int!) {
    chat(chatId: $chatId) {
      chatId
      id
      user {
        id
        username
        email
        files {
          file {
            url {
              sm
            }
          }
        }
      }
      message
      updatedAt
    }
  }
`);
