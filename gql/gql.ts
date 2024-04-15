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
    "\n  mutation createPost($data: PostCreateInput!, $strategy: RelationLoadStrategy) {\n    createOnePost(data: $data, relationLoadStrategy: $strategy) {\n      id\n      content\n      address {\n        c3\n      }\n      files {\n        file {\n          location\n        }\n      }\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation createUser($data: UserCreateInput!, $strategy: RelationLoadStrategy) {\n    createOneUser(data: $data, relationLoadStrategy: $strategy) {\n      id\n      username\n      babyBirth\n      content\n      addresses {\n        address {\n          c3\n        }\n      }\n      files {\n        file {\n          location\n        }\n      }\n    }\n  }\n": types.CreateUserDocument,
    "\n  query getAllAddress {\n    addresses {\n      id\n      code\n      c1\n      c2\n      c3\n      c4\n    }\n  }\n": types.GetAllAddressDocument,
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
export function graphql(source: "\n  mutation createPost($data: PostCreateInput!, $strategy: RelationLoadStrategy) {\n    createOnePost(data: $data, relationLoadStrategy: $strategy) {\n      id\n      content\n      address {\n        c3\n      }\n      files {\n        file {\n          location\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createPost($data: PostCreateInput!, $strategy: RelationLoadStrategy) {\n    createOnePost(data: $data, relationLoadStrategy: $strategy) {\n      id\n      content\n      address {\n        c3\n      }\n      files {\n        file {\n          location\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createUser($data: UserCreateInput!, $strategy: RelationLoadStrategy) {\n    createOneUser(data: $data, relationLoadStrategy: $strategy) {\n      id\n      username\n      babyBirth\n      content\n      addresses {\n        address {\n          c3\n        }\n      }\n      files {\n        file {\n          location\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  mutation createUser($data: UserCreateInput!, $strategy: RelationLoadStrategy) {\n    createOneUser(data: $data, relationLoadStrategy: $strategy) {\n      id\n      username\n      babyBirth\n      content\n      addresses {\n        address {\n          c3\n        }\n      }\n      files {\n        file {\n          location\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getAllAddress {\n    addresses {\n      id\n      code\n      c1\n      c2\n      c3\n      c4\n    }\n  }\n"): (typeof documents)["\n  query getAllAddress {\n    addresses {\n      id\n      code\n      c1\n      c2\n      c3\n      c4\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;