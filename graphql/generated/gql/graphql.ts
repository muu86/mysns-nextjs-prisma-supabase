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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type AccountAvgOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int']['output'];
  access_token: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id_token: Scalars['Int']['output'];
  provider: Scalars['Int']['output'];
  providerAccountId: Scalars['Int']['output'];
  refresh_token: Scalars['Int']['output'];
  scope: Scalars['Int']['output'];
  session_state: Scalars['Int']['output'];
  token_type: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountCountOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutAccountsInput;
};

export type AccountCreateManyInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type AccountGroupBy = {
  __typename?: 'AccountGroupBy';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type AccountMaxOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type AccountMinOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithAggregationInput = {
  _avg?: InputMaybe<AccountAvgOrderByAggregateInput>;
  _count?: InputMaybe<AccountCountOrderByAggregateInput>;
  _max?: InputMaybe<AccountMaxOrderByAggregateInput>;
  _min?: InputMaybe<AccountMinOrderByAggregateInput>;
  _sum?: InputMaybe<AccountSumOrderByAggregateInput>;
  access_token?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrderInput>;
  id_token?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  access_token?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrderInput>;
  id_token?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  CreatedAt = 'createdAt',
  ExpiresAt = 'expires_at',
  IdToken = 'id_token',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expires_at?: InputMaybe<IntNullableWithAggregatesFilter>;
  id_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  refresh_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  scope?: InputMaybe<StringNullableWithAggregatesFilter>;
  session_state?: InputMaybe<StringNullableWithAggregatesFilter>;
  token_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  expires_at?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type AccountSumOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountsNestedInput>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type AccountWhereUniqueInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type Address = {
  __typename?: 'Address';
  _count?: Maybe<AddressCount>;
  c1: Scalars['String']['output'];
  c2?: Maybe<Scalars['String']['output']>;
  c3?: Maybe<Scalars['String']['output']>;
  c4?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  posts: Array<Post>;
  updatedAt: Scalars['DateTimeISO']['output'];
  users: Array<UserAddress>;
};


export type AddressPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type AddressUsersArgs = {
  cursor?: InputMaybe<UserAddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAddressWhereInput>;
};

export type AddressAvgAggregate = {
  __typename?: 'AddressAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type AddressAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type AddressCount = {
  __typename?: 'AddressCount';
  posts: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
};


export type AddressCountPostsArgs = {
  where?: InputMaybe<PostWhereInput>;
};


export type AddressCountUsersArgs = {
  where?: InputMaybe<UserAddressWhereInput>;
};

export type AddressCountAggregate = {
  __typename?: 'AddressCountAggregate';
  _all: Scalars['Int']['output'];
  c1: Scalars['Int']['output'];
  c2: Scalars['Int']['output'];
  c3: Scalars['Int']['output'];
  c4: Scalars['Int']['output'];
  code: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type AddressCountOrderByAggregateInput = {
  c1?: InputMaybe<SortOrder>;
  c2?: InputMaybe<SortOrder>;
  c3?: InputMaybe<SortOrder>;
  c4?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddressCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
};

export type AddressCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
};

export type AddressGroupBy = {
  __typename?: 'AddressGroupBy';
  _avg?: Maybe<AddressAvgAggregate>;
  _count?: Maybe<AddressCountAggregate>;
  _max?: Maybe<AddressMaxAggregate>;
  _min?: Maybe<AddressMinAggregate>;
  _sum?: Maybe<AddressSumAggregate>;
  c1: Scalars['String']['output'];
  c2?: Maybe<Scalars['String']['output']>;
  c3?: Maybe<Scalars['String']['output']>;
  c4?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type AddressMaxAggregate = {
  __typename?: 'AddressMaxAggregate';
  c1?: Maybe<Scalars['String']['output']>;
  c2?: Maybe<Scalars['String']['output']>;
  c3?: Maybe<Scalars['String']['output']>;
  c4?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type AddressMaxOrderByAggregateInput = {
  c1?: InputMaybe<SortOrder>;
  c2?: InputMaybe<SortOrder>;
  c3?: InputMaybe<SortOrder>;
  c4?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddressMinAggregate = {
  __typename?: 'AddressMinAggregate';
  c1?: Maybe<Scalars['String']['output']>;
  c2?: Maybe<Scalars['String']['output']>;
  c3?: Maybe<Scalars['String']['output']>;
  c4?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type AddressMinOrderByAggregateInput = {
  c1?: InputMaybe<SortOrder>;
  c2?: InputMaybe<SortOrder>;
  c3?: InputMaybe<SortOrder>;
  c4?: InputMaybe<SortOrder>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddressOrderByWithAggregationInput = {
  _avg?: InputMaybe<AddressAvgOrderByAggregateInput>;
  _count?: InputMaybe<AddressCountOrderByAggregateInput>;
  _max?: InputMaybe<AddressMaxOrderByAggregateInput>;
  _min?: InputMaybe<AddressMinOrderByAggregateInput>;
  _sum?: InputMaybe<AddressSumOrderByAggregateInput>;
  c1?: InputMaybe<SortOrder>;
  c2?: InputMaybe<SortOrderInput>;
  c3?: InputMaybe<SortOrderInput>;
  c4?: InputMaybe<SortOrderInput>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type AddressOrderByWithRelationInput = {
  c1?: InputMaybe<SortOrder>;
  c2?: InputMaybe<SortOrderInput>;
  c3?: InputMaybe<SortOrderInput>;
  c4?: InputMaybe<SortOrderInput>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<UserAddressOrderByRelationAggregateInput>;
};

export type AddressRelationFilter = {
  is?: InputMaybe<AddressWhereInput>;
  isNot?: InputMaybe<AddressWhereInput>;
};

export enum AddressScalarFieldEnum {
  C1 = 'c1',
  C2 = 'c2',
  C3 = 'c3',
  C4 = 'c4',
  Code = 'code',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt'
}

export type AddressScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AddressScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AddressScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AddressScalarWhereWithAggregatesInput>>;
  c1?: InputMaybe<StringWithAggregatesFilter>;
  c2?: InputMaybe<StringNullableWithAggregatesFilter>;
  c3?: InputMaybe<StringNullableWithAggregatesFilter>;
  c4?: InputMaybe<StringNullableWithAggregatesFilter>;
  code?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type AddressSumAggregate = {
  __typename?: 'AddressSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type AddressSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type AddressUpdateInput = {
  c1?: InputMaybe<StringFieldUpdateOperationsInput>;
  c2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  c3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  c4?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAddressNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserAddressUpdateManyWithoutAddressNestedInput>;
};

export type AddressUpdateManyMutationInput = {
  c1?: InputMaybe<StringFieldUpdateOperationsInput>;
  c2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  c3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  c4?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AddressUpdateOneRequiredWithoutPostsNestedInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  update?: InputMaybe<AddressUpdateToOneWithWhereWithoutPostsInput>;
};

export type AddressUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  update?: InputMaybe<AddressUpdateToOneWithWhereWithoutUsersInput>;
};

export type AddressUpdateToOneWithWhereWithoutPostsInput = {
  data: AddressUpdateWithoutPostsInput;
  where?: InputMaybe<AddressWhereInput>;
};

export type AddressUpdateToOneWithWhereWithoutUsersInput = {
  data: AddressUpdateWithoutUsersInput;
  where?: InputMaybe<AddressWhereInput>;
};

export type AddressUpdateWithoutPostsInput = {
  c1?: InputMaybe<StringFieldUpdateOperationsInput>;
  c2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  c3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  c4?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<UserAddressUpdateManyWithoutAddressNestedInput>;
};

export type AddressUpdateWithoutUsersInput = {
  c1?: InputMaybe<StringFieldUpdateOperationsInput>;
  c2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  c3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  c4?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutAddressNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  c1?: InputMaybe<StringFilter>;
  c2?: InputMaybe<StringNullableFilter>;
  c3?: InputMaybe<StringNullableFilter>;
  c4?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserAddressListRelationFilter>;
};

export type AddressWhereUniqueInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  c1?: InputMaybe<StringFilter>;
  c2?: InputMaybe<StringNullableFilter>;
  c3?: InputMaybe<StringNullableFilter>;
  c4?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  posts?: InputMaybe<PostListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserAddressListRelationFilter>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
};

export type AggregateAddress = {
  __typename?: 'AggregateAddress';
  _avg?: Maybe<AddressAvgAggregate>;
  _count?: Maybe<AddressCountAggregate>;
  _max?: Maybe<AddressMaxAggregate>;
  _min?: Maybe<AddressMinAggregate>;
  _sum?: Maybe<AddressSumAggregate>;
};

export type AggregateChat = {
  __typename?: 'AggregateChat';
  _avg?: Maybe<ChatAvgAggregate>;
  _count?: Maybe<ChatCountAggregate>;
  _max?: Maybe<ChatMaxAggregate>;
  _min?: Maybe<ChatMinAggregate>;
  _sum?: Maybe<ChatSumAggregate>;
};

export type AggregateChatMessage = {
  __typename?: 'AggregateChatMessage';
  _avg?: Maybe<ChatMessageAvgAggregate>;
  _count?: Maybe<ChatMessageCountAggregate>;
  _max?: Maybe<ChatMessageMaxAggregate>;
  _min?: Maybe<ChatMessageMinAggregate>;
  _sum?: Maybe<ChatMessageSumAggregate>;
};

export type AggregateChatUser = {
  __typename?: 'AggregateChatUser';
  _avg?: Maybe<ChatUserAvgAggregate>;
  _count?: Maybe<ChatUserCountAggregate>;
  _max?: Maybe<ChatUserMaxAggregate>;
  _min?: Maybe<ChatUserMinAggregate>;
  _sum?: Maybe<ChatUserSumAggregate>;
};

export type AggregateComment = {
  __typename?: 'AggregateComment';
  _avg?: Maybe<CommentAvgAggregate>;
  _count?: Maybe<CommentCountAggregate>;
  _max?: Maybe<CommentMaxAggregate>;
  _min?: Maybe<CommentMinAggregate>;
  _sum?: Maybe<CommentSumAggregate>;
};

export type AggregateFile = {
  __typename?: 'AggregateFile';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
};

export type AggregatePost = {
  __typename?: 'AggregatePost';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
};

export type AggregatePostFile = {
  __typename?: 'AggregatePostFile';
  _avg?: Maybe<PostFileAvgAggregate>;
  _count?: Maybe<PostFileCountAggregate>;
  _max?: Maybe<PostFileMaxAggregate>;
  _min?: Maybe<PostFileMinAggregate>;
  _sum?: Maybe<PostFileSumAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _avg?: Maybe<SessionAvgAggregate>;
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  _sum?: Maybe<SessionSumAggregate>;
};

export type AggregateSpatial_Ref_Sys = {
  __typename?: 'AggregateSpatial_ref_sys';
  _avg?: Maybe<Spatial_Ref_SysAvgAggregate>;
  _count?: Maybe<Spatial_Ref_SysCountAggregate>;
  _max?: Maybe<Spatial_Ref_SysMaxAggregate>;
  _min?: Maybe<Spatial_Ref_SysMinAggregate>;
  _sum?: Maybe<Spatial_Ref_SysSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type AggregateUserAddress = {
  __typename?: 'AggregateUserAddress';
  _avg?: Maybe<UserAddressAvgAggregate>;
  _count?: Maybe<UserAddressCountAggregate>;
  _max?: Maybe<UserAddressMaxAggregate>;
  _min?: Maybe<UserAddressMinAggregate>;
  _sum?: Maybe<UserAddressSumAggregate>;
};

export type AggregateUserFile = {
  __typename?: 'AggregateUserFile';
  _avg?: Maybe<UserFileAvgAggregate>;
  _count?: Maybe<UserFileCountAggregate>;
  _max?: Maybe<UserFileMaxAggregate>;
  _min?: Maybe<UserFileMinAggregate>;
  _sum?: Maybe<UserFileSumAggregate>;
};

export type AggregateVerificationToken = {
  __typename?: 'AggregateVerificationToken';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
};

export type Chat = {
  __typename?: 'Chat';
  _count?: Maybe<ChatCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  messages: Array<ChatMessage>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  users: Array<ChatUser>;
};


export type ChatMessagesArgs = {
  cursor?: InputMaybe<ChatMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type ChatUsersArgs = {
  cursor?: InputMaybe<ChatUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatUserWhereInput>;
};

export type ChatAvgAggregate = {
  __typename?: 'ChatAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type ChatAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ChatCount = {
  __typename?: 'ChatCount';
  messages: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
};


export type ChatCountMessagesArgs = {
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type ChatCountUsersArgs = {
  where?: InputMaybe<ChatUserWhereInput>;
};

export type ChatCountAggregate = {
  __typename?: 'ChatCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type ChatCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChatCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  messages?: InputMaybe<ChatMessageCreateNestedManyWithoutChatInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  users?: InputMaybe<ChatUserCreateNestedManyWithoutChatInput>;
};

export type ChatCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ChatCreateNestedOneWithoutMessagesInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ChatCreateWithoutMessagesInput>;
};

export type ChatCreateNestedOneWithoutUsersInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<ChatCreateWithoutUsersInput>;
};

export type ChatCreateOrConnectWithoutMessagesInput = {
  create: ChatCreateWithoutMessagesInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateOrConnectWithoutUsersInput = {
  create: ChatCreateWithoutUsersInput;
  where: ChatWhereUniqueInput;
};

export type ChatCreateWithoutMessagesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  users?: InputMaybe<ChatUserCreateNestedManyWithoutChatInput>;
};

export type ChatCreateWithoutUsersInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  messages?: InputMaybe<ChatMessageCreateNestedManyWithoutChatInput>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ChatGroupBy = {
  __typename?: 'ChatGroupBy';
  _avg?: Maybe<ChatAvgAggregate>;
  _count?: Maybe<ChatCountAggregate>;
  _max?: Maybe<ChatMaxAggregate>;
  _min?: Maybe<ChatMinAggregate>;
  _sum?: Maybe<ChatSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type ChatMaxAggregate = {
  __typename?: 'ChatMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type ChatMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChatMessage = {
  __typename?: 'ChatMessage';
  chat: Chat;
  chatId: Scalars['Int']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  message: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type ChatMessageAvgAggregate = {
  __typename?: 'ChatMessageAvgAggregate';
  chatId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type ChatMessageAvgOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatMessageCountAggregate = {
  __typename?: 'ChatMessageCountAggregate';
  _all: Scalars['Int']['output'];
  chatId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ChatMessageCountOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatMessageCreateInput = {
  chat: ChatCreateNestedOneWithoutMessagesInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  message: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutChatMessagesInput;
};

export type ChatMessageCreateManyChatInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  message: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type ChatMessageCreateManyChatInputEnvelope = {
  data: Array<ChatMessageCreateManyChatInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatMessageCreateManyInput = {
  chatId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  message: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type ChatMessageCreateManyUserInput = {
  chatId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  message: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ChatMessageCreateManyUserInputEnvelope = {
  data: Array<ChatMessageCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatMessageCreateNestedManyWithoutChatInput = {
  connect?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatMessageCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<ChatMessageCreateWithoutChatInput>>;
  createMany?: InputMaybe<ChatMessageCreateManyChatInputEnvelope>;
};

export type ChatMessageCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatMessageCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ChatMessageCreateWithoutUserInput>>;
  createMany?: InputMaybe<ChatMessageCreateManyUserInputEnvelope>;
};

export type ChatMessageCreateOrConnectWithoutChatInput = {
  create: ChatMessageCreateWithoutChatInput;
  where: ChatMessageWhereUniqueInput;
};

export type ChatMessageCreateOrConnectWithoutUserInput = {
  create: ChatMessageCreateWithoutUserInput;
  where: ChatMessageWhereUniqueInput;
};

export type ChatMessageCreateWithoutChatInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  message: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutChatMessagesInput;
};

export type ChatMessageCreateWithoutUserInput = {
  chat: ChatCreateNestedOneWithoutMessagesInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  message: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ChatMessageGroupBy = {
  __typename?: 'ChatMessageGroupBy';
  _avg?: Maybe<ChatMessageAvgAggregate>;
  _count?: Maybe<ChatMessageCountAggregate>;
  _max?: Maybe<ChatMessageMaxAggregate>;
  _min?: Maybe<ChatMessageMinAggregate>;
  _sum?: Maybe<ChatMessageSumAggregate>;
  chatId: Scalars['Int']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['Int']['output'];
};

export type ChatMessageListRelationFilter = {
  every?: InputMaybe<ChatMessageWhereInput>;
  none?: InputMaybe<ChatMessageWhereInput>;
  some?: InputMaybe<ChatMessageWhereInput>;
};

export type ChatMessageMaxAggregate = {
  __typename?: 'ChatMessageMaxAggregate';
  chatId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ChatMessageMaxOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatMessageMinAggregate = {
  __typename?: 'ChatMessageMinAggregate';
  chatId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ChatMessageMinOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatMessageOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ChatMessageOrderByWithAggregationInput = {
  _avg?: InputMaybe<ChatMessageAvgOrderByAggregateInput>;
  _count?: InputMaybe<ChatMessageCountOrderByAggregateInput>;
  _max?: InputMaybe<ChatMessageMaxOrderByAggregateInput>;
  _min?: InputMaybe<ChatMessageMinOrderByAggregateInput>;
  _sum?: InputMaybe<ChatMessageSumOrderByAggregateInput>;
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatMessageOrderByWithRelationInput = {
  chat?: InputMaybe<ChatOrderByWithRelationInput>;
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  message?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ChatMessageScalarFieldEnum {
  ChatId = 'chatId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Message = 'message',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ChatMessageScalarWhereInput = {
  AND?: InputMaybe<Array<ChatMessageScalarWhereInput>>;
  NOT?: InputMaybe<Array<ChatMessageScalarWhereInput>>;
  OR?: InputMaybe<Array<ChatMessageScalarWhereInput>>;
  chatId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  message?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ChatMessageScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ChatMessageScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ChatMessageScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ChatMessageScalarWhereWithAggregatesInput>>;
  chatId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  message?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ChatMessageSumAggregate = {
  __typename?: 'ChatMessageSumAggregate';
  chatId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ChatMessageSumOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatMessageUpdateInput = {
  chat?: InputMaybe<ChatUpdateOneRequiredWithoutMessagesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutChatMessagesNestedInput>;
};

export type ChatMessageUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChatMessageUpdateManyWithWhereWithoutChatInput = {
  data: ChatMessageUpdateManyMutationInput;
  where: ChatMessageScalarWhereInput;
};

export type ChatMessageUpdateManyWithWhereWithoutUserInput = {
  data: ChatMessageUpdateManyMutationInput;
  where: ChatMessageScalarWhereInput;
};

export type ChatMessageUpdateManyWithoutChatNestedInput = {
  connect?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatMessageCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<ChatMessageCreateWithoutChatInput>>;
  createMany?: InputMaybe<ChatMessageCreateManyChatInputEnvelope>;
  delete?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ChatMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<ChatMessageUpdateWithWhereUniqueWithoutChatInput>>;
  updateMany?: InputMaybe<Array<ChatMessageUpdateManyWithWhereWithoutChatInput>>;
  upsert?: InputMaybe<Array<ChatMessageUpsertWithWhereUniqueWithoutChatInput>>;
};

export type ChatMessageUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatMessageCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ChatMessageCreateWithoutUserInput>>;
  createMany?: InputMaybe<ChatMessageCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ChatMessageScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatMessageWhereUniqueInput>>;
  update?: InputMaybe<Array<ChatMessageUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ChatMessageUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ChatMessageUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ChatMessageUpdateWithWhereUniqueWithoutChatInput = {
  data: ChatMessageUpdateWithoutChatInput;
  where: ChatMessageWhereUniqueInput;
};

export type ChatMessageUpdateWithWhereUniqueWithoutUserInput = {
  data: ChatMessageUpdateWithoutUserInput;
  where: ChatMessageWhereUniqueInput;
};

export type ChatMessageUpdateWithoutChatInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutChatMessagesNestedInput>;
};

export type ChatMessageUpdateWithoutUserInput = {
  chat?: InputMaybe<ChatUpdateOneRequiredWithoutMessagesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  message?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChatMessageUpsertWithWhereUniqueWithoutChatInput = {
  create: ChatMessageCreateWithoutChatInput;
  update: ChatMessageUpdateWithoutChatInput;
  where: ChatMessageWhereUniqueInput;
};

export type ChatMessageUpsertWithWhereUniqueWithoutUserInput = {
  create: ChatMessageCreateWithoutUserInput;
  update: ChatMessageUpdateWithoutUserInput;
  where: ChatMessageWhereUniqueInput;
};

export type ChatMessageWhereInput = {
  AND?: InputMaybe<Array<ChatMessageWhereInput>>;
  NOT?: InputMaybe<Array<ChatMessageWhereInput>>;
  OR?: InputMaybe<Array<ChatMessageWhereInput>>;
  chat?: InputMaybe<ChatRelationFilter>;
  chatId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  message?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ChatMessageWhereUniqueInput = {
  AND?: InputMaybe<Array<ChatMessageWhereInput>>;
  NOT?: InputMaybe<Array<ChatMessageWhereInput>>;
  OR?: InputMaybe<Array<ChatMessageWhereInput>>;
  chat?: InputMaybe<ChatRelationFilter>;
  chatId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ChatMinAggregate = {
  __typename?: 'ChatMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type ChatMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChatOrderByWithAggregationInput = {
  _avg?: InputMaybe<ChatAvgOrderByAggregateInput>;
  _count?: InputMaybe<ChatCountOrderByAggregateInput>;
  _max?: InputMaybe<ChatMaxOrderByAggregateInput>;
  _min?: InputMaybe<ChatMinOrderByAggregateInput>;
  _sum?: InputMaybe<ChatSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type ChatOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  messages?: InputMaybe<ChatMessageOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  users?: InputMaybe<ChatUserOrderByRelationAggregateInput>;
};

export type ChatRelationFilter = {
  is?: InputMaybe<ChatWhereInput>;
  isNot?: InputMaybe<ChatWhereInput>;
};

export enum ChatScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updatedAt'
}

export type ChatScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ChatScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ChatScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ChatScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type ChatSumAggregate = {
  __typename?: 'ChatSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type ChatSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type ChatUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  messages?: InputMaybe<ChatMessageUpdateManyWithoutChatNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<ChatUserUpdateManyWithoutChatNestedInput>;
};

export type ChatUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutMessagesInput>;
  create?: InputMaybe<ChatCreateWithoutMessagesInput>;
  update?: InputMaybe<ChatUpdateToOneWithWhereWithoutMessagesInput>;
  upsert?: InputMaybe<ChatUpsertWithoutMessagesInput>;
};

export type ChatUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<ChatWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ChatCreateOrConnectWithoutUsersInput>;
  create?: InputMaybe<ChatCreateWithoutUsersInput>;
  update?: InputMaybe<ChatUpdateToOneWithWhereWithoutUsersInput>;
  upsert?: InputMaybe<ChatUpsertWithoutUsersInput>;
};

export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
  data: ChatUpdateWithoutMessagesInput;
  where?: InputMaybe<ChatWhereInput>;
};

export type ChatUpdateToOneWithWhereWithoutUsersInput = {
  data: ChatUpdateWithoutUsersInput;
  where?: InputMaybe<ChatWhereInput>;
};

export type ChatUpdateWithoutMessagesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  users?: InputMaybe<ChatUserUpdateManyWithoutChatNestedInput>;
};

export type ChatUpdateWithoutUsersInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  messages?: InputMaybe<ChatMessageUpdateManyWithoutChatNestedInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChatUpsertWithoutMessagesInput = {
  create: ChatCreateWithoutMessagesInput;
  update: ChatUpdateWithoutMessagesInput;
  where?: InputMaybe<ChatWhereInput>;
};

export type ChatUpsertWithoutUsersInput = {
  create: ChatCreateWithoutUsersInput;
  update: ChatUpdateWithoutUsersInput;
  where?: InputMaybe<ChatWhereInput>;
};

export type ChatUser = {
  __typename?: 'ChatUser';
  chat: Chat;
  chatId: Scalars['Int']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type ChatUserAvgAggregate = {
  __typename?: 'ChatUserAvgAggregate';
  chatId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type ChatUserAvgOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatUserCountAggregate = {
  __typename?: 'ChatUserCountAggregate';
  _all: Scalars['Int']['output'];
  chatId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ChatUserCountOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatUserCreateInput = {
  chat: ChatCreateNestedOneWithoutUsersInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutChatsInput;
};

export type ChatUserCreateManyChatInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type ChatUserCreateManyChatInputEnvelope = {
  data: Array<ChatUserCreateManyChatInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatUserCreateManyInput = {
  chatId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type ChatUserCreateManyUserInput = {
  chatId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ChatUserCreateManyUserInputEnvelope = {
  data: Array<ChatUserCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ChatUserCreateNestedManyWithoutChatInput = {
  connect?: InputMaybe<Array<ChatUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatUserCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<ChatUserCreateWithoutChatInput>>;
  createMany?: InputMaybe<ChatUserCreateManyChatInputEnvelope>;
};

export type ChatUserCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ChatUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ChatUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<ChatUserCreateManyUserInputEnvelope>;
};

export type ChatUserCreateOrConnectWithoutChatInput = {
  create: ChatUserCreateWithoutChatInput;
  where: ChatUserWhereUniqueInput;
};

export type ChatUserCreateOrConnectWithoutUserInput = {
  create: ChatUserCreateWithoutUserInput;
  where: ChatUserWhereUniqueInput;
};

export type ChatUserCreateWithoutChatInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutChatsInput;
};

export type ChatUserCreateWithoutUserInput = {
  chat: ChatCreateNestedOneWithoutUsersInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type ChatUserGroupBy = {
  __typename?: 'ChatUserGroupBy';
  _avg?: Maybe<ChatUserAvgAggregate>;
  _count?: Maybe<ChatUserCountAggregate>;
  _max?: Maybe<ChatUserMaxAggregate>;
  _min?: Maybe<ChatUserMinAggregate>;
  _sum?: Maybe<ChatUserSumAggregate>;
  chatId: Scalars['Int']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['Int']['output'];
};

export type ChatUserListRelationFilter = {
  every?: InputMaybe<ChatUserWhereInput>;
  none?: InputMaybe<ChatUserWhereInput>;
  some?: InputMaybe<ChatUserWhereInput>;
};

export type ChatUserMaxAggregate = {
  __typename?: 'ChatUserMaxAggregate';
  chatId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ChatUserMaxOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatUserMinAggregate = {
  __typename?: 'ChatUserMinAggregate';
  chatId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ChatUserMinOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatUserOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ChatUserOrderByWithAggregationInput = {
  _avg?: InputMaybe<ChatUserAvgOrderByAggregateInput>;
  _count?: InputMaybe<ChatUserCountOrderByAggregateInput>;
  _max?: InputMaybe<ChatUserMaxOrderByAggregateInput>;
  _min?: InputMaybe<ChatUserMinOrderByAggregateInput>;
  _sum?: InputMaybe<ChatUserSumOrderByAggregateInput>;
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatUserOrderByWithRelationInput = {
  chat?: InputMaybe<ChatOrderByWithRelationInput>;
  chatId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ChatUserScalarFieldEnum {
  ChatId = 'chatId',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type ChatUserScalarWhereInput = {
  AND?: InputMaybe<Array<ChatUserScalarWhereInput>>;
  NOT?: InputMaybe<Array<ChatUserScalarWhereInput>>;
  OR?: InputMaybe<Array<ChatUserScalarWhereInput>>;
  chatId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ChatUserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ChatUserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ChatUserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ChatUserScalarWhereWithAggregatesInput>>;
  chatId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type ChatUserSumAggregate = {
  __typename?: 'ChatUserSumAggregate';
  chatId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type ChatUserSumOrderByAggregateInput = {
  chatId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ChatUserUpdateInput = {
  chat?: InputMaybe<ChatUpdateOneRequiredWithoutUsersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutChatsNestedInput>;
};

export type ChatUserUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChatUserUpdateManyWithWhereWithoutChatInput = {
  data: ChatUserUpdateManyMutationInput;
  where: ChatUserScalarWhereInput;
};

export type ChatUserUpdateManyWithWhereWithoutUserInput = {
  data: ChatUserUpdateManyMutationInput;
  where: ChatUserScalarWhereInput;
};

export type ChatUserUpdateManyWithoutChatNestedInput = {
  connect?: InputMaybe<Array<ChatUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatUserCreateOrConnectWithoutChatInput>>;
  create?: InputMaybe<Array<ChatUserCreateWithoutChatInput>>;
  createMany?: InputMaybe<ChatUserCreateManyChatInputEnvelope>;
  delete?: InputMaybe<Array<ChatUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ChatUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ChatUserWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatUserWhereUniqueInput>>;
  update?: InputMaybe<Array<ChatUserUpdateWithWhereUniqueWithoutChatInput>>;
  updateMany?: InputMaybe<Array<ChatUserUpdateManyWithWhereWithoutChatInput>>;
  upsert?: InputMaybe<Array<ChatUserUpsertWithWhereUniqueWithoutChatInput>>;
};

export type ChatUserUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ChatUserWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ChatUserCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ChatUserCreateWithoutUserInput>>;
  createMany?: InputMaybe<ChatUserCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ChatUserWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ChatUserScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ChatUserWhereUniqueInput>>;
  set?: InputMaybe<Array<ChatUserWhereUniqueInput>>;
  update?: InputMaybe<Array<ChatUserUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ChatUserUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ChatUserUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ChatUserUpdateWithWhereUniqueWithoutChatInput = {
  data: ChatUserUpdateWithoutChatInput;
  where: ChatUserWhereUniqueInput;
};

export type ChatUserUpdateWithWhereUniqueWithoutUserInput = {
  data: ChatUserUpdateWithoutUserInput;
  where: ChatUserWhereUniqueInput;
};

export type ChatUserUpdateWithoutChatInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutChatsNestedInput>;
};

export type ChatUserUpdateWithoutUserInput = {
  chat?: InputMaybe<ChatUpdateOneRequiredWithoutUsersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type ChatUserUpsertWithWhereUniqueWithoutChatInput = {
  create: ChatUserCreateWithoutChatInput;
  update: ChatUserUpdateWithoutChatInput;
  where: ChatUserWhereUniqueInput;
};

export type ChatUserUpsertWithWhereUniqueWithoutUserInput = {
  create: ChatUserCreateWithoutUserInput;
  update: ChatUserUpdateWithoutUserInput;
  where: ChatUserWhereUniqueInput;
};

export type ChatUserWhereInput = {
  AND?: InputMaybe<Array<ChatUserWhereInput>>;
  NOT?: InputMaybe<Array<ChatUserWhereInput>>;
  OR?: InputMaybe<Array<ChatUserWhereInput>>;
  chat?: InputMaybe<ChatRelationFilter>;
  chatId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ChatUserWhereUniqueInput = {
  AND?: InputMaybe<Array<ChatUserWhereInput>>;
  NOT?: InputMaybe<Array<ChatUserWhereInput>>;
  OR?: InputMaybe<Array<ChatUserWhereInput>>;
  chat?: InputMaybe<ChatRelationFilter>;
  chatId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type ChatWhereInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  messages?: InputMaybe<ChatMessageListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<ChatUserListRelationFilter>;
};

export type ChatWhereUniqueInput = {
  AND?: InputMaybe<Array<ChatWhereInput>>;
  NOT?: InputMaybe<Array<ChatWhereInput>>;
  OR?: InputMaybe<Array<ChatWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  messages?: InputMaybe<ChatMessageListRelationFilter>;
  name?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<ChatUserListRelationFilter>;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type CommentAvgAggregate = {
  __typename?: 'CommentAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
  postId?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type CommentAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentCountAggregate = {
  __typename?: 'CommentCountAggregate';
  _all: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type CommentCountOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentCreateInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  post: PostCreateNestedOneWithoutCommentsInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateManyInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type CommentCreateManyPostInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type CommentCreateManyPostInputEnvelope = {
  data: Array<CommentCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateManyUserInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CommentCreateManyUserInputEnvelope = {
  data: Array<CommentCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CommentCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutPostInput>>;
  createMany?: InputMaybe<CommentCreateManyPostInputEnvelope>;
};

export type CommentCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
};

export type CommentCreateOrConnectWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateOrConnectWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutPostInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutCommentsInput;
};

export type CommentCreateWithoutUserInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  post: PostCreateNestedOneWithoutCommentsInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  _avg?: Maybe<CommentAvgAggregate>;
  _count?: Maybe<CommentCountAggregate>;
  _max?: Maybe<CommentMaxAggregate>;
  _min?: Maybe<CommentMinAggregate>;
  _sum?: Maybe<CommentSumAggregate>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['Int']['output'];
};

export type CommentListRelationFilter = {
  every?: InputMaybe<CommentWhereInput>;
  none?: InputMaybe<CommentWhereInput>;
  some?: InputMaybe<CommentWhereInput>;
};

export type CommentMaxAggregate = {
  __typename?: 'CommentMaxAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type CommentMaxOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentMinAggregate = {
  __typename?: 'CommentMinAggregate';
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type CommentMinOrderByAggregateInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithAggregationInput = {
  _avg?: InputMaybe<CommentAvgOrderByAggregateInput>;
  _count?: InputMaybe<CommentCountOrderByAggregateInput>;
  _max?: InputMaybe<CommentMaxOrderByAggregateInput>;
  _min?: InputMaybe<CommentMinOrderByAggregateInput>;
  _sum?: InputMaybe<CommentSumOrderByAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  PostId = 'postId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type CommentScalarWhereInput = {
  AND?: InputMaybe<Array<CommentScalarWhereInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type CommentScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CommentScalarWhereWithAggregatesInput>>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  postId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type CommentSumAggregate = {
  __typename?: 'CommentSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type CommentSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type CommentUpdateInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutCommentsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
};

export type CommentUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutPostInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithWhereWithoutUserInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutPostInput>>;
  createMany?: InputMaybe<CommentCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutPostInput>>;
};

export type CommentUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<CommentCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<CommentCreateWithoutUserInput>>;
  createMany?: InputMaybe<CommentCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<CommentScalarWhereInput>>;
  disconnect?: InputMaybe<Array<CommentWhereUniqueInput>>;
  set?: InputMaybe<Array<CommentWhereUniqueInput>>;
  update?: InputMaybe<Array<CommentUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<CommentUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<CommentUpsertWithWhereUniqueWithoutUserInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutPostInput = {
  data: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithWhereUniqueWithoutUserInput = {
  data: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutPostInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutCommentsNestedInput>;
};

export type CommentUpdateWithoutUserInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutCommentsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutPostInput = {
  create: CommentCreateWithoutPostInput;
  update: CommentUpdateWithoutPostInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpsertWithWhereUniqueWithoutUserInput = {
  create: CommentCreateWithoutUserInput;
  update: CommentUpdateWithoutUserInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type CommentWhereUniqueInput = {
  AND?: InputMaybe<Array<CommentWhereInput>>;
  NOT?: InputMaybe<Array<CommentWhereInput>>;
  OR?: InputMaybe<Array<CommentWhereInput>>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type CustomFileUrl = {
  __typename?: 'CustomFileUrl';
  lg?: Maybe<Scalars['String']['output']>;
  md?: Maybe<Scalars['String']['output']>;
  raw?: Maybe<Scalars['String']['output']>;
  sm?: Maybe<Scalars['String']['output']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type EnumFileStorageTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<FileStorageType>;
};

export type EnumFileStorageTypeFilter = {
  equals?: InputMaybe<FileStorageType>;
  in?: InputMaybe<Array<FileStorageType>>;
  not?: InputMaybe<NestedEnumFileStorageTypeFilter>;
  notIn?: InputMaybe<Array<FileStorageType>>;
};

export type EnumFileStorageTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumFileStorageTypeFilter>;
  _min?: InputMaybe<NestedEnumFileStorageTypeFilter>;
  equals?: InputMaybe<FileStorageType>;
  in?: InputMaybe<Array<FileStorageType>>;
  not?: InputMaybe<NestedEnumFileStorageTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<FileStorageType>>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type EnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type File = {
  __typename?: 'File';
  _count?: Maybe<FileCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  files: Array<UserFile>;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  posts: Array<PostFile>;
  type: FileStorageType;
  updatedAt: Scalars['DateTimeISO']['output'];
  url: CustomFileUrl;
};


export type FileFilesArgs = {
  cursor?: InputMaybe<UserFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFileWhereInput>;
};


export type FilePostsArgs = {
  cursor?: InputMaybe<PostFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFileWhereInput>;
};

export type FileAvgAggregate = {
  __typename?: 'FileAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type FileAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type FileCount = {
  __typename?: 'FileCount';
  files: Scalars['Int']['output'];
  posts: Scalars['Int']['output'];
};


export type FileCountFilesArgs = {
  where?: InputMaybe<UserFileWhereInput>;
};


export type FileCountPostsArgs = {
  where?: InputMaybe<PostFileWhereInput>;
};

export type FileCountAggregate = {
  __typename?: 'FileCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type FileCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FileCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<UserFileCreateNestedManyWithoutFileInput>;
  location: Scalars['String']['input'];
  posts?: InputMaybe<PostFileCreateNestedManyWithoutFileInput>;
  type?: InputMaybe<FileStorageType>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type FileCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  location: Scalars['String']['input'];
  type?: InputMaybe<FileStorageType>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type FileCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<FileCreateWithoutFilesInput>;
};

export type FileCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<FileCreateWithoutPostsInput>;
};

export type FileCreateOrConnectWithoutFilesInput = {
  create: FileCreateWithoutFilesInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutPostsInput = {
  create: FileCreateWithoutPostsInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutFilesInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  location: Scalars['String']['input'];
  posts?: InputMaybe<PostFileCreateNestedManyWithoutFileInput>;
  type?: InputMaybe<FileStorageType>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type FileCreateWithoutPostsInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<UserFileCreateNestedManyWithoutFileInput>;
  location: Scalars['String']['input'];
  type?: InputMaybe<FileStorageType>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type FileGroupBy = {
  __typename?: 'FileGroupBy';
  _avg?: Maybe<FileAvgAggregate>;
  _count?: Maybe<FileCountAggregate>;
  _max?: Maybe<FileMaxAggregate>;
  _min?: Maybe<FileMinAggregate>;
  _sum?: Maybe<FileSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  type: FileStorageType;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type FileMaxAggregate = {
  __typename?: 'FileMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FileStorageType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type FileMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FileMinAggregate = {
  __typename?: 'FileMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  type?: Maybe<FileStorageType>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type FileMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FileOrderByWithAggregationInput = {
  _avg?: InputMaybe<FileAvgOrderByAggregateInput>;
  _count?: InputMaybe<FileCountOrderByAggregateInput>;
  _max?: InputMaybe<FileMaxOrderByAggregateInput>;
  _min?: InputMaybe<FileMinOrderByAggregateInput>;
  _sum?: InputMaybe<FileSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FileOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  files?: InputMaybe<UserFileOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  posts?: InputMaybe<PostFileOrderByRelationAggregateInput>;
  type?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type FileRelationFilter = {
  is?: InputMaybe<FileWhereInput>;
  isNot?: InputMaybe<FileWhereInput>;
};

export enum FileScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Location = 'location',
  Type = 'type',
  UpdatedAt = 'updatedAt'
}

export type FileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<FileScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  location?: InputMaybe<StringWithAggregatesFilter>;
  type?: InputMaybe<EnumFileStorageTypeWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export enum FileStorageType {
  S3 = 'S3'
}

export type FileSumAggregate = {
  __typename?: 'FileSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type FileSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type FileUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<UserFileUpdateManyWithoutFileNestedInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostFileUpdateManyWithoutFileNestedInput>;
  type?: InputMaybe<EnumFileStorageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFileStorageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpdateOneRequiredWithoutFilesNestedInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<FileCreateWithoutFilesInput>;
  update?: InputMaybe<FileUpdateToOneWithWhereWithoutFilesInput>;
  upsert?: InputMaybe<FileUpsertWithoutFilesInput>;
};

export type FileUpdateOneRequiredWithoutPostsNestedInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<FileCreateWithoutPostsInput>;
  update?: InputMaybe<FileUpdateToOneWithWhereWithoutPostsInput>;
  upsert?: InputMaybe<FileUpsertWithoutPostsInput>;
};

export type FileUpdateToOneWithWhereWithoutFilesInput = {
  data: FileUpdateWithoutFilesInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileUpdateToOneWithWhereWithoutPostsInput = {
  data: FileUpdateWithoutPostsInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileUpdateWithoutFilesInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostFileUpdateManyWithoutFileNestedInput>;
  type?: InputMaybe<EnumFileStorageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpdateWithoutPostsInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<UserFileUpdateManyWithoutFileNestedInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFileStorageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpsertWithoutFilesInput = {
  create: FileCreateWithoutFilesInput;
  update: FileUpdateWithoutFilesInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileUpsertWithoutPostsInput = {
  create: FileCreateWithoutPostsInput;
  update: FileUpdateWithoutPostsInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<UserFileListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  location?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostFileListRelationFilter>;
  type?: InputMaybe<EnumFileStorageTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type FileWhereUniqueInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<UserFileListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostFileListRelationFilter>;
  type?: InputMaybe<EnumFileStorageTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAccount: AffectedRowsOutput;
  createManyChat: AffectedRowsOutput;
  createManyChatMessage: AffectedRowsOutput;
  createManyChatUser: AffectedRowsOutput;
  createManyComment: AffectedRowsOutput;
  createManyFile: AffectedRowsOutput;
  createManyPost: AffectedRowsOutput;
  createManyPostFile: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManySpatial_ref_sys: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserAddress: AffectedRowsOutput;
  createManyUserFile: AffectedRowsOutput;
  createManyVerificationToken: AffectedRowsOutput;
  createOneAccount: Account;
  createOneChat: Chat;
  createOneChatMessage: ChatMessage;
  createOneChatUser: ChatUser;
  createOneComment: Comment;
  createOneFile: File;
  createOnePost: Post;
  createOnePostFile: PostFile;
  createOneSession: Session;
  createOneSpatial_ref_sys: Spatial_Ref_Sys;
  createOneUser: User;
  createOneUserAddress: UserAddress;
  createOneUserFile: UserFile;
  createOneVerificationToken: VerificationToken;
  deleteManyAccount: AffectedRowsOutput;
  deleteManyAddress: AffectedRowsOutput;
  deleteManyChat: AffectedRowsOutput;
  deleteManyChatMessage: AffectedRowsOutput;
  deleteManyChatUser: AffectedRowsOutput;
  deleteManyComment: AffectedRowsOutput;
  deleteManyFile: AffectedRowsOutput;
  deleteManyPost: AffectedRowsOutput;
  deleteManyPostFile: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManySpatial_ref_sys: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserAddress: AffectedRowsOutput;
  deleteManyUserFile: AffectedRowsOutput;
  deleteManyVerificationToken: AffectedRowsOutput;
  deleteOneAccount?: Maybe<Account>;
  deleteOneAddress?: Maybe<Address>;
  deleteOneChat?: Maybe<Chat>;
  deleteOneChatMessage?: Maybe<ChatMessage>;
  deleteOneChatUser?: Maybe<ChatUser>;
  deleteOneComment?: Maybe<Comment>;
  deleteOneFile?: Maybe<File>;
  deleteOnePost?: Maybe<Post>;
  deleteOnePostFile?: Maybe<PostFile>;
  deleteOneSession?: Maybe<Session>;
  deleteOneSpatial_ref_sys?: Maybe<Spatial_Ref_Sys>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserAddress?: Maybe<UserAddress>;
  deleteOneUserFile?: Maybe<UserFile>;
  deleteOneVerificationToken?: Maybe<VerificationToken>;
  updateManyAccount: AffectedRowsOutput;
  updateManyAddress: AffectedRowsOutput;
  updateManyChat: AffectedRowsOutput;
  updateManyChatMessage: AffectedRowsOutput;
  updateManyChatUser: AffectedRowsOutput;
  updateManyComment: AffectedRowsOutput;
  updateManyFile: AffectedRowsOutput;
  updateManyPost: AffectedRowsOutput;
  updateManyPostFile: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManySpatial_ref_sys: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserAddress: AffectedRowsOutput;
  updateManyUserFile: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  updateOneAccount?: Maybe<Account>;
  updateOneAddress?: Maybe<Address>;
  updateOneChat?: Maybe<Chat>;
  updateOneChatMessage?: Maybe<ChatMessage>;
  updateOneChatUser?: Maybe<ChatUser>;
  updateOneComment?: Maybe<Comment>;
  updateOneFile?: Maybe<File>;
  updateOnePost?: Maybe<Post>;
  updateOnePostFile?: Maybe<PostFile>;
  updateOneSession?: Maybe<Session>;
  updateOneSpatial_ref_sys?: Maybe<Spatial_Ref_Sys>;
  updateOneUser?: Maybe<User>;
  updateOneUserAddress?: Maybe<UserAddress>;
  updateOneUserFile?: Maybe<UserFile>;
  updateOneVerificationToken?: Maybe<VerificationToken>;
  upsertOneAccount: Account;
  upsertOneChat: Chat;
  upsertOneChatMessage: ChatMessage;
  upsertOneChatUser: ChatUser;
  upsertOneComment: Comment;
  upsertOneFile: File;
  upsertOnePost: Post;
  upsertOnePostFile: PostFile;
  upsertOneSession: Session;
  upsertOneSpatial_ref_sys: Spatial_Ref_Sys;
  upsertOneUser: User;
  upsertOneUserAddress: UserAddress;
  upsertOneUserFile: UserFile;
  upsertOneVerificationToken: VerificationToken;
};


export type MutationCreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyChatArgs = {
  data: Array<ChatCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyChatMessageArgs = {
  data: Array<ChatMessageCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyChatUserArgs = {
  data: Array<ChatUserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyCommentArgs = {
  data: Array<CommentCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyFileArgs = {
  data: Array<FileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPostArgs = {
  data: Array<PostCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyPostFileArgs = {
  data: Array<PostFileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySpatial_Ref_SysArgs = {
  data: Array<Spatial_Ref_SysCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserAddressArgs = {
  data: Array<UserAddressCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserFileArgs = {
  data: Array<UserFileCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyVerificationTokenArgs = {
  data: Array<VerificationTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneAccountArgs = {
  data: AccountCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneChatArgs = {
  data: ChatCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneChatMessageArgs = {
  data: ChatMessageCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneChatUserArgs = {
  data: ChatUserCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneCommentArgs = {
  data: CommentCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneFileArgs = {
  data: FileCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOnePostArgs = {
  data: PostCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOnePostFileArgs = {
  data: PostFileCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneSessionArgs = {
  data: SessionCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneSpatial_Ref_SysArgs = {
  data: Spatial_Ref_SysCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserAddressArgs = {
  data: UserAddressCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneUserFileArgs = {
  data: UserFileCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationCreateOneVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
};


export type MutationDeleteManyAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationDeleteManyAddressArgs = {
  where?: InputMaybe<AddressWhereInput>;
};


export type MutationDeleteManyChatArgs = {
  where?: InputMaybe<ChatWhereInput>;
};


export type MutationDeleteManyChatMessageArgs = {
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type MutationDeleteManyChatUserArgs = {
  where?: InputMaybe<ChatUserWhereInput>;
};


export type MutationDeleteManyCommentArgs = {
  where?: InputMaybe<CommentWhereInput>;
};


export type MutationDeleteManyFileArgs = {
  where?: InputMaybe<FileWhereInput>;
};


export type MutationDeleteManyPostArgs = {
  where?: InputMaybe<PostWhereInput>;
};


export type MutationDeleteManyPostFileArgs = {
  where?: InputMaybe<PostFileWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationDeleteManySpatial_Ref_SysArgs = {
  where?: InputMaybe<Spatial_Ref_SysWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserAddressArgs = {
  where?: InputMaybe<UserAddressWhereInput>;
};


export type MutationDeleteManyUserFileArgs = {
  where?: InputMaybe<UserFileWhereInput>;
};


export type MutationDeleteManyVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationDeleteOneAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type MutationDeleteOneAddressArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AddressWhereUniqueInput;
};


export type MutationDeleteOneChatArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ChatWhereUniqueInput;
};


export type MutationDeleteOneChatMessageArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ChatMessageWhereUniqueInput;
};


export type MutationDeleteOneChatUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ChatUserWhereUniqueInput;
};


export type MutationDeleteOneCommentArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CommentWhereUniqueInput;
};


export type MutationDeleteOneFileArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: FileWhereUniqueInput;
};


export type MutationDeleteOnePostArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: PostWhereUniqueInput;
};


export type MutationDeleteOnePostFileArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: PostFileWhereUniqueInput;
};


export type MutationDeleteOneSessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type MutationDeleteOneSpatial_Ref_SysArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: Spatial_Ref_SysWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserAddressArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserAddressWhereUniqueInput;
};


export type MutationDeleteOneUserFileArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserFileWhereUniqueInput;
};


export type MutationDeleteOneVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationUpdateManyAddressArgs = {
  data: AddressUpdateManyMutationInput;
  where?: InputMaybe<AddressWhereInput>;
};


export type MutationUpdateManyChatArgs = {
  data: ChatUpdateManyMutationInput;
  where?: InputMaybe<ChatWhereInput>;
};


export type MutationUpdateManyChatMessageArgs = {
  data: ChatMessageUpdateManyMutationInput;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type MutationUpdateManyChatUserArgs = {
  data: ChatUserUpdateManyMutationInput;
  where?: InputMaybe<ChatUserWhereInput>;
};


export type MutationUpdateManyCommentArgs = {
  data: CommentUpdateManyMutationInput;
  where?: InputMaybe<CommentWhereInput>;
};


export type MutationUpdateManyFileArgs = {
  data: FileUpdateManyMutationInput;
  where?: InputMaybe<FileWhereInput>;
};


export type MutationUpdateManyPostArgs = {
  data: PostUpdateManyMutationInput;
  where?: InputMaybe<PostWhereInput>;
};


export type MutationUpdateManyPostFileArgs = {
  data: PostFileUpdateManyMutationInput;
  where?: InputMaybe<PostFileWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationUpdateManySpatial_Ref_SysArgs = {
  data: Spatial_Ref_SysUpdateManyMutationInput;
  where?: InputMaybe<Spatial_Ref_SysWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserAddressArgs = {
  data: UserAddressUpdateManyMutationInput;
  where?: InputMaybe<UserAddressWhereInput>;
};


export type MutationUpdateManyUserFileArgs = {
  data: UserFileUpdateManyMutationInput;
  where?: InputMaybe<UserFileWhereInput>;
};


export type MutationUpdateManyVerificationTokenArgs = {
  data: VerificationTokenUpdateManyMutationInput;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationUpdateOneAccountArgs = {
  data: AccountUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateOneAddressArgs = {
  data: AddressUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AddressWhereUniqueInput;
};


export type MutationUpdateOneChatArgs = {
  data: ChatUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ChatWhereUniqueInput;
};


export type MutationUpdateOneChatMessageArgs = {
  data: ChatMessageUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ChatMessageWhereUniqueInput;
};


export type MutationUpdateOneChatUserArgs = {
  data: ChatUserUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ChatUserWhereUniqueInput;
};


export type MutationUpdateOneCommentArgs = {
  data: CommentUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CommentWhereUniqueInput;
};


export type MutationUpdateOneFileArgs = {
  data: FileUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: FileWhereUniqueInput;
};


export type MutationUpdateOnePostArgs = {
  data: PostUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: PostWhereUniqueInput;
};


export type MutationUpdateOnePostFileArgs = {
  data: PostFileUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: PostFileWhereUniqueInput;
};


export type MutationUpdateOneSessionArgs = {
  data: SessionUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateOneSpatial_Ref_SysArgs = {
  data: Spatial_Ref_SysUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: Spatial_Ref_SysWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserAddressArgs = {
  data: UserAddressUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserAddressWhereUniqueInput;
};


export type MutationUpdateOneUserFileArgs = {
  data: UserFileUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserFileWhereUniqueInput;
};


export type MutationUpdateOneVerificationTokenArgs = {
  data: VerificationTokenUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpsertOneAccountArgs = {
  create: AccountCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertOneChatArgs = {
  create: ChatCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: ChatUpdateInput;
  where: ChatWhereUniqueInput;
};


export type MutationUpsertOneChatMessageArgs = {
  create: ChatMessageCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: ChatMessageUpdateInput;
  where: ChatMessageWhereUniqueInput;
};


export type MutationUpsertOneChatUserArgs = {
  create: ChatUserCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: ChatUserUpdateInput;
  where: ChatUserWhereUniqueInput;
};


export type MutationUpsertOneCommentArgs = {
  create: CommentCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: CommentUpdateInput;
  where: CommentWhereUniqueInput;
};


export type MutationUpsertOneFileArgs = {
  create: FileCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: FileUpdateInput;
  where: FileWhereUniqueInput;
};


export type MutationUpsertOnePostArgs = {
  create: PostCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: PostUpdateInput;
  where: PostWhereUniqueInput;
};


export type MutationUpsertOnePostFileArgs = {
  create: PostFileCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: PostFileUpdateInput;
  where: PostFileWhereUniqueInput;
};


export type MutationUpsertOneSessionArgs = {
  create: SessionCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertOneSpatial_Ref_SysArgs = {
  create: Spatial_Ref_SysCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: Spatial_Ref_SysUpdateInput;
  where: Spatial_Ref_SysWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserAddressArgs = {
  create: UserAddressCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserAddressUpdateInput;
  where: UserAddressWhereUniqueInput;
};


export type MutationUpsertOneUserFileArgs = {
  create: UserFileCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: UserFileUpdateInput;
  where: UserFileWhereUniqueInput;
};


export type MutationUpsertOneVerificationTokenArgs = {
  create: VerificationTokenCreateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  update: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  gte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  in?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
  lt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  lte?: InputMaybe<Scalars['DateTimeISO']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTimeISO']['input']>>;
};

export type NestedEnumFileStorageTypeFilter = {
  equals?: InputMaybe<FileStorageType>;
  in?: InputMaybe<Array<FileStorageType>>;
  not?: InputMaybe<NestedEnumFileStorageTypeFilter>;
  notIn?: InputMaybe<Array<FileStorageType>>;
};

export type NestedEnumFileStorageTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumFileStorageTypeFilter>;
  _min?: InputMaybe<NestedEnumFileStorageTypeFilter>;
  equals?: InputMaybe<FileStorageType>;
  in?: InputMaybe<Array<FileStorageType>>;
  not?: InputMaybe<NestedEnumFileStorageTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<FileStorageType>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Array<Role>>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Role>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Post = {
  __typename?: 'Post';
  _count?: Maybe<PostCount>;
  address: Address;
  addressId: Scalars['Int']['output'];
  comments: Array<Comment>;
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  files: Array<PostFile>;
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};


export type PostCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type PostFilesArgs = {
  cursor?: InputMaybe<PostFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFileWhereInput>;
};

export type PostAvgAggregate = {
  __typename?: 'PostAvgAggregate';
  addressId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type PostAvgOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostCount = {
  __typename?: 'PostCount';
  comments: Scalars['Int']['output'];
  files: Scalars['Int']['output'];
};


export type PostCountCommentsArgs = {
  where?: InputMaybe<CommentWhereInput>;
};


export type PostCountFilesArgs = {
  where?: InputMaybe<PostFileWhereInput>;
};

export type PostCountAggregate = {
  __typename?: 'PostCountAggregate';
  _all: Scalars['Int']['output'];
  addressId: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type PostCountOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostCreateInput = {
  address: AddressCreateNestedOneWithoutPostsInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<PostFileCreateNestedManyWithoutPostInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutPostsInput;
};

export type PostCreateManyAddressInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type PostCreateManyAddressInputEnvelope = {
  data: Array<PostCreateManyAddressInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCreateManyInput = {
  addressId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type PostCreateManyUserInput = {
  addressId: Scalars['Int']['input'];
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PostCreateManyUserInputEnvelope = {
  data: Array<PostCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PostCreateWithoutUserInput>>;
  createMany?: InputMaybe<PostCreateManyUserInputEnvelope>;
};

export type PostCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PostCreateWithoutCommentsInput>;
};

export type PostCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<PostCreateWithoutFilesInput>;
};

export type PostCreateOrConnectWithoutAddressInput = {
  create: PostCreateWithoutAddressInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutCommentsInput = {
  create: PostCreateWithoutCommentsInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutFilesInput = {
  create: PostCreateWithoutFilesInput;
  where: PostWhereUniqueInput;
};

export type PostCreateOrConnectWithoutUserInput = {
  create: PostCreateWithoutUserInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAddressInput = {
  comments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<PostFileCreateNestedManyWithoutPostInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutPostsInput;
};

export type PostCreateWithoutCommentsInput = {
  address: AddressCreateNestedOneWithoutPostsInput;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<PostFileCreateNestedManyWithoutPostInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutPostsInput;
};

export type PostCreateWithoutFilesInput = {
  address: AddressCreateNestedOneWithoutPostsInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutPostsInput;
};

export type PostCreateWithoutUserInput = {
  address: AddressCreateNestedOneWithoutPostsInput;
  comments?: InputMaybe<CommentCreateNestedManyWithoutPostInput>;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<PostFileCreateNestedManyWithoutPostInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PostFile = {
  __typename?: 'PostFile';
  createdAt: Scalars['DateTimeISO']['output'];
  file: File;
  fileId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  post: Post;
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type PostFileAvgAggregate = {
  __typename?: 'PostFileAvgAggregate';
  fileId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  postId?: Maybe<Scalars['Float']['output']>;
};

export type PostFileAvgOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type PostFileCountAggregate = {
  __typename?: 'PostFileCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  fileId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
};

export type PostFileCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostFileCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  file: FileCreateNestedOneWithoutPostsInput;
  post: PostCreateNestedOneWithoutFilesInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PostFileCreateManyFileInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PostFileCreateManyFileInputEnvelope = {
  data: Array<PostFileCreateManyFileInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostFileCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  fileId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PostFileCreateManyPostInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  fileId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PostFileCreateManyPostInputEnvelope = {
  data: Array<PostFileCreateManyPostInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PostFileCreateNestedManyWithoutFileInput = {
  connect?: InputMaybe<Array<PostFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostFileCreateOrConnectWithoutFileInput>>;
  create?: InputMaybe<Array<PostFileCreateWithoutFileInput>>;
  createMany?: InputMaybe<PostFileCreateManyFileInputEnvelope>;
};

export type PostFileCreateNestedManyWithoutPostInput = {
  connect?: InputMaybe<Array<PostFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostFileCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<PostFileCreateWithoutPostInput>>;
  createMany?: InputMaybe<PostFileCreateManyPostInputEnvelope>;
};

export type PostFileCreateOrConnectWithoutFileInput = {
  create: PostFileCreateWithoutFileInput;
  where: PostFileWhereUniqueInput;
};

export type PostFileCreateOrConnectWithoutPostInput = {
  create: PostFileCreateWithoutPostInput;
  where: PostFileWhereUniqueInput;
};

export type PostFileCreateWithoutFileInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  post: PostCreateNestedOneWithoutFilesInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PostFileCreateWithoutPostInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  file: FileCreateNestedOneWithoutPostsInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PostFileGroupBy = {
  __typename?: 'PostFileGroupBy';
  _avg?: Maybe<PostFileAvgAggregate>;
  _count?: Maybe<PostFileCountAggregate>;
  _max?: Maybe<PostFileMaxAggregate>;
  _min?: Maybe<PostFileMinAggregate>;
  _sum?: Maybe<PostFileSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  fileId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  postId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type PostFileListRelationFilter = {
  every?: InputMaybe<PostFileWhereInput>;
  none?: InputMaybe<PostFileWhereInput>;
  some?: InputMaybe<PostFileWhereInput>;
};

export type PostFileMaxAggregate = {
  __typename?: 'PostFileMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  fileId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PostFileMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostFileMinAggregate = {
  __typename?: 'PostFileMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  fileId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PostFileMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostFileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostFileOrderByWithAggregationInput = {
  _avg?: InputMaybe<PostFileAvgOrderByAggregateInput>;
  _count?: InputMaybe<PostFileCountOrderByAggregateInput>;
  _max?: InputMaybe<PostFileMaxOrderByAggregateInput>;
  _min?: InputMaybe<PostFileMinOrderByAggregateInput>;
  _sum?: InputMaybe<PostFileSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostFileOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  file?: InputMaybe<FileOrderByWithRelationInput>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  post?: InputMaybe<PostOrderByWithRelationInput>;
  postId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export enum PostFileScalarFieldEnum {
  CreatedAt = 'createdAt',
  FileId = 'fileId',
  Id = 'id',
  PostId = 'postId',
  UpdatedAt = 'updatedAt'
}

export type PostFileScalarWhereInput = {
  AND?: InputMaybe<Array<PostFileScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostFileScalarWhereInput>>;
  OR?: InputMaybe<Array<PostFileScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostFileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PostFileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PostFileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PostFileScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  fileId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  postId?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PostFileSumAggregate = {
  __typename?: 'PostFileSumAggregate';
  fileId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  postId?: Maybe<Scalars['Int']['output']>;
};

export type PostFileSumOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  postId?: InputMaybe<SortOrder>;
};

export type PostFileUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  file?: InputMaybe<FileUpdateOneRequiredWithoutPostsNestedInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutFilesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostFileUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostFileUpdateManyWithWhereWithoutFileInput = {
  data: PostFileUpdateManyMutationInput;
  where: PostFileScalarWhereInput;
};

export type PostFileUpdateManyWithWhereWithoutPostInput = {
  data: PostFileUpdateManyMutationInput;
  where: PostFileScalarWhereInput;
};

export type PostFileUpdateManyWithoutFileNestedInput = {
  connect?: InputMaybe<Array<PostFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostFileCreateOrConnectWithoutFileInput>>;
  create?: InputMaybe<Array<PostFileCreateWithoutFileInput>>;
  createMany?: InputMaybe<PostFileCreateManyFileInputEnvelope>;
  delete?: InputMaybe<Array<PostFileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostFileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostFileWhereUniqueInput>>;
  set?: InputMaybe<Array<PostFileWhereUniqueInput>>;
  update?: InputMaybe<Array<PostFileUpdateWithWhereUniqueWithoutFileInput>>;
  updateMany?: InputMaybe<Array<PostFileUpdateManyWithWhereWithoutFileInput>>;
  upsert?: InputMaybe<Array<PostFileUpsertWithWhereUniqueWithoutFileInput>>;
};

export type PostFileUpdateManyWithoutPostNestedInput = {
  connect?: InputMaybe<Array<PostFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostFileCreateOrConnectWithoutPostInput>>;
  create?: InputMaybe<Array<PostFileCreateWithoutPostInput>>;
  createMany?: InputMaybe<PostFileCreateManyPostInputEnvelope>;
  delete?: InputMaybe<Array<PostFileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostFileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostFileWhereUniqueInput>>;
  set?: InputMaybe<Array<PostFileWhereUniqueInput>>;
  update?: InputMaybe<Array<PostFileUpdateWithWhereUniqueWithoutPostInput>>;
  updateMany?: InputMaybe<Array<PostFileUpdateManyWithWhereWithoutPostInput>>;
  upsert?: InputMaybe<Array<PostFileUpsertWithWhereUniqueWithoutPostInput>>;
};

export type PostFileUpdateWithWhereUniqueWithoutFileInput = {
  data: PostFileUpdateWithoutFileInput;
  where: PostFileWhereUniqueInput;
};

export type PostFileUpdateWithWhereUniqueWithoutPostInput = {
  data: PostFileUpdateWithoutPostInput;
  where: PostFileWhereUniqueInput;
};

export type PostFileUpdateWithoutFileInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  post?: InputMaybe<PostUpdateOneRequiredWithoutFilesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostFileUpdateWithoutPostInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  file?: InputMaybe<FileUpdateOneRequiredWithoutPostsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostFileUpsertWithWhereUniqueWithoutFileInput = {
  create: PostFileCreateWithoutFileInput;
  update: PostFileUpdateWithoutFileInput;
  where: PostFileWhereUniqueInput;
};

export type PostFileUpsertWithWhereUniqueWithoutPostInput = {
  create: PostFileCreateWithoutPostInput;
  update: PostFileUpdateWithoutPostInput;
  where: PostFileWhereUniqueInput;
};

export type PostFileWhereInput = {
  AND?: InputMaybe<Array<PostFileWhereInput>>;
  NOT?: InputMaybe<Array<PostFileWhereInput>>;
  OR?: InputMaybe<Array<PostFileWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  file?: InputMaybe<FileRelationFilter>;
  fileId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostFileWhereUniqueInput = {
  AND?: InputMaybe<Array<PostFileWhereInput>>;
  NOT?: InputMaybe<Array<PostFileWhereInput>>;
  OR?: InputMaybe<Array<PostFileWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  file?: InputMaybe<FileRelationFilter>;
  fileId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  post?: InputMaybe<PostRelationFilter>;
  postId?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostGroupBy = {
  __typename?: 'PostGroupBy';
  _avg?: Maybe<PostAvgAggregate>;
  _count?: Maybe<PostCountAggregate>;
  _max?: Maybe<PostMaxAggregate>;
  _min?: Maybe<PostMinAggregate>;
  _sum?: Maybe<PostSumAggregate>;
  addressId: Scalars['Int']['output'];
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['Int']['output'];
};

export type PostListRelationFilter = {
  every?: InputMaybe<PostWhereInput>;
  none?: InputMaybe<PostWhereInput>;
  some?: InputMaybe<PostWhereInput>;
};

export type PostMaxAggregate = {
  __typename?: 'PostMaxAggregate';
  addressId?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type PostMaxOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  addressId?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type PostMinOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type PostOrderByWithAggregationInput = {
  _avg?: InputMaybe<PostAvgOrderByAggregateInput>;
  _count?: InputMaybe<PostCountOrderByAggregateInput>;
  _max?: InputMaybe<PostMaxOrderByAggregateInput>;
  _min?: InputMaybe<PostMinOrderByAggregateInput>;
  _sum?: InputMaybe<PostSumOrderByAggregateInput>;
  addressId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostOrderByWithRelationInput = {
  address?: InputMaybe<AddressOrderByWithRelationInput>;
  addressId?: InputMaybe<SortOrder>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  files?: InputMaybe<PostFileOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type PostRelationFilter = {
  is?: InputMaybe<PostWhereInput>;
  isNot?: InputMaybe<PostWhereInput>;
};

export enum PostScalarFieldEnum {
  AddressId = 'addressId',
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type PostScalarWhereInput = {
  AND?: InputMaybe<Array<PostScalarWhereInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereInput>>;
  OR?: InputMaybe<Array<PostScalarWhereInput>>;
  addressId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PostScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<PostScalarWhereWithAggregatesInput>>;
  addressId?: InputMaybe<IntWithAggregatesFilter>;
  content?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  addressId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type PostSumOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type PostUpdateInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutPostsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<PostFileUpdateManyWithoutPostNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPostsNestedInput>;
};

export type PostUpdateManyMutationInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateManyWithWhereWithoutAddressInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithWhereWithoutUserInput = {
  data: PostUpdateManyMutationInput;
  where: PostScalarWhereInput;
};

export type PostUpdateManyWithoutAddressNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutAddressInput>>;
  create?: InputMaybe<Array<PostCreateWithoutAddressInput>>;
  createMany?: InputMaybe<PostCreateManyAddressInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutAddressInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutAddressInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutAddressInput>>;
};

export type PostUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<PostWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<PostCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<PostCreateWithoutUserInput>>;
  createMany?: InputMaybe<PostCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<PostWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<PostScalarWhereInput>>;
  disconnect?: InputMaybe<Array<PostWhereUniqueInput>>;
  set?: InputMaybe<Array<PostWhereUniqueInput>>;
  update?: InputMaybe<Array<PostUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<PostUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<PostUpsertWithWhereUniqueWithoutUserInput>>;
};

export type PostUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<PostCreateWithoutCommentsInput>;
  update?: InputMaybe<PostUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<PostUpsertWithoutCommentsInput>;
};

export type PostUpdateOneRequiredWithoutFilesNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<PostCreateWithoutFilesInput>;
  update?: InputMaybe<PostUpdateToOneWithWhereWithoutFilesInput>;
  upsert?: InputMaybe<PostUpsertWithoutFilesInput>;
};

export type PostUpdateToOneWithWhereWithoutCommentsInput = {
  data: PostUpdateWithoutCommentsInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostUpdateToOneWithWhereWithoutFilesInput = {
  data: PostUpdateWithoutFilesInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostUpdateWithWhereUniqueWithoutAddressInput = {
  data: PostUpdateWithoutAddressInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithWhereUniqueWithoutUserInput = {
  data: PostUpdateWithoutUserInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAddressInput = {
  comments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<PostFileUpdateManyWithoutPostNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPostsNestedInput>;
};

export type PostUpdateWithoutCommentsInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutPostsNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<PostFileUpdateManyWithoutPostNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPostsNestedInput>;
};

export type PostUpdateWithoutFilesInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutPostsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutPostsNestedInput>;
};

export type PostUpdateWithoutUserInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutPostsNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutPostNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<PostFileUpdateManyWithoutPostNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAddressInput = {
  create: PostCreateWithoutAddressInput;
  update: PostUpdateWithoutAddressInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithWhereUniqueWithoutUserInput = {
  create: PostCreateWithoutUserInput;
  update: PostUpdateWithoutUserInput;
  where: PostWhereUniqueInput;
};

export type PostUpsertWithoutCommentsInput = {
  create: PostCreateWithoutCommentsInput;
  update: PostUpdateWithoutCommentsInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostUpsertWithoutFilesInput = {
  create: PostCreateWithoutFilesInput;
  update: PostUpdateWithoutFilesInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostWhereInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  address?: InputMaybe<AddressRelationFilter>;
  addressId?: InputMaybe<IntFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<PostFileListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type PostWhereUniqueInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  address?: InputMaybe<AddressRelationFilter>;
  addressId?: InputMaybe<IntFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<PostFileListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  address?: Maybe<Address>;
  addresses: Array<Address>;
  aggregateAccount: AggregateAccount;
  aggregateAddress: AggregateAddress;
  aggregateChat: AggregateChat;
  aggregateChatMessage: AggregateChatMessage;
  aggregateChatUser: AggregateChatUser;
  aggregateComment: AggregateComment;
  aggregateFile: AggregateFile;
  aggregatePost: AggregatePost;
  aggregatePostFile: AggregatePostFile;
  aggregateSession: AggregateSession;
  aggregateSpatial_ref_sys: AggregateSpatial_Ref_Sys;
  aggregateUser: AggregateUser;
  aggregateUserAddress: AggregateUserAddress;
  aggregateUserFile: AggregateUserFile;
  aggregateVerificationToken: AggregateVerificationToken;
  chat?: Maybe<Chat>;
  chatMessage?: Maybe<ChatMessage>;
  chatMessages: Array<ChatMessage>;
  chatUser?: Maybe<ChatUser>;
  chatUsers: Array<ChatUser>;
  chats: Array<Chat>;
  comment?: Maybe<Comment>;
  comments: Array<Comment>;
  file?: Maybe<File>;
  files: Array<File>;
  findFirstAccount?: Maybe<Account>;
  findFirstAccountOrThrow?: Maybe<Account>;
  findFirstAddress?: Maybe<Address>;
  findFirstAddressOrThrow?: Maybe<Address>;
  findFirstChat?: Maybe<Chat>;
  findFirstChatMessage?: Maybe<ChatMessage>;
  findFirstChatMessageOrThrow?: Maybe<ChatMessage>;
  findFirstChatOrThrow?: Maybe<Chat>;
  findFirstChatUser?: Maybe<ChatUser>;
  findFirstChatUserOrThrow?: Maybe<ChatUser>;
  findFirstComment?: Maybe<Comment>;
  findFirstCommentOrThrow?: Maybe<Comment>;
  findFirstFile?: Maybe<File>;
  findFirstFileOrThrow?: Maybe<File>;
  findFirstPost?: Maybe<Post>;
  findFirstPostFile?: Maybe<PostFile>;
  findFirstPostFileOrThrow?: Maybe<PostFile>;
  findFirstPostOrThrow?: Maybe<Post>;
  findFirstSession?: Maybe<Session>;
  findFirstSessionOrThrow?: Maybe<Session>;
  findFirstSpatial_ref_sys?: Maybe<Spatial_Ref_Sys>;
  findFirstSpatial_ref_sysOrThrow?: Maybe<Spatial_Ref_Sys>;
  findFirstUser?: Maybe<User>;
  findFirstUserAddress?: Maybe<UserAddress>;
  findFirstUserAddressOrThrow?: Maybe<UserAddress>;
  findFirstUserFile?: Maybe<UserFile>;
  findFirstUserFileOrThrow?: Maybe<UserFile>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstVerificationToken?: Maybe<VerificationToken>;
  findFirstVerificationTokenOrThrow?: Maybe<VerificationToken>;
  findManySpatial_ref_sys: Array<Spatial_Ref_Sys>;
  findUniqueSpatial_ref_sys?: Maybe<Spatial_Ref_Sys>;
  findUniqueSpatial_ref_sysOrThrow?: Maybe<Spatial_Ref_Sys>;
  getAccount?: Maybe<Account>;
  getAddress?: Maybe<Address>;
  getChat?: Maybe<Chat>;
  getChatMessage?: Maybe<ChatMessage>;
  getChatUser?: Maybe<ChatUser>;
  getComment?: Maybe<Comment>;
  getFile?: Maybe<File>;
  getPost?: Maybe<Post>;
  getPostFile?: Maybe<PostFile>;
  getSession?: Maybe<Session>;
  getUser?: Maybe<User>;
  getUserAddress?: Maybe<UserAddress>;
  getUserFile?: Maybe<UserFile>;
  getVerificationToken?: Maybe<VerificationToken>;
  groupByAccount: Array<AccountGroupBy>;
  groupByAddress: Array<AddressGroupBy>;
  groupByChat: Array<ChatGroupBy>;
  groupByChatMessage: Array<ChatMessageGroupBy>;
  groupByChatUser: Array<ChatUserGroupBy>;
  groupByComment: Array<CommentGroupBy>;
  groupByFile: Array<FileGroupBy>;
  groupByPost: Array<PostGroupBy>;
  groupByPostFile: Array<PostFileGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupBySpatial_ref_sys: Array<Spatial_Ref_SysGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserAddress: Array<UserAddressGroupBy>;
  groupByUserFile: Array<UserFileGroupBy>;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
  post?: Maybe<Post>;
  postFile?: Maybe<PostFile>;
  postFiles: Array<PostFile>;
  posts: Array<Post>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  user?: Maybe<User>;
  userAddress?: Maybe<UserAddress>;
  userAddresses: Array<UserAddress>;
  userFile?: Maybe<UserFile>;
  userFiles: Array<UserFile>;
  users: Array<User>;
  verificationToken?: Maybe<VerificationToken>;
  verificationTokens: Array<VerificationToken>;
};


export type QueryAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAddressArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AddressWhereUniqueInput;
};


export type QueryAddressesArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryAggregateAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateAddressArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryAggregateChatArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryAggregateChatMessageArgs = {
  cursor?: InputMaybe<ChatMessageWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type QueryAggregateChatUserArgs = {
  cursor?: InputMaybe<ChatUserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ChatUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatUserWhereInput>;
};


export type QueryAggregateCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryAggregateFileArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryAggregatePostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryAggregatePostFileArgs = {
  cursor?: InputMaybe<PostFileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<PostFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFileWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryAggregateSpatial_Ref_SysArgs = {
  cursor?: InputMaybe<Spatial_Ref_SysWhereUniqueInput>;
  orderBy?: InputMaybe<Array<Spatial_Ref_SysOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Spatial_Ref_SysWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserAddressArgs = {
  cursor?: InputMaybe<UserAddressWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserAddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAddressWhereInput>;
};


export type QueryAggregateUserFileArgs = {
  cursor?: InputMaybe<UserFileWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFileWhereInput>;
};


export type QueryAggregateVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryChatArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ChatWhereUniqueInput;
};


export type QueryChatMessageArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ChatMessageWhereUniqueInput;
};


export type QueryChatMessagesArgs = {
  cursor?: InputMaybe<ChatMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type QueryChatUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ChatUserWhereUniqueInput;
};


export type QueryChatUsersArgs = {
  cursor?: InputMaybe<ChatUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatUserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatUserWhereInput>;
};


export type QueryChatsArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryCommentArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CommentWhereUniqueInput;
};


export type QueryCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFileArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: FileWhereUniqueInput;
};


export type QueryFilesArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstAccountOrThrowArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstAddressArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryFindFirstAddressOrThrowArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<AddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryFindFirstChatArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryFindFirstChatMessageArgs = {
  cursor?: InputMaybe<ChatMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type QueryFindFirstChatMessageOrThrowArgs = {
  cursor?: InputMaybe<ChatMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type QueryFindFirstChatOrThrowArgs = {
  cursor?: InputMaybe<ChatWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryFindFirstChatUserArgs = {
  cursor?: InputMaybe<ChatUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatUserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatUserWhereInput>;
};


export type QueryFindFirstChatUserOrThrowArgs = {
  cursor?: InputMaybe<ChatUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatUserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatUserWhereInput>;
};


export type QueryFindFirstCommentArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstCommentOrThrowArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryFindFirstFileArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstFileOrThrowArgs = {
  cursor?: InputMaybe<FileWhereUniqueInput>;
  distinct?: InputMaybe<Array<FileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<FileOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryFindFirstPostArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindFirstPostFileArgs = {
  cursor?: InputMaybe<PostFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostFileOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFileWhereInput>;
};


export type QueryFindFirstPostFileOrThrowArgs = {
  cursor?: InputMaybe<PostFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostFileOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFileWhereInput>;
};


export type QueryFindFirstPostOrThrowArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstSessionOrThrowArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstSpatial_Ref_SysArgs = {
  cursor?: InputMaybe<Spatial_Ref_SysWhereUniqueInput>;
  distinct?: InputMaybe<Array<Spatial_Ref_SysScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Spatial_Ref_SysOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Spatial_Ref_SysWhereInput>;
};


export type QueryFindFirstSpatial_Ref_SysOrThrowArgs = {
  cursor?: InputMaybe<Spatial_Ref_SysWhereUniqueInput>;
  distinct?: InputMaybe<Array<Spatial_Ref_SysScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Spatial_Ref_SysOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Spatial_Ref_SysWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserAddressArgs = {
  cursor?: InputMaybe<UserAddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAddressOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAddressWhereInput>;
};


export type QueryFindFirstUserAddressOrThrowArgs = {
  cursor?: InputMaybe<UserAddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAddressOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAddressWhereInput>;
};


export type QueryFindFirstUserFileArgs = {
  cursor?: InputMaybe<UserFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserFileOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFileWhereInput>;
};


export type QueryFindFirstUserFileOrThrowArgs = {
  cursor?: InputMaybe<UserFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserFileOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFileWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindFirstVerificationTokenOrThrowArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindManySpatial_Ref_SysArgs = {
  cursor?: InputMaybe<Spatial_Ref_SysWhereUniqueInput>;
  distinct?: InputMaybe<Array<Spatial_Ref_SysScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<Spatial_Ref_SysOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Spatial_Ref_SysWhereInput>;
};


export type QueryFindUniqueSpatial_Ref_SysArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: Spatial_Ref_SysWhereUniqueInput;
};


export type QueryFindUniqueSpatial_Ref_SysOrThrowArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: Spatial_Ref_SysWhereUniqueInput;
};


export type QueryGetAccountArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AccountWhereUniqueInput;
};


export type QueryGetAddressArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AddressWhereUniqueInput;
};


export type QueryGetChatArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ChatWhereUniqueInput;
};


export type QueryGetChatMessageArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ChatMessageWhereUniqueInput;
};


export type QueryGetChatUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: ChatUserWhereUniqueInput;
};


export type QueryGetCommentArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: CommentWhereUniqueInput;
};


export type QueryGetFileArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: FileWhereUniqueInput;
};


export type QueryGetPostArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: PostWhereUniqueInput;
};


export type QueryGetPostFileArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: PostFileWhereUniqueInput;
};


export type QueryGetSessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type QueryGetUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type QueryGetUserAddressArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserAddressWhereUniqueInput;
};


export type QueryGetUserFileArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserFileWhereUniqueInput;
};


export type QueryGetVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type QueryGroupByAccountArgs = {
  by: Array<AccountScalarFieldEnum>;
  having?: InputMaybe<AccountScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryGroupByAddressArgs = {
  by: Array<AddressScalarFieldEnum>;
  having?: InputMaybe<AddressScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AddressOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
};


export type QueryGroupByChatArgs = {
  by: Array<ChatScalarFieldEnum>;
  having?: InputMaybe<ChatScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ChatOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatWhereInput>;
};


export type QueryGroupByChatMessageArgs = {
  by: Array<ChatMessageScalarFieldEnum>;
  having?: InputMaybe<ChatMessageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type QueryGroupByChatUserArgs = {
  by: Array<ChatUserScalarFieldEnum>;
  having?: InputMaybe<ChatUserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ChatUserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatUserWhereInput>;
};


export type QueryGroupByCommentArgs = {
  by: Array<CommentScalarFieldEnum>;
  having?: InputMaybe<CommentScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CommentOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type QueryGroupByFileArgs = {
  by: Array<FileScalarFieldEnum>;
  having?: InputMaybe<FileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<FileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<FileWhereInput>;
};


export type QueryGroupByPostArgs = {
  by: Array<PostScalarFieldEnum>;
  having?: InputMaybe<PostScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PostOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QueryGroupByPostFileArgs = {
  by: Array<PostFileScalarFieldEnum>;
  having?: InputMaybe<PostFileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<PostFileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFileWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having?: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryGroupBySpatial_Ref_SysArgs = {
  by: Array<Spatial_Ref_SysScalarFieldEnum>;
  having?: InputMaybe<Spatial_Ref_SysScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<Spatial_Ref_SysOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<Spatial_Ref_SysWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserAddressArgs = {
  by: Array<UserAddressScalarFieldEnum>;
  having?: InputMaybe<UserAddressScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserAddressOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAddressWhereInput>;
};


export type QueryGroupByUserFileArgs = {
  by: Array<UserFileScalarFieldEnum>;
  having?: InputMaybe<UserFileScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserFileOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFileWhereInput>;
};


export type QueryGroupByVerificationTokenArgs = {
  by: Array<VerificationTokenScalarFieldEnum>;
  having?: InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryPostArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: PostWhereUniqueInput;
};


export type QueryPostFileArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: PostFileWhereUniqueInput;
};


export type QueryPostFilesArgs = {
  cursor?: InputMaybe<PostFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostFileOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostFileWhereInput>;
};


export type QueryPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type QuerySessionArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryUserArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserWhereUniqueInput;
};


export type QueryUserAddressArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserAddressWhereUniqueInput;
};


export type QueryUserAddressesArgs = {
  cursor?: InputMaybe<UserAddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAddressOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAddressWhereInput>;
};


export type QueryUserFileArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: UserFileWhereUniqueInput;
};


export type QueryUserFilesArgs = {
  cursor?: InputMaybe<UserFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserFileOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFileWhereInput>;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVerificationTokenArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: VerificationTokenWhereUniqueInput;
};


export type QueryVerificationTokensArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum RelationLoadStrategy {
  Join = 'join',
  Query = 'query'
}

export enum Role {
  Read = 'READ',
  Write = 'WRITE'
}

export type Session = {
  __typename?: 'Session';
  createdAt: Scalars['DateTimeISO']['output'];
  expires: Scalars['DateTimeISO']['output'];
  sessionToken: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type SessionAvgAggregate = {
  __typename?: 'SessionAvgAggregate';
  userId?: Maybe<Scalars['Float']['output']>;
};

export type SessionAvgOrderByAggregateInput = {
  userId?: InputMaybe<SortOrder>;
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  sessionToken: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SessionCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires: Scalars['DateTimeISO']['input'];
  sessionToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires: Scalars['DateTimeISO']['input'];
  sessionToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type SessionCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires: Scalars['DateTimeISO']['input'];
  sessionToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  expires: Scalars['DateTimeISO']['input'];
  sessionToken: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _avg?: Maybe<SessionAvgAggregate>;
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  _sum?: Maybe<SessionSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  expires: Scalars['DateTimeISO']['output'];
  sessionToken: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['Int']['output'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type SessionMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type SessionMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithAggregationInput = {
  _avg?: InputMaybe<SessionAvgOrderByAggregateInput>;
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  _sum?: InputMaybe<SessionSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  expires?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  CreatedAt = 'createdAt',
  Expires = 'expires',
  SessionToken = 'sessionToken',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type SessionSumAggregate = {
  __typename?: 'SessionSumAggregate';
  userId?: Maybe<Scalars['Int']['output']>;
};

export type SessionSumOrderByAggregateInput = {
  userId?: InputMaybe<SortOrder>;
};

export type SessionUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsNestedInput>;
};

export type SessionUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type SessionWhereUniqueInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  expires?: InputMaybe<DateTimeFilter>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

/** This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info. */
export type Spatial_Ref_Sys = {
  __typename?: 'Spatial_ref_sys';
  auth_name?: Maybe<Scalars['String']['output']>;
  auth_srid?: Maybe<Scalars['Int']['output']>;
  proj4text?: Maybe<Scalars['String']['output']>;
  srid: Scalars['ID']['output'];
  srtext?: Maybe<Scalars['String']['output']>;
};

export type Spatial_Ref_SysAvgAggregate = {
  __typename?: 'Spatial_ref_sysAvgAggregate';
  auth_srid?: Maybe<Scalars['Float']['output']>;
  srid?: Maybe<Scalars['Float']['output']>;
};

export type Spatial_Ref_SysAvgOrderByAggregateInput = {
  auth_srid?: InputMaybe<SortOrder>;
  srid?: InputMaybe<SortOrder>;
};

export type Spatial_Ref_SysCountAggregate = {
  __typename?: 'Spatial_ref_sysCountAggregate';
  _all: Scalars['Int']['output'];
  auth_name: Scalars['Int']['output'];
  auth_srid: Scalars['Int']['output'];
  proj4text: Scalars['Int']['output'];
  srid: Scalars['Int']['output'];
  srtext: Scalars['Int']['output'];
};

export type Spatial_Ref_SysCountOrderByAggregateInput = {
  auth_name?: InputMaybe<SortOrder>;
  auth_srid?: InputMaybe<SortOrder>;
  proj4text?: InputMaybe<SortOrder>;
  srid?: InputMaybe<SortOrder>;
  srtext?: InputMaybe<SortOrder>;
};

export type Spatial_Ref_SysCreateInput = {
  auth_name?: InputMaybe<Scalars['String']['input']>;
  auth_srid?: InputMaybe<Scalars['Int']['input']>;
  proj4text?: InputMaybe<Scalars['String']['input']>;
  srid: Scalars['Int']['input'];
  srtext?: InputMaybe<Scalars['String']['input']>;
};

export type Spatial_Ref_SysCreateManyInput = {
  auth_name?: InputMaybe<Scalars['String']['input']>;
  auth_srid?: InputMaybe<Scalars['Int']['input']>;
  proj4text?: InputMaybe<Scalars['String']['input']>;
  srid: Scalars['Int']['input'];
  srtext?: InputMaybe<Scalars['String']['input']>;
};

export type Spatial_Ref_SysGroupBy = {
  __typename?: 'Spatial_ref_sysGroupBy';
  _avg?: Maybe<Spatial_Ref_SysAvgAggregate>;
  _count?: Maybe<Spatial_Ref_SysCountAggregate>;
  _max?: Maybe<Spatial_Ref_SysMaxAggregate>;
  _min?: Maybe<Spatial_Ref_SysMinAggregate>;
  _sum?: Maybe<Spatial_Ref_SysSumAggregate>;
  auth_name?: Maybe<Scalars['String']['output']>;
  auth_srid?: Maybe<Scalars['Int']['output']>;
  proj4text?: Maybe<Scalars['String']['output']>;
  srid: Scalars['Int']['output'];
  srtext?: Maybe<Scalars['String']['output']>;
};

export type Spatial_Ref_SysMaxAggregate = {
  __typename?: 'Spatial_ref_sysMaxAggregate';
  auth_name?: Maybe<Scalars['String']['output']>;
  auth_srid?: Maybe<Scalars['Int']['output']>;
  proj4text?: Maybe<Scalars['String']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
  srtext?: Maybe<Scalars['String']['output']>;
};

export type Spatial_Ref_SysMaxOrderByAggregateInput = {
  auth_name?: InputMaybe<SortOrder>;
  auth_srid?: InputMaybe<SortOrder>;
  proj4text?: InputMaybe<SortOrder>;
  srid?: InputMaybe<SortOrder>;
  srtext?: InputMaybe<SortOrder>;
};

export type Spatial_Ref_SysMinAggregate = {
  __typename?: 'Spatial_ref_sysMinAggregate';
  auth_name?: Maybe<Scalars['String']['output']>;
  auth_srid?: Maybe<Scalars['Int']['output']>;
  proj4text?: Maybe<Scalars['String']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
  srtext?: Maybe<Scalars['String']['output']>;
};

export type Spatial_Ref_SysMinOrderByAggregateInput = {
  auth_name?: InputMaybe<SortOrder>;
  auth_srid?: InputMaybe<SortOrder>;
  proj4text?: InputMaybe<SortOrder>;
  srid?: InputMaybe<SortOrder>;
  srtext?: InputMaybe<SortOrder>;
};

export type Spatial_Ref_SysOrderByWithAggregationInput = {
  _avg?: InputMaybe<Spatial_Ref_SysAvgOrderByAggregateInput>;
  _count?: InputMaybe<Spatial_Ref_SysCountOrderByAggregateInput>;
  _max?: InputMaybe<Spatial_Ref_SysMaxOrderByAggregateInput>;
  _min?: InputMaybe<Spatial_Ref_SysMinOrderByAggregateInput>;
  _sum?: InputMaybe<Spatial_Ref_SysSumOrderByAggregateInput>;
  auth_name?: InputMaybe<SortOrderInput>;
  auth_srid?: InputMaybe<SortOrderInput>;
  proj4text?: InputMaybe<SortOrderInput>;
  srid?: InputMaybe<SortOrder>;
  srtext?: InputMaybe<SortOrderInput>;
};

export type Spatial_Ref_SysOrderByWithRelationInput = {
  auth_name?: InputMaybe<SortOrderInput>;
  auth_srid?: InputMaybe<SortOrderInput>;
  proj4text?: InputMaybe<SortOrderInput>;
  srid?: InputMaybe<SortOrder>;
  srtext?: InputMaybe<SortOrderInput>;
};

export enum Spatial_Ref_SysScalarFieldEnum {
  AuthName = 'auth_name',
  AuthSrid = 'auth_srid',
  Proj4text = 'proj4text',
  Srid = 'srid',
  Srtext = 'srtext'
}

export type Spatial_Ref_SysScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<Spatial_Ref_SysScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<Spatial_Ref_SysScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<Spatial_Ref_SysScalarWhereWithAggregatesInput>>;
  auth_name?: InputMaybe<StringNullableWithAggregatesFilter>;
  auth_srid?: InputMaybe<IntNullableWithAggregatesFilter>;
  proj4text?: InputMaybe<StringNullableWithAggregatesFilter>;
  srid?: InputMaybe<IntWithAggregatesFilter>;
  srtext?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type Spatial_Ref_SysSumAggregate = {
  __typename?: 'Spatial_ref_sysSumAggregate';
  auth_srid?: Maybe<Scalars['Int']['output']>;
  srid?: Maybe<Scalars['Int']['output']>;
};

export type Spatial_Ref_SysSumOrderByAggregateInput = {
  auth_srid?: InputMaybe<SortOrder>;
  srid?: InputMaybe<SortOrder>;
};

export type Spatial_Ref_SysUpdateInput = {
  auth_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  auth_srid?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  proj4text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  srid?: InputMaybe<IntFieldUpdateOperationsInput>;
  srtext?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type Spatial_Ref_SysUpdateManyMutationInput = {
  auth_name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  auth_srid?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  proj4text?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  srid?: InputMaybe<IntFieldUpdateOperationsInput>;
  srtext?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type Spatial_Ref_SysWhereInput = {
  AND?: InputMaybe<Array<Spatial_Ref_SysWhereInput>>;
  NOT?: InputMaybe<Array<Spatial_Ref_SysWhereInput>>;
  OR?: InputMaybe<Array<Spatial_Ref_SysWhereInput>>;
  auth_name?: InputMaybe<StringNullableFilter>;
  auth_srid?: InputMaybe<IntNullableFilter>;
  proj4text?: InputMaybe<StringNullableFilter>;
  srid?: InputMaybe<IntFilter>;
  srtext?: InputMaybe<StringNullableFilter>;
};

export type Spatial_Ref_SysWhereUniqueInput = {
  AND?: InputMaybe<Array<Spatial_Ref_SysWhereInput>>;
  NOT?: InputMaybe<Array<Spatial_Ref_SysWhereInput>>;
  OR?: InputMaybe<Array<Spatial_Ref_SysWhereInput>>;
  auth_name?: InputMaybe<StringNullableFilter>;
  auth_srid?: InputMaybe<IntNullableFilter>;
  proj4text?: InputMaybe<StringNullableFilter>;
  srid?: InputMaybe<Scalars['Int']['input']>;
  srtext?: InputMaybe<StringNullableFilter>;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  chat: ChatMessage;
};


export type SubscriptionChatArgs = {
  chatId: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  addresses: Array<UserAddress>;
  babyBirth?: Maybe<Scalars['DateTimeISO']['output']>;
  chatMessages: Array<ChatMessage>;
  chats: Array<ChatUser>;
  comments: Array<Comment>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  files: Array<UserFile>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  posts: Array<Post>;
  role: Role;
  sessions: Array<Session>;
  updatedAt: Scalars['DateTimeISO']['output'];
  username?: Maybe<Scalars['String']['output']>;
};


export type UserAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type UserAddressesArgs = {
  cursor?: InputMaybe<UserAddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAddressWhereInput>;
};


export type UserChatMessagesArgs = {
  cursor?: InputMaybe<ChatMessageWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatMessageScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type UserChatsArgs = {
  cursor?: InputMaybe<ChatUserWhereUniqueInput>;
  distinct?: InputMaybe<Array<ChatUserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ChatUserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ChatUserWhereInput>;
};


export type UserCommentsArgs = {
  cursor?: InputMaybe<CommentWhereUniqueInput>;
  distinct?: InputMaybe<Array<CommentScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CommentWhereInput>;
};


export type UserFilesArgs = {
  cursor?: InputMaybe<UserFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFileWhereInput>;
};


export type UserPostsArgs = {
  cursor?: InputMaybe<PostWhereUniqueInput>;
  distinct?: InputMaybe<Array<PostScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<PostOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PostWhereInput>;
};


export type UserSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  address: Address;
  addressId: Scalars['Int']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type UserAddressAvgAggregate = {
  __typename?: 'UserAddressAvgAggregate';
  addressId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type UserAddressAvgOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserAddressCountAggregate = {
  __typename?: 'UserAddressCountAggregate';
  _all: Scalars['Int']['output'];
  addressId: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserAddressCountOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserAddressCreateInput = {
  address: AddressCreateNestedOneWithoutUsersInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutAddressesInput;
};

export type UserAddressCreateManyAddressInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type UserAddressCreateManyAddressInputEnvelope = {
  data: Array<UserAddressCreateManyAddressInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserAddressCreateManyInput = {
  addressId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type UserAddressCreateManyUserInput = {
  addressId: Scalars['Int']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserAddressCreateManyUserInputEnvelope = {
  data: Array<UserAddressCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserAddressCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserAddressWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserAddressCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserAddressCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserAddressCreateManyUserInputEnvelope>;
};

export type UserAddressCreateOrConnectWithoutAddressInput = {
  create: UserAddressCreateWithoutAddressInput;
  where: UserAddressWhereUniqueInput;
};

export type UserAddressCreateOrConnectWithoutUserInput = {
  create: UserAddressCreateWithoutUserInput;
  where: UserAddressWhereUniqueInput;
};

export type UserAddressCreateWithoutAddressInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutAddressesInput;
};

export type UserAddressCreateWithoutUserInput = {
  address: AddressCreateNestedOneWithoutUsersInput;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserAddressGroupBy = {
  __typename?: 'UserAddressGroupBy';
  _avg?: Maybe<UserAddressAvgAggregate>;
  _count?: Maybe<UserAddressCountAggregate>;
  _max?: Maybe<UserAddressMaxAggregate>;
  _min?: Maybe<UserAddressMinAggregate>;
  _sum?: Maybe<UserAddressSumAggregate>;
  addressId: Scalars['Int']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['Int']['output'];
};

export type UserAddressListRelationFilter = {
  every?: InputMaybe<UserAddressWhereInput>;
  none?: InputMaybe<UserAddressWhereInput>;
  some?: InputMaybe<UserAddressWhereInput>;
};

export type UserAddressMaxAggregate = {
  __typename?: 'UserAddressMaxAggregate';
  addressId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserAddressMaxOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserAddressMinAggregate = {
  __typename?: 'UserAddressMinAggregate';
  addressId?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserAddressMinOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserAddressOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserAddressOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAddressAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserAddressCountOrderByAggregateInput>;
  _max?: InputMaybe<UserAddressMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserAddressMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserAddressSumOrderByAggregateInput>;
  addressId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserAddressOrderByWithRelationInput = {
  address?: InputMaybe<AddressOrderByWithRelationInput>;
  addressId?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserAddressScalarFieldEnum {
  AddressId = 'addressId',
  CreatedAt = 'createdAt',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserAddressScalarWhereInput = {
  AND?: InputMaybe<Array<UserAddressScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserAddressScalarWhereInput>>;
  OR?: InputMaybe<Array<UserAddressScalarWhereInput>>;
  addressId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserAddressScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserAddressScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserAddressScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserAddressScalarWhereWithAggregatesInput>>;
  addressId?: InputMaybe<IntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type UserAddressSumAggregate = {
  __typename?: 'UserAddressSumAggregate';
  addressId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserAddressSumOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserAddressUpdateInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutUsersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAddressesNestedInput>;
};

export type UserAddressUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserAddressUpdateManyWithWhereWithoutAddressInput = {
  data: UserAddressUpdateManyMutationInput;
  where: UserAddressScalarWhereInput;
};

export type UserAddressUpdateManyWithWhereWithoutUserInput = {
  data: UserAddressUpdateManyMutationInput;
  where: UserAddressScalarWhereInput;
};

export type UserAddressUpdateManyWithoutAddressNestedInput = {
  connect?: InputMaybe<Array<UserAddressWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserAddressCreateOrConnectWithoutAddressInput>>;
  create?: InputMaybe<Array<UserAddressCreateWithoutAddressInput>>;
  createMany?: InputMaybe<UserAddressCreateManyAddressInputEnvelope>;
  delete?: InputMaybe<Array<UserAddressWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserAddressScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserAddressWhereUniqueInput>>;
  set?: InputMaybe<Array<UserAddressWhereUniqueInput>>;
  update?: InputMaybe<Array<UserAddressUpdateWithWhereUniqueWithoutAddressInput>>;
  updateMany?: InputMaybe<Array<UserAddressUpdateManyWithWhereWithoutAddressInput>>;
  upsert?: InputMaybe<Array<UserAddressUpsertWithWhereUniqueWithoutAddressInput>>;
};

export type UserAddressUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserAddressWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserAddressCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserAddressCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserAddressCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserAddressWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserAddressScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserAddressWhereUniqueInput>>;
  set?: InputMaybe<Array<UserAddressWhereUniqueInput>>;
  update?: InputMaybe<Array<UserAddressUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserAddressUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserAddressUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserAddressUpdateWithWhereUniqueWithoutAddressInput = {
  data: UserAddressUpdateWithoutAddressInput;
  where: UserAddressWhereUniqueInput;
};

export type UserAddressUpdateWithWhereUniqueWithoutUserInput = {
  data: UserAddressUpdateWithoutUserInput;
  where: UserAddressWhereUniqueInput;
};

export type UserAddressUpdateWithoutAddressInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAddressesNestedInput>;
};

export type UserAddressUpdateWithoutUserInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutUsersNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserAddressUpsertWithWhereUniqueWithoutAddressInput = {
  create: UserAddressCreateWithoutAddressInput;
  update: UserAddressUpdateWithoutAddressInput;
  where: UserAddressWhereUniqueInput;
};

export type UserAddressUpsertWithWhereUniqueWithoutUserInput = {
  create: UserAddressCreateWithoutUserInput;
  update: UserAddressUpdateWithoutUserInput;
  where: UserAddressWhereUniqueInput;
};

export type UserAddressWhereInput = {
  AND?: InputMaybe<Array<UserAddressWhereInput>>;
  NOT?: InputMaybe<Array<UserAddressWhereInput>>;
  OR?: InputMaybe<Array<UserAddressWhereInput>>;
  address?: InputMaybe<AddressRelationFilter>;
  addressId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserAddressWhereUniqueInput = {
  AND?: InputMaybe<Array<UserAddressWhereInput>>;
  NOT?: InputMaybe<Array<UserAddressWhereInput>>;
  OR?: InputMaybe<Array<UserAddressWhereInput>>;
  address?: InputMaybe<AddressRelationFilter>;
  addressId?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']['output']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int']['output'];
  addresses: Scalars['Int']['output'];
  chatMessages: Scalars['Int']['output'];
  chats: Scalars['Int']['output'];
  comments: Scalars['Int']['output'];
  files: Scalars['Int']['output'];
  posts: Scalars['Int']['output'];
  sessions: Scalars['Int']['output'];
};


export type UserCountAccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type UserCountAddressesArgs = {
  where?: InputMaybe<UserAddressWhereInput>;
};


export type UserCountChatMessagesArgs = {
  where?: InputMaybe<ChatMessageWhereInput>;
};


export type UserCountChatsArgs = {
  where?: InputMaybe<ChatUserWhereInput>;
};


export type UserCountCommentsArgs = {
  where?: InputMaybe<CommentWhereInput>;
};


export type UserCountFilesArgs = {
  where?: InputMaybe<UserFileWhereInput>;
};


export type UserCountPostsArgs = {
  where?: InputMaybe<PostWhereInput>;
};


export type UserCountSessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  babyBirth: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  emailVerified: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  role: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  babyBirth?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  addresses?: InputMaybe<UserAddressCreateNestedManyWithoutUserInput>;
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  chatMessages?: InputMaybe<ChatMessageCreateNestedManyWithoutUserInput>;
  chats?: InputMaybe<ChatUserCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<UserFileCreateNestedManyWithoutUserInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateManyInput = {
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
};

export type UserCreateNestedOneWithoutAddressesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAddressesInput>;
  create?: InputMaybe<UserCreateWithoutAddressesInput>;
};

export type UserCreateNestedOneWithoutChatMessagesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChatMessagesInput>;
  create?: InputMaybe<UserCreateWithoutChatMessagesInput>;
};

export type UserCreateNestedOneWithoutChatsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChatsInput>;
  create?: InputMaybe<UserCreateWithoutChatsInput>;
};

export type UserCreateNestedOneWithoutCommentsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
};

export type UserCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
};

export type UserCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAddressesInput = {
  create: UserCreateWithoutAddressesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChatMessagesInput = {
  create: UserCreateWithoutChatMessagesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutChatsInput = {
  create: UserCreateWithoutChatsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  addresses?: InputMaybe<UserAddressCreateNestedManyWithoutUserInput>;
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  chatMessages?: InputMaybe<ChatMessageCreateNestedManyWithoutUserInput>;
  chats?: InputMaybe<ChatUserCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<UserFileCreateNestedManyWithoutUserInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutAddressesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  chatMessages?: InputMaybe<ChatMessageCreateNestedManyWithoutUserInput>;
  chats?: InputMaybe<ChatUserCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<UserFileCreateNestedManyWithoutUserInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutChatMessagesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  addresses?: InputMaybe<UserAddressCreateNestedManyWithoutUserInput>;
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  chats?: InputMaybe<ChatUserCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<UserFileCreateNestedManyWithoutUserInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutChatsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  addresses?: InputMaybe<UserAddressCreateNestedManyWithoutUserInput>;
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  chatMessages?: InputMaybe<ChatMessageCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<UserFileCreateNestedManyWithoutUserInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutCommentsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  addresses?: InputMaybe<UserAddressCreateNestedManyWithoutUserInput>;
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  chatMessages?: InputMaybe<ChatMessageCreateNestedManyWithoutUserInput>;
  chats?: InputMaybe<ChatUserCreateNestedManyWithoutUserInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<UserFileCreateNestedManyWithoutUserInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutFilesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  addresses?: InputMaybe<UserAddressCreateNestedManyWithoutUserInput>;
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  chatMessages?: InputMaybe<ChatMessageCreateNestedManyWithoutUserInput>;
  chats?: InputMaybe<ChatUserCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutPostsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  addresses?: InputMaybe<UserAddressCreateNestedManyWithoutUserInput>;
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  chatMessages?: InputMaybe<ChatMessageCreateNestedManyWithoutUserInput>;
  chats?: InputMaybe<ChatUserCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<UserFileCreateNestedManyWithoutUserInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Role>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  addresses?: InputMaybe<UserAddressCreateNestedManyWithoutUserInput>;
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  chatMessages?: InputMaybe<ChatMessageCreateNestedManyWithoutUserInput>;
  chats?: InputMaybe<ChatUserCreateNestedManyWithoutUserInput>;
  comments?: InputMaybe<CommentCreateNestedManyWithoutUserInput>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  email: Scalars['String']['input'];
  emailVerified?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<UserFileCreateNestedManyWithoutUserInput>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  posts?: InputMaybe<PostCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserFile = {
  __typename?: 'UserFile';
  createdAt: Scalars['DateTimeISO']['output'];
  file: File;
  fileId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type UserFileAvgAggregate = {
  __typename?: 'UserFileAvgAggregate';
  fileId?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  userId?: Maybe<Scalars['Float']['output']>;
};

export type UserFileAvgOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserFileCountAggregate = {
  __typename?: 'UserFileCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  fileId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type UserFileCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserFileCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  file: FileCreateNestedOneWithoutFilesInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutFilesInput;
};

export type UserFileCreateManyFileInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type UserFileCreateManyFileInputEnvelope = {
  data: Array<UserFileCreateManyFileInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserFileCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  fileId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  userId: Scalars['Int']['input'];
};

export type UserFileCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  fileId: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserFileCreateManyUserInputEnvelope = {
  data: Array<UserFileCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserFileCreateNestedManyWithoutFileInput = {
  connect?: InputMaybe<Array<UserFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserFileCreateOrConnectWithoutFileInput>>;
  create?: InputMaybe<Array<UserFileCreateWithoutFileInput>>;
  createMany?: InputMaybe<UserFileCreateManyFileInputEnvelope>;
};

export type UserFileCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<UserFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserFileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserFileCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserFileCreateManyUserInputEnvelope>;
};

export type UserFileCreateOrConnectWithoutFileInput = {
  create: UserFileCreateWithoutFileInput;
  where: UserFileWhereUniqueInput;
};

export type UserFileCreateOrConnectWithoutUserInput = {
  create: UserFileCreateWithoutUserInput;
  where: UserFileWhereUniqueInput;
};

export type UserFileCreateWithoutFileInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  user: UserCreateNestedOneWithoutFilesInput;
};

export type UserFileCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  file: FileCreateNestedOneWithoutFilesInput;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type UserFileGroupBy = {
  __typename?: 'UserFileGroupBy';
  _avg?: Maybe<UserFileAvgAggregate>;
  _count?: Maybe<UserFileCountAggregate>;
  _max?: Maybe<UserFileMaxAggregate>;
  _min?: Maybe<UserFileMinAggregate>;
  _sum?: Maybe<UserFileSumAggregate>;
  createdAt: Scalars['DateTimeISO']['output'];
  fileId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  userId: Scalars['Int']['output'];
};

export type UserFileListRelationFilter = {
  every?: InputMaybe<UserFileWhereInput>;
  none?: InputMaybe<UserFileWhereInput>;
  some?: InputMaybe<UserFileWhereInput>;
};

export type UserFileMaxAggregate = {
  __typename?: 'UserFileMaxAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  fileId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserFileMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserFileMinAggregate = {
  __typename?: 'UserFileMinAggregate';
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  fileId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserFileMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserFileOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type UserFileOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserFileAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserFileCountOrderByAggregateInput>;
  _max?: InputMaybe<UserFileMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserFileMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserFileSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserFileOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  file?: InputMaybe<FileOrderByWithRelationInput>;
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum UserFileScalarFieldEnum {
  CreatedAt = 'createdAt',
  FileId = 'fileId',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type UserFileScalarWhereInput = {
  AND?: InputMaybe<Array<UserFileScalarWhereInput>>;
  NOT?: InputMaybe<Array<UserFileScalarWhereInput>>;
  OR?: InputMaybe<Array<UserFileScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  fileId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserFileScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserFileScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserFileScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserFileScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  fileId?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type UserFileSumAggregate = {
  __typename?: 'UserFileSumAggregate';
  fileId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['Int']['output']>;
};

export type UserFileSumOrderByAggregateInput = {
  fileId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type UserFileUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  file?: InputMaybe<FileUpdateOneRequiredWithoutFilesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFilesNestedInput>;
};

export type UserFileUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserFileUpdateManyWithWhereWithoutFileInput = {
  data: UserFileUpdateManyMutationInput;
  where: UserFileScalarWhereInput;
};

export type UserFileUpdateManyWithWhereWithoutUserInput = {
  data: UserFileUpdateManyMutationInput;
  where: UserFileScalarWhereInput;
};

export type UserFileUpdateManyWithoutFileNestedInput = {
  connect?: InputMaybe<Array<UserFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserFileCreateOrConnectWithoutFileInput>>;
  create?: InputMaybe<Array<UserFileCreateWithoutFileInput>>;
  createMany?: InputMaybe<UserFileCreateManyFileInputEnvelope>;
  delete?: InputMaybe<Array<UserFileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserFileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserFileWhereUniqueInput>>;
  set?: InputMaybe<Array<UserFileWhereUniqueInput>>;
  update?: InputMaybe<Array<UserFileUpdateWithWhereUniqueWithoutFileInput>>;
  updateMany?: InputMaybe<Array<UserFileUpdateManyWithWhereWithoutFileInput>>;
  upsert?: InputMaybe<Array<UserFileUpsertWithWhereUniqueWithoutFileInput>>;
};

export type UserFileUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<UserFileWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<UserFileCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<UserFileCreateWithoutUserInput>>;
  createMany?: InputMaybe<UserFileCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<UserFileWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<UserFileScalarWhereInput>>;
  disconnect?: InputMaybe<Array<UserFileWhereUniqueInput>>;
  set?: InputMaybe<Array<UserFileWhereUniqueInput>>;
  update?: InputMaybe<Array<UserFileUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<UserFileUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<UserFileUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserFileUpdateWithWhereUniqueWithoutFileInput = {
  data: UserFileUpdateWithoutFileInput;
  where: UserFileWhereUniqueInput;
};

export type UserFileUpdateWithWhereUniqueWithoutUserInput = {
  data: UserFileUpdateWithoutUserInput;
  where: UserFileWhereUniqueInput;
};

export type UserFileUpdateWithoutFileInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutFilesNestedInput>;
};

export type UserFileUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  file?: InputMaybe<FileUpdateOneRequiredWithoutFilesNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type UserFileUpsertWithWhereUniqueWithoutFileInput = {
  create: UserFileCreateWithoutFileInput;
  update: UserFileUpdateWithoutFileInput;
  where: UserFileWhereUniqueInput;
};

export type UserFileUpsertWithWhereUniqueWithoutUserInput = {
  create: UserFileCreateWithoutUserInput;
  update: UserFileUpdateWithoutUserInput;
  where: UserFileWhereUniqueInput;
};

export type UserFileWhereInput = {
  AND?: InputMaybe<Array<UserFileWhereInput>>;
  NOT?: InputMaybe<Array<UserFileWhereInput>>;
  OR?: InputMaybe<Array<UserFileWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  file?: InputMaybe<FileRelationFilter>;
  fileId?: InputMaybe<IntFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserFileWhereUniqueInput = {
  AND?: InputMaybe<Array<UserFileWhereInput>>;
  NOT?: InputMaybe<Array<UserFileWhereInput>>;
  OR?: InputMaybe<Array<UserFileWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  file?: InputMaybe<FileRelationFilter>;
  fileId?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  babyBirth?: Maybe<Scalars['DateTimeISO']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['Int']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role: Role;
  updatedAt: Scalars['DateTimeISO']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  babyBirth?: Maybe<Scalars['DateTimeISO']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  babyBirth?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  babyBirth?: Maybe<Scalars['DateTimeISO']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMinOrderByAggregateInput = {
  babyBirth?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  babyBirth?: InputMaybe<SortOrderInput>;
  content?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrderInput>;
};

export type UserOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  addresses?: InputMaybe<UserAddressOrderByRelationAggregateInput>;
  babyBirth?: InputMaybe<SortOrderInput>;
  chatMessages?: InputMaybe<ChatMessageOrderByRelationAggregateInput>;
  chats?: InputMaybe<ChatUserOrderByRelationAggregateInput>;
  comments?: InputMaybe<CommentOrderByRelationAggregateInput>;
  content?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrderInput>;
  files?: InputMaybe<UserFileOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  posts?: InputMaybe<PostOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrderInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  BabyBirth = 'babyBirth',
  Content = 'content',
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  Role = 'role',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  babyBirth?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  content?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  addresses?: InputMaybe<UserAddressUpdateManyWithoutUserNestedInput>;
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  chatMessages?: InputMaybe<ChatMessageUpdateManyWithoutUserNestedInput>;
  chats?: InputMaybe<ChatUserUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<UserFileUpdateManyWithoutUserNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAccountsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAccountsInput>;
};

export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAddressesInput>;
  create?: InputMaybe<UserCreateWithoutAddressesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAddressesInput>;
  upsert?: InputMaybe<UserUpsertWithoutAddressesInput>;
};

export type UserUpdateOneRequiredWithoutChatMessagesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChatMessagesInput>;
  create?: InputMaybe<UserCreateWithoutChatMessagesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutChatMessagesInput>;
  upsert?: InputMaybe<UserUpsertWithoutChatMessagesInput>;
};

export type UserUpdateOneRequiredWithoutChatsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutChatsInput>;
  create?: InputMaybe<UserCreateWithoutChatsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutChatsInput>;
  upsert?: InputMaybe<UserUpsertWithoutChatsInput>;
};

export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutCommentsInput>;
  create?: InputMaybe<UserCreateWithoutCommentsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutCommentsInput>;
  upsert?: InputMaybe<UserUpsertWithoutCommentsInput>;
};

export type UserUpdateOneRequiredWithoutFilesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutFilesInput>;
  upsert?: InputMaybe<UserUpsertWithoutFilesInput>;
};

export type UserUpdateOneRequiredWithoutPostsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<UserCreateWithoutPostsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutPostsInput>;
  upsert?: InputMaybe<UserUpsertWithoutPostsInput>;
};

export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
};

export type UserUpdateToOneWithWhereWithoutAccountsInput = {
  data: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutAddressesInput = {
  data: UserUpdateWithoutAddressesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutChatMessagesInput = {
  data: UserUpdateWithoutChatMessagesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutChatsInput = {
  data: UserUpdateWithoutChatsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutCommentsInput = {
  data: UserUpdateWithoutCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutFilesInput = {
  data: UserUpdateWithoutFilesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutPostsInput = {
  data: UserUpdateWithoutPostsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSessionsInput = {
  data: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAccountsInput = {
  addresses?: InputMaybe<UserAddressUpdateManyWithoutUserNestedInput>;
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  chatMessages?: InputMaybe<ChatMessageUpdateManyWithoutUserNestedInput>;
  chats?: InputMaybe<ChatUserUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<UserFileUpdateManyWithoutUserNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAddressesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  chatMessages?: InputMaybe<ChatMessageUpdateManyWithoutUserNestedInput>;
  chats?: InputMaybe<ChatUserUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<UserFileUpdateManyWithoutUserNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChatMessagesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  addresses?: InputMaybe<UserAddressUpdateManyWithoutUserNestedInput>;
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  chats?: InputMaybe<ChatUserUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<UserFileUpdateManyWithoutUserNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutChatsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  addresses?: InputMaybe<UserAddressUpdateManyWithoutUserNestedInput>;
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  chatMessages?: InputMaybe<ChatMessageUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<UserFileUpdateManyWithoutUserNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCommentsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  addresses?: InputMaybe<UserAddressUpdateManyWithoutUserNestedInput>;
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  chatMessages?: InputMaybe<ChatMessageUpdateManyWithoutUserNestedInput>;
  chats?: InputMaybe<ChatUserUpdateManyWithoutUserNestedInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<UserFileUpdateManyWithoutUserNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFilesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  addresses?: InputMaybe<UserAddressUpdateManyWithoutUserNestedInput>;
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  chatMessages?: InputMaybe<ChatMessageUpdateManyWithoutUserNestedInput>;
  chats?: InputMaybe<ChatUserUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutPostsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  addresses?: InputMaybe<UserAddressUpdateManyWithoutUserNestedInput>;
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  chatMessages?: InputMaybe<ChatMessageUpdateManyWithoutUserNestedInput>;
  chats?: InputMaybe<ChatUserUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<UserFileUpdateManyWithoutUserNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  addresses?: InputMaybe<UserAddressUpdateManyWithoutUserNestedInput>;
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  chatMessages?: InputMaybe<ChatMessageUpdateManyWithoutUserNestedInput>;
  chats?: InputMaybe<ChatUserUpdateManyWithoutUserNestedInput>;
  comments?: InputMaybe<CommentUpdateManyWithoutUserNestedInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<UserFileUpdateManyWithoutUserNestedInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  update: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutAddressesInput = {
  create: UserCreateWithoutAddressesInput;
  update: UserUpdateWithoutAddressesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutChatMessagesInput = {
  create: UserCreateWithoutChatMessagesInput;
  update: UserUpdateWithoutChatMessagesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutChatsInput = {
  create: UserCreateWithoutChatsInput;
  update: UserUpdateWithoutChatsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutCommentsInput = {
  create: UserCreateWithoutCommentsInput;
  update: UserUpdateWithoutCommentsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  update: UserUpdateWithoutFilesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutPostsInput = {
  create: UserCreateWithoutPostsInput;
  update: UserUpdateWithoutPostsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  update: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  addresses?: InputMaybe<UserAddressListRelationFilter>;
  babyBirth?: InputMaybe<DateTimeNullableFilter>;
  chatMessages?: InputMaybe<ChatMessageListRelationFilter>;
  chats?: InputMaybe<ChatUserListRelationFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  files?: InputMaybe<UserFileListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  addresses?: InputMaybe<UserAddressListRelationFilter>;
  babyBirth?: InputMaybe<DateTimeNullableFilter>;
  chatMessages?: InputMaybe<ChatMessageListRelationFilter>;
  chats?: InputMaybe<ChatUserListRelationFilter>;
  comments?: InputMaybe<CommentListRelationFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  files?: InputMaybe<UserFileListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  posts?: InputMaybe<PostListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['DateTimeISO']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  identifier: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type VerificationTokenCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenCreateInput = {
  expires: Scalars['DateTimeISO']['input'];
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenCreateManyInput = {
  expires: Scalars['DateTimeISO']['input'];
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenGroupBy = {
  __typename?: 'VerificationTokenGroupBy';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
  expires: Scalars['DateTimeISO']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  expires?: Maybe<Scalars['DateTimeISO']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<VerificationTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<VerificationTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<VerificationTokenMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithRelationInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenScalarFieldEnum {
  Expires = 'expires',
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  identifier?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type VerificationTokenUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenWhereInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type VerificationTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  identifier_token?: InputMaybe<VerificationTokenIdentifierTokenCompoundUniqueInput>;
  token?: InputMaybe<StringFilter>;
};

export type GetPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, content: string, address: { __typename?: 'Address', c3?: string | null }, files: Array<{ __typename?: 'PostFile', file: { __typename?: 'File', location: string } }> }> };

export type AddressesQueryVariables = Exact<{ [key: string]: never; }>;


export type AddressesQuery = { __typename?: 'Query', addresses: Array<{ __typename?: 'Address', id: string, code: string, c1: string, c2?: string | null, c3?: string | null, c4?: string | null }> };

export type ChatsQueryVariables = Exact<{
  where: ChatWhereInput;
}>;


export type ChatsQuery = { __typename?: 'Query', chats: Array<{ __typename?: 'Chat', id: string, name?: string | null, users: Array<{ __typename?: 'ChatUser', user: { __typename?: 'User', id: string, username?: string | null, email: string, files: Array<{ __typename?: 'UserFile', file: { __typename?: 'File', url: { __typename?: 'CustomFileUrl', raw?: string | null, lg?: string | null, md?: string | null, sm?: string | null } } }> } }> }> };

export type ChatMessagesQueryVariables = Exact<{
  where: ChatMessageWhereInput;
  orderBy?: InputMaybe<Array<ChatMessageOrderByWithRelationInput> | ChatMessageOrderByWithRelationInput>;
}>;


export type ChatMessagesQuery = { __typename?: 'Query', chatMessages: Array<{ __typename?: 'ChatMessage', id: string, chatId: number, message: string, updatedAt: any, user: { __typename?: 'User', id: string, username?: string | null, email: string, files: Array<{ __typename?: 'UserFile', file: { __typename?: 'File', url: { __typename?: 'CustomFileUrl', sm?: string | null } } }> } }> };

export type CreateOneChatMutationVariables = Exact<{
  data: ChatCreateInput;
}>;


export type CreateOneChatMutation = { __typename?: 'Mutation', createOneChat: { __typename?: 'Chat', id: string } };

export type CreateOneChatMessageMutationVariables = Exact<{
  data: ChatMessageCreateInput;
}>;


export type CreateOneChatMessageMutation = { __typename?: 'Mutation', createOneChatMessage: { __typename?: 'ChatMessage', id: string, message: string, updatedAt: any } };

export type ChatSubscriptionVariables = Exact<{
  chatId: Scalars['Int']['input'];
}>;


export type ChatSubscription = { __typename?: 'Subscription', chat: { __typename?: 'ChatMessage', chatId: number, id: string, message: string, updatedAt: any, user: { __typename?: 'User', id: string, username?: string | null, email: string, files: Array<{ __typename?: 'UserFile', file: { __typename?: 'File', url: { __typename?: 'CustomFileUrl', sm?: string | null } } }> } } };

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, content: string, updatedAt: any, user: { __typename?: 'User', id: string, username?: string | null, files: Array<{ __typename?: 'UserFile', file: { __typename?: 'File', url: { __typename?: 'CustomFileUrl', raw?: string | null, lg?: string | null, md?: string | null, sm?: string | null } } }>, addresses: Array<{ __typename?: 'UserAddress', address: { __typename?: 'Address', id: string, c1: string, c2?: string | null, c3?: string | null, c4?: string | null } }> }, address: { __typename?: 'Address', id: string, c1: string, c2?: string | null, c3?: string | null, c4?: string | null }, files: Array<{ __typename?: 'PostFile', file: { __typename?: 'File', url: { __typename?: 'CustomFileUrl', raw?: string | null, lg?: string | null, md?: string | null, sm?: string | null } } }> }> };

export type CommentsQueryVariables = Exact<{
  where?: InputMaybe<CommentWhereInput>;
  orderBy?: InputMaybe<Array<CommentOrderByWithRelationInput> | CommentOrderByWithRelationInput>;
}>;


export type CommentsQuery = { __typename?: 'Query', comments: Array<{ __typename?: 'Comment', id: string, content: string, updatedAt: any, user: { __typename?: 'User', id: string, username?: string | null, files: Array<{ __typename?: 'UserFile', file: { __typename?: 'File', url: { __typename?: 'CustomFileUrl', raw?: string | null, lg?: string | null, md?: string | null, sm?: string | null } } }> } }> };

export type CreatePostMutationVariables = Exact<{
  data: PostCreateInput;
  strategy?: InputMaybe<RelationLoadStrategy>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createOnePost: { __typename?: 'Post', id: string, content: string, address: { __typename?: 'Address', c3?: string | null }, files: Array<{ __typename?: 'PostFile', file: { __typename?: 'File', location: string } }> } };

export type CreateOneCommentMutationVariables = Exact<{
  data: CommentCreateInput;
}>;


export type CreateOneCommentMutation = { __typename?: 'Mutation', createOneComment: { __typename?: 'Comment', id: string, content: string, user: { __typename?: 'User', id: string }, post: { __typename?: 'Post', id: string } } };

export type GetUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', id: string, username?: string | null, content?: string | null, babyBirth?: any | null, email: string, updatedAt: any, addresses: Array<{ __typename?: 'UserAddress', address: { __typename?: 'Address', id: string, c1: string, c2?: string | null, c3?: string | null, c4?: string | null } }>, files: Array<{ __typename?: 'UserFile', file: { __typename?: 'File', id: string, url: { __typename?: 'CustomFileUrl', raw?: string | null, lg?: string | null, md?: string | null, sm?: string | null } } }> } | null };

export type UpdateOneUserMutationVariables = Exact<{
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}>;


export type UpdateOneUserMutation = { __typename?: 'Mutation', updateOneUser?: { __typename?: 'User', id: string, username?: string | null, babyBirth?: any | null, content?: string | null, role: Role, addresses: Array<{ __typename?: 'UserAddress', address: { __typename?: 'Address', c3?: string | null } }>, files: Array<{ __typename?: 'UserFile', file: { __typename?: 'File', url: { __typename?: 'CustomFileUrl', raw?: string | null, lg?: string | null, md?: string | null, sm?: string | null } } }> } | null };


export const GetPostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPosts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"c3"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPostsQuery, GetPostsQueryVariables>;
export const AddressesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"c1"}},{"kind":"Field","name":{"kind":"Name","value":"c2"}},{"kind":"Field","name":{"kind":"Name","value":"c3"}},{"kind":"Field","name":{"kind":"Name","value":"c4"}}]}}]}}]} as unknown as DocumentNode<AddressesQuery, AddressesQueryVariables>;
export const ChatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"chats"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatWhereInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chats"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"lg"}},{"kind":"Field","name":{"kind":"Name","value":"md"}},{"kind":"Field","name":{"kind":"Name","value":"sm"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<ChatsQuery, ChatsQueryVariables>;
export const ChatMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"chatMessages"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatMessageWhereInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatMessageOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatMessages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chatId"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sm"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ChatMessagesQuery, ChatMessagesQueryVariables>;
export const CreateOneChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createOneChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneChat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateOneChatMutation, CreateOneChatMutationVariables>;
export const CreateOneChatMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createOneChatMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ChatMessageCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneChatMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CreateOneChatMessageMutation, CreateOneChatMessageMutationVariables>;
export const ChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"chat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"chatId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"chatId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sm"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<ChatSubscription, ChatSubscriptionVariables>;
export const PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"posts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"lg"}},{"kind":"Field","name":{"kind":"Name","value":"md"}},{"kind":"Field","name":{"kind":"Name","value":"sm"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"c1"}},{"kind":"Field","name":{"kind":"Name","value":"c2"}},{"kind":"Field","name":{"kind":"Name","value":"c3"}},{"kind":"Field","name":{"kind":"Name","value":"c4"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"c1"}},{"kind":"Field","name":{"kind":"Name","value":"c2"}},{"kind":"Field","name":{"kind":"Name","value":"c3"}},{"kind":"Field","name":{"kind":"Name","value":"c4"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"lg"}},{"kind":"Field","name":{"kind":"Name","value":"md"}},{"kind":"Field","name":{"kind":"Name","value":"sm"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<PostsQuery, PostsQueryVariables>;
export const CommentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"comments"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentWhereInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentOrderByWithRelationInput"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"orderBy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"lg"}},{"kind":"Field","name":{"kind":"Name","value":"md"}},{"kind":"Field","name":{"kind":"Name","value":"sm"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]} as unknown as DocumentNode<CommentsQuery, CommentsQueryVariables>;
export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostCreateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"strategy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationLoadStrategy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOnePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"relationLoadStrategy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"strategy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"c3"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const CreateOneCommentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createOneComment"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CommentCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneComment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"post"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<CreateOneCommentMutation, CreateOneCommentMutationVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"babyBirth"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"c1"}},{"kind":"Field","name":{"kind":"Name","value":"c2"}},{"kind":"Field","name":{"kind":"Name","value":"c3"}},{"kind":"Field","name":{"kind":"Name","value":"c4"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"lg"}},{"kind":"Field","name":{"kind":"Name","value":"md"}},{"kind":"Field","name":{"kind":"Name","value":"sm"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const UpdateOneUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateOneUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserUpdateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserWhereUniqueInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateOneUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"babyBirth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"c3"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"raw"}},{"kind":"Field","name":{"kind":"Name","value":"lg"}},{"kind":"Field","name":{"kind":"Name","value":"md"}},{"kind":"Field","name":{"kind":"Name","value":"sm"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"role"}}]}}]}}]} as unknown as DocumentNode<UpdateOneUserMutation, UpdateOneUserMutationVariables>;