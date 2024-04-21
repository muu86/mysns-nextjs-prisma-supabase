/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query getPosts {\n    posts {\n      id\n      content\n      address {\n        c3\n      }\n      files {\n        file {\n          location\n        }\n      }\n    }\n  }\n": types.GetPostsDocument,
    "\n  query addresses {\n    addresses {\n      id\n      code\n      c1\n      c2\n      c3\n      c4\n    }\n  }\n": types.AddressesDocument,
    "\n  query chats($where: ChatWhereInput!) {\n    chats(where: $where) {\n      id\n      name\n      users {\n        user {\n          id\n          username\n          email\n          files {\n            file {\n              url {\n                raw\n                lg\n                md\n                sm\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n": types.ChatsDocument,
    "\n  query chatMessages($where: ChatMessageWhereInput!, $orderBy: [ChatMessageOrderByWithRelationInput!]) {\n    chatMessages(where: $where, orderBy: $orderBy) {\n      id\n      chatId\n      user {\n        id\n        username\n        email\n        files {\n          file {\n            url {\n              sm\n            }\n          }\n        }\n      }\n      message\n      updatedAt\n    }\n  }\n": types.ChatMessagesDocument,
    "\n  mutation createOneChat($data: ChatCreateInput!) {\n    createOneChat(data: $data) {\n      id\n    }\n  }\n": types.CreateOneChatDocument,
    "\n  mutation createOneChatMessage($data: ChatMessageCreateInput!) {\n    createOneChatMessage(data: $data) {\n      id\n      message\n      updatedAt\n    }\n  }\n": types.CreateOneChatMessageDocument,
    "\n  subscription chat($chatId: Int!) {\n    chat(chatId: $chatId) {\n      chatId\n      id\n      user {\n        id\n        username\n        email\n        files {\n          file {\n            url {\n              sm\n            }\n          }\n        }\n      }\n      message\n      updatedAt\n    }\n  }\n": types.ChatDocument,
    "\n  query posts {\n    posts {\n      id\n      content\n      user {\n        id\n        files {\n          status\n          file {\n            url {\n              raw\n              lg\n              md\n              sm\n            }\n          }\n        }\n        username\n        addresses {\n          address {\n            id\n            c1\n            c2\n            c3\n            c4\n          }\n        }\n      }\n      address {\n        id\n        c1\n        c2\n        c3\n        c4\n      }\n      files {\n        file {\n          url {\n            raw\n            lg\n            md\n            sm\n          }\n        }\n      }\n      updatedAt\n    }\n  }\n": types.PostsDocument,
    "\n  query comments($where: CommentWhereInput, $orderBy: [CommentOrderByWithRelationInput!]) {\n    comments(where: $where, orderBy: $orderBy) {\n      id\n      content\n      user {\n        id\n        username\n        files {\n          status\n          file {\n            url {\n              raw\n              lg\n              md\n              sm\n            }\n          }\n        }\n      }\n      updatedAt\n    }\n  }\n": types.CommentsDocument,
    "\n  mutation createPost($data: PostCreateInput!, $strategy: RelationLoadStrategy) {\n    createOnePost(data: $data, relationLoadStrategy: $strategy) {\n      id\n      content\n      address {\n        c3\n      }\n      files {\n        status\n        file {\n          location\n        }\n      }\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation createOneComment($data: CommentCreateInput!) {\n    createOneComment(data: $data) {\n      id\n      content\n      user {\n        id\n      }\n      post {\n        id\n      }\n    }\n  }\n": types.CreateOneCommentDocument,
    "\n  query getUser($where: UserWhereUniqueInput!) {\n    getUser(where: $where) {\n      id\n      username\n      content\n      babyBirth\n      email\n      updatedAt\n      addresses {\n        id\n        address {\n          id\n          code\n          c1\n          c2\n          c3\n          c4\n        }\n      }\n      files {\n        id\n        status\n        file {\n          id\n          location\n          url {\n            raw\n            lg\n            md\n            sm\n          }\n        }\n      }\n    }\n  }\n": types.GetUserDocument,
    "\n  mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {\n    updateOneUser(data: $data, where: $where) {\n      id\n      username\n      babyBirth\n      content\n      addresses {\n        address {\n          c3\n        }\n      }\n      files {\n        file {\n          url {\n            raw\n            lg\n            md\n            sm\n          }\n        }\n      }\n      role\n    }\n  }\n": types.UpdateOneUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getPosts {\n    posts {\n      id\n      content\n      address {\n        c3\n      }\n      files {\n        file {\n          location\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getPosts {\n    posts {\n      id\n      content\n      address {\n        c3\n      }\n      files {\n        file {\n          location\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query addresses {\n    addresses {\n      id\n      code\n      c1\n      c2\n      c3\n      c4\n    }\n  }\n"): (typeof documents)["\n  query addresses {\n    addresses {\n      id\n      code\n      c1\n      c2\n      c3\n      c4\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query chats($where: ChatWhereInput!) {\n    chats(where: $where) {\n      id\n      name\n      users {\n        user {\n          id\n          username\n          email\n          files {\n            file {\n              url {\n                raw\n                lg\n                md\n                sm\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query chats($where: ChatWhereInput!) {\n    chats(where: $where) {\n      id\n      name\n      users {\n        user {\n          id\n          username\n          email\n          files {\n            file {\n              url {\n                raw\n                lg\n                md\n                sm\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query chatMessages($where: ChatMessageWhereInput!, $orderBy: [ChatMessageOrderByWithRelationInput!]) {\n    chatMessages(where: $where, orderBy: $orderBy) {\n      id\n      chatId\n      user {\n        id\n        username\n        email\n        files {\n          file {\n            url {\n              sm\n            }\n          }\n        }\n      }\n      message\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query chatMessages($where: ChatMessageWhereInput!, $orderBy: [ChatMessageOrderByWithRelationInput!]) {\n    chatMessages(where: $where, orderBy: $orderBy) {\n      id\n      chatId\n      user {\n        id\n        username\n        email\n        files {\n          file {\n            url {\n              sm\n            }\n          }\n        }\n      }\n      message\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createOneChat($data: ChatCreateInput!) {\n    createOneChat(data: $data) {\n      id\n    }\n  }\n"): (typeof documents)["\n  mutation createOneChat($data: ChatCreateInput!) {\n    createOneChat(data: $data) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createOneChatMessage($data: ChatMessageCreateInput!) {\n    createOneChatMessage(data: $data) {\n      id\n      message\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  mutation createOneChatMessage($data: ChatMessageCreateInput!) {\n    createOneChatMessage(data: $data) {\n      id\n      message\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  subscription chat($chatId: Int!) {\n    chat(chatId: $chatId) {\n      chatId\n      id\n      user {\n        id\n        username\n        email\n        files {\n          file {\n            url {\n              sm\n            }\n          }\n        }\n      }\n      message\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  subscription chat($chatId: Int!) {\n    chat(chatId: $chatId) {\n      chatId\n      id\n      user {\n        id\n        username\n        email\n        files {\n          file {\n            url {\n              sm\n            }\n          }\n        }\n      }\n      message\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query posts {\n    posts {\n      id\n      content\n      user {\n        id\n        files {\n          status\n          file {\n            url {\n              raw\n              lg\n              md\n              sm\n            }\n          }\n        }\n        username\n        addresses {\n          address {\n            id\n            c1\n            c2\n            c3\n            c4\n          }\n        }\n      }\n      address {\n        id\n        c1\n        c2\n        c3\n        c4\n      }\n      files {\n        file {\n          url {\n            raw\n            lg\n            md\n            sm\n          }\n        }\n      }\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query posts {\n    posts {\n      id\n      content\n      user {\n        id\n        files {\n          status\n          file {\n            url {\n              raw\n              lg\n              md\n              sm\n            }\n          }\n        }\n        username\n        addresses {\n          address {\n            id\n            c1\n            c2\n            c3\n            c4\n          }\n        }\n      }\n      address {\n        id\n        c1\n        c2\n        c3\n        c4\n      }\n      files {\n        file {\n          url {\n            raw\n            lg\n            md\n            sm\n          }\n        }\n      }\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query comments($where: CommentWhereInput, $orderBy: [CommentOrderByWithRelationInput!]) {\n    comments(where: $where, orderBy: $orderBy) {\n      id\n      content\n      user {\n        id\n        username\n        files {\n          status\n          file {\n            url {\n              raw\n              lg\n              md\n              sm\n            }\n          }\n        }\n      }\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query comments($where: CommentWhereInput, $orderBy: [CommentOrderByWithRelationInput!]) {\n    comments(where: $where, orderBy: $orderBy) {\n      id\n      content\n      user {\n        id\n        username\n        files {\n          status\n          file {\n            url {\n              raw\n              lg\n              md\n              sm\n            }\n          }\n        }\n      }\n      updatedAt\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createPost($data: PostCreateInput!, $strategy: RelationLoadStrategy) {\n    createOnePost(data: $data, relationLoadStrategy: $strategy) {\n      id\n      content\n      address {\n        c3\n      }\n      files {\n        status\n        file {\n          location\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createPost($data: PostCreateInput!, $strategy: RelationLoadStrategy) {\n    createOnePost(data: $data, relationLoadStrategy: $strategy) {\n      id\n      content\n      address {\n        c3\n      }\n      files {\n        status\n        file {\n          location\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createOneComment($data: CommentCreateInput!) {\n    createOneComment(data: $data) {\n      id\n      content\n      user {\n        id\n      }\n      post {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createOneComment($data: CommentCreateInput!) {\n    createOneComment(data: $data) {\n      id\n      content\n      user {\n        id\n      }\n      post {\n        id\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUser($where: UserWhereUniqueInput!) {\n    getUser(where: $where) {\n      id\n      username\n      content\n      babyBirth\n      email\n      updatedAt\n      addresses {\n        id\n        address {\n          id\n          code\n          c1\n          c2\n          c3\n          c4\n        }\n      }\n      files {\n        id\n        status\n        file {\n          id\n          location\n          url {\n            raw\n            lg\n            md\n            sm\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query getUser($where: UserWhereUniqueInput!) {\n    getUser(where: $where) {\n      id\n      username\n      content\n      babyBirth\n      email\n      updatedAt\n      addresses {\n        id\n        address {\n          id\n          code\n          c1\n          c2\n          c3\n          c4\n        }\n      }\n      files {\n        id\n        status\n        file {\n          id\n          location\n          url {\n            raw\n            lg\n            md\n            sm\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {\n    updateOneUser(data: $data, where: $where) {\n      id\n      username\n      babyBirth\n      content\n      addresses {\n        address {\n          c3\n        }\n      }\n      files {\n        file {\n          url {\n            raw\n            lg\n            md\n            sm\n          }\n        }\n      }\n      role\n    }\n  }\n"): (typeof documents)["\n  mutation updateOneUser($data: UserUpdateInput!, $where: UserWhereUniqueInput!) {\n    updateOneUser(data: $data, where: $where) {\n      id\n      username\n      babyBirth\n      content\n      addresses {\n        address {\n          c3\n        }\n      }\n      files {\n        file {\n          url {\n            raw\n            lg\n            md\n            sm\n          }\n        }\n      }\n      role\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;