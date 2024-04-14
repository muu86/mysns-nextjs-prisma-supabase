/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  c1: Scalars['String']['output'];
  c2?: Maybe<Scalars['String']['output']>;
  c3?: Maybe<Scalars['String']['output']>;
  c4?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type File = {
  __typename?: 'File';
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createPost: Post;
  createUser: User;
};


export type MutationCreatePostArgs = {
  addressCode: Scalars['String']['input'];
  content: Scalars['String']['input'];
  fileKeys: Array<Scalars['String']['input']>;
};


export type MutationCreateUserArgs = {
  addressIds: Array<Scalars['ID']['input']>;
  babyBirth?: InputMaybe<Scalars['Date']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  fileKeys: Array<Scalars['String']['input']>;
  username: Scalars['String']['input'];
};

export type Post = {
  __typename?: 'Post';
  address: Address;
  content: Scalars['String']['output'];
  files: Array<PostFile>;
  id: Scalars['ID']['output'];
};

export type PostFile = {
  __typename?: 'PostFile';
  file: File;
  id: Scalars['ID']['output'];
  post: Post;
};

export type Query = {
  __typename?: 'Query';
  getAddress: Array<Address>;
  getPosts: Array<Post>;
  getUser: User;
  ok: Scalars['Boolean']['output'];
};


export type QueryGetUserArgs = {
  username: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  addresses: Array<UserAddress>;
  babyBirth?: Maybe<Scalars['Date']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  files: Array<UserFile>;
  id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type UserAddress = {
  __typename?: 'UserAddress';
  address: Address;
  id: Scalars['ID']['output'];
  user: User;
};

export type UserFile = {
  __typename?: 'UserFile';
  file: File;
  id: Scalars['ID']['output'];
  user: User;
};

export type CreatePostMutationVariables = Exact<{
  content: Scalars['String']['input'];
  addressCode: Scalars['String']['input'];
  fileKeys: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string, content: string, address: { __typename?: 'Address', id: string, code: string, c3?: string | null }, files: Array<{ __typename?: 'PostFile', file: { __typename?: 'File', location: string } }> } };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String']['input'];
  content?: InputMaybe<Scalars['String']['input']>;
  babyBirth?: InputMaybe<Scalars['Date']['input']>;
  addressIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
  fileKeys: Array<Scalars['String']['input']> | Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, username: string, babyBirth?: any | null, content?: string | null, addresses: Array<{ __typename?: 'UserAddress', address: { __typename?: 'Address', c3?: string | null } }>, files: Array<{ __typename?: 'UserFile', file: { __typename?: 'File', location: string } }> } };

export type GetAllAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAddressQuery = { __typename?: 'Query', getAddress: Array<{ __typename?: 'Address', id: string, code: string, c1: string, c2?: string | null, c3?: string | null, c4?: string | null }> };


export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addressCode"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileKeys"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createPost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"addressCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addressCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"fileKeys"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileKeys"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"c3"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"content"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"babyBirth"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Date"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"addressIds"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fileKeys"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"Argument","name":{"kind":"Name","value":"content"},"value":{"kind":"Variable","name":{"kind":"Name","value":"content"}}},{"kind":"Argument","name":{"kind":"Name","value":"babyBirth"},"value":{"kind":"Variable","name":{"kind":"Name","value":"babyBirth"}}},{"kind":"Argument","name":{"kind":"Name","value":"addressIds"},"value":{"kind":"Variable","name":{"kind":"Name","value":"addressIds"}}},{"kind":"Argument","name":{"kind":"Name","value":"fileKeys"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fileKeys"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"babyBirth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"c3"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GetAllAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"c1"}},{"kind":"Field","name":{"kind":"Name","value":"c2"}},{"kind":"Field","name":{"kind":"Name","value":"c3"}},{"kind":"Field","name":{"kind":"Name","value":"c4"}}]}}]}}]} as unknown as DocumentNode<GetAllAddressQuery, GetAllAddressQueryVariables>;