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

export type Address = {
  __typename?: 'Address';
  Post: Array<Post>;
  _count?: Maybe<AddressCount>;
  c1: Scalars['String']['output'];
  c2?: Maybe<Scalars['String']['output']>;
  c3?: Maybe<Scalars['String']['output']>;
  c4?: Maybe<Scalars['String']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  users: Array<UserAddress>;
};


export type AddressPostArgs = {
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
  Post: Scalars['Int']['output'];
  users: Scalars['Int']['output'];
};


export type AddressCountPostArgs = {
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

export type AddressCreateNestedOneWithoutPostInput = {
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
  Post?: InputMaybe<PostOrderByRelationAggregateInput>;
  c1?: InputMaybe<SortOrder>;
  c2?: InputMaybe<SortOrderInput>;
  c3?: InputMaybe<SortOrderInput>;
  c4?: InputMaybe<SortOrderInput>;
  code?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
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
  Post?: InputMaybe<PostUpdateManyWithoutAddressNestedInput>;
  c1?: InputMaybe<StringFieldUpdateOperationsInput>;
  c2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  c3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  c4?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type AddressUpdateOneRequiredWithoutPostNestedInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  update?: InputMaybe<AddressUpdateToOneWithWhereWithoutPostInput>;
};

export type AddressUpdateOneRequiredWithoutUsersNestedInput = {
  connect?: InputMaybe<AddressWhereUniqueInput>;
  update?: InputMaybe<AddressUpdateToOneWithWhereWithoutUsersInput>;
};

export type AddressUpdateToOneWithWhereWithoutPostInput = {
  data: AddressUpdateWithoutPostInput;
  where?: InputMaybe<AddressWhereInput>;
};

export type AddressUpdateToOneWithWhereWithoutUsersInput = {
  data: AddressUpdateWithoutUsersInput;
  where?: InputMaybe<AddressWhereInput>;
};

export type AddressUpdateWithoutPostInput = {
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
  Post?: InputMaybe<PostUpdateManyWithoutAddressNestedInput>;
  c1?: InputMaybe<StringFieldUpdateOperationsInput>;
  c2?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  c3?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  c4?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  code?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type AddressWhereInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  Post?: InputMaybe<PostListRelationFilter>;
  c1?: InputMaybe<StringFilter>;
  c2?: InputMaybe<StringNullableFilter>;
  c3?: InputMaybe<StringNullableFilter>;
  c4?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserAddressListRelationFilter>;
};

export type AddressWhereUniqueInput = {
  AND?: InputMaybe<Array<AddressWhereInput>>;
  NOT?: InputMaybe<Array<AddressWhereInput>>;
  OR?: InputMaybe<Array<AddressWhereInput>>;
  Post?: InputMaybe<PostListRelationFilter>;
  c1?: InputMaybe<StringFilter>;
  c2?: InputMaybe<StringNullableFilter>;
  c3?: InputMaybe<StringNullableFilter>;
  c4?: InputMaybe<StringNullableFilter>;
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  users?: InputMaybe<UserAddressListRelationFilter>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAddress = {
  __typename?: 'AggregateAddress';
  _avg?: Maybe<AddressAvgAggregate>;
  _count?: Maybe<AddressCountAggregate>;
  _max?: Maybe<AddressMaxAggregate>;
  _min?: Maybe<AddressMinAggregate>;
  _sum?: Maybe<AddressSumAggregate>;
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

export type File = {
  __typename?: 'File';
  UserFile: Array<UserFile>;
  _count?: Maybe<FileCount>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
  location: Scalars['String']['output'];
  posts: Array<PostFile>;
  type: FileStorageType;
  updatedAt: Scalars['DateTimeISO']['output'];
};


export type FileUserFileArgs = {
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
  UserFile: Scalars['Int']['output'];
  posts: Scalars['Int']['output'];
};


export type FileCountUserFileArgs = {
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
  UserFile?: InputMaybe<UserFileCreateNestedManyWithoutFileInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export type FileCreateNestedOneWithoutPostsInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<FileCreateWithoutPostsInput>;
};

export type FileCreateNestedOneWithoutUserFileInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutUserFileInput>;
  create?: InputMaybe<FileCreateWithoutUserFileInput>;
};

export type FileCreateOrConnectWithoutPostsInput = {
  create: FileCreateWithoutPostsInput;
  where: FileWhereUniqueInput;
};

export type FileCreateOrConnectWithoutUserFileInput = {
  create: FileCreateWithoutUserFileInput;
  where: FileWhereUniqueInput;
};

export type FileCreateWithoutPostsInput = {
  UserFile?: InputMaybe<UserFileCreateNestedManyWithoutFileInput>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  location: Scalars['String']['input'];
  type?: InputMaybe<FileStorageType>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type FileCreateWithoutUserFileInput = {
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  location: Scalars['String']['input'];
  posts?: InputMaybe<PostFileCreateNestedManyWithoutFileInput>;
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
  UserFile?: InputMaybe<UserFileOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
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
  UserFile?: InputMaybe<UserFileUpdateManyWithoutFileNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type FileUpdateOneRequiredWithoutPostsNestedInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutPostsInput>;
  create?: InputMaybe<FileCreateWithoutPostsInput>;
  update?: InputMaybe<FileUpdateToOneWithWhereWithoutPostsInput>;
  upsert?: InputMaybe<FileUpsertWithoutPostsInput>;
};

export type FileUpdateOneRequiredWithoutUserFileNestedInput = {
  connect?: InputMaybe<FileWhereUniqueInput>;
  connectOrCreate?: InputMaybe<FileCreateOrConnectWithoutUserFileInput>;
  create?: InputMaybe<FileCreateWithoutUserFileInput>;
  update?: InputMaybe<FileUpdateToOneWithWhereWithoutUserFileInput>;
  upsert?: InputMaybe<FileUpsertWithoutUserFileInput>;
};

export type FileUpdateToOneWithWhereWithoutPostsInput = {
  data: FileUpdateWithoutPostsInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileUpdateToOneWithWhereWithoutUserFileInput = {
  data: FileUpdateWithoutUserFileInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileUpdateWithoutPostsInput = {
  UserFile?: InputMaybe<UserFileUpdateManyWithoutFileNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  type?: InputMaybe<EnumFileStorageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpdateWithoutUserFileInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  posts?: InputMaybe<PostFileUpdateManyWithoutFileNestedInput>;
  type?: InputMaybe<EnumFileStorageTypeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type FileUpsertWithoutPostsInput = {
  create: FileCreateWithoutPostsInput;
  update: FileUpdateWithoutPostsInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileUpsertWithoutUserFileInput = {
  create: FileCreateWithoutUserFileInput;
  update: FileUpdateWithoutUserFileInput;
  where?: InputMaybe<FileWhereInput>;
};

export type FileWhereInput = {
  AND?: InputMaybe<Array<FileWhereInput>>;
  NOT?: InputMaybe<Array<FileWhereInput>>;
  OR?: InputMaybe<Array<FileWhereInput>>;
  UserFile?: InputMaybe<UserFileListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
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
  UserFile?: InputMaybe<UserFileListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  location?: InputMaybe<StringFilter>;
  posts?: InputMaybe<PostFileListRelationFilter>;
  type?: InputMaybe<EnumFileStorageTypeFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
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
  createManyFile: AffectedRowsOutput;
  createManyPost: AffectedRowsOutput;
  createManyPostFile: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserAddress: AffectedRowsOutput;
  createManyUserFile: AffectedRowsOutput;
  createOneFile: File;
  createOnePost: Post;
  createOnePostFile: PostFile;
  createOneUser: User;
  createOneUserAddress: UserAddress;
  createOneUserFile: UserFile;
  deleteManyAddress: AffectedRowsOutput;
  deleteManyFile: AffectedRowsOutput;
  deleteManyPost: AffectedRowsOutput;
  deleteManyPostFile: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserAddress: AffectedRowsOutput;
  deleteManyUserFile: AffectedRowsOutput;
  deleteOneAddress?: Maybe<Address>;
  deleteOneFile?: Maybe<File>;
  deleteOnePost?: Maybe<Post>;
  deleteOnePostFile?: Maybe<PostFile>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserAddress?: Maybe<UserAddress>;
  deleteOneUserFile?: Maybe<UserFile>;
  updateManyAddress: AffectedRowsOutput;
  updateManyFile: AffectedRowsOutput;
  updateManyPost: AffectedRowsOutput;
  updateManyPostFile: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserAddress: AffectedRowsOutput;
  updateManyUserFile: AffectedRowsOutput;
  updateOneAddress?: Maybe<Address>;
  updateOneFile?: Maybe<File>;
  updateOnePost?: Maybe<Post>;
  updateOnePostFile?: Maybe<PostFile>;
  updateOneUser?: Maybe<User>;
  updateOneUserAddress?: Maybe<UserAddress>;
  updateOneUserFile?: Maybe<UserFile>;
  upsertOneFile: File;
  upsertOnePost: Post;
  upsertOnePostFile: PostFile;
  upsertOneUser: User;
  upsertOneUserAddress: UserAddress;
  upsertOneUserFile: UserFile;
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


export type MutationDeleteManyAddressArgs = {
  where?: InputMaybe<AddressWhereInput>;
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


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserAddressArgs = {
  where?: InputMaybe<UserAddressWhereInput>;
};


export type MutationDeleteManyUserFileArgs = {
  where?: InputMaybe<UserFileWhereInput>;
};


export type MutationDeleteOneAddressArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AddressWhereUniqueInput;
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


export type MutationUpdateManyAddressArgs = {
  data: AddressUpdateManyMutationInput;
  where?: InputMaybe<AddressWhereInput>;
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


export type MutationUpdateOneAddressArgs = {
  data: AddressUpdateInput;
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AddressWhereUniqueInput;
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
  content: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  files: Array<PostFile>;
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
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
};

export type PostAvgOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PostCount = {
  __typename?: 'PostCount';
  files: Scalars['Int']['output'];
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
};

export type PostCountOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostCreateInput = {
  address: AddressCreateNestedOneWithoutPostInput;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<PostFileCreateNestedManyWithoutPostInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PostCreateManyAddressInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
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

export type PostCreateOrConnectWithoutFilesInput = {
  create: PostCreateWithoutFilesInput;
  where: PostWhereUniqueInput;
};

export type PostCreateWithoutAddressInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<PostFileCreateNestedManyWithoutPostInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PostCreateWithoutFilesInput = {
  address: AddressCreateNestedOneWithoutPostInput;
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
};

export type PostFile = {
  __typename?: 'PostFile';
  createdAt: Scalars['DateTimeISO']['output'];
  file: File;
  fileId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
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
};

export type PostMaxOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PostMinAggregate = {
  __typename?: 'PostMinAggregate';
  addressId?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
};

export type PostMinOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
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
};

export type PostOrderByWithRelationInput = {
  address?: InputMaybe<AddressOrderByWithRelationInput>;
  addressId?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  files?: InputMaybe<PostFileOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
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
  UpdatedAt = 'updatedAt'
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
};

export type PostSumAggregate = {
  __typename?: 'PostSumAggregate';
  addressId?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
};

export type PostSumOrderByAggregateInput = {
  addressId?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PostUpdateInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutPostNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<PostFileUpdateManyWithoutPostNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
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

export type PostUpdateOneRequiredWithoutFilesNestedInput = {
  connect?: InputMaybe<PostWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PostCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<PostCreateWithoutFilesInput>;
  update?: InputMaybe<PostUpdateToOneWithWhereWithoutFilesInput>;
  upsert?: InputMaybe<PostUpsertWithoutFilesInput>;
};

export type PostUpdateToOneWithWhereWithoutFilesInput = {
  data: PostUpdateWithoutFilesInput;
  where?: InputMaybe<PostWhereInput>;
};

export type PostUpdateWithWhereUniqueWithoutAddressInput = {
  data: PostUpdateWithoutAddressInput;
  where: PostWhereUniqueInput;
};

export type PostUpdateWithoutAddressInput = {
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<PostFileUpdateManyWithoutPostNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpdateWithoutFilesInput = {
  address?: InputMaybe<AddressUpdateOneRequiredWithoutPostNestedInput>;
  content?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PostUpsertWithWhereUniqueWithoutAddressInput = {
  create: PostCreateWithoutAddressInput;
  update: PostUpdateWithoutAddressInput;
  where: PostWhereUniqueInput;
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
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<PostFileListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PostWhereUniqueInput = {
  AND?: InputMaybe<Array<PostWhereInput>>;
  NOT?: InputMaybe<Array<PostWhereInput>>;
  OR?: InputMaybe<Array<PostWhereInput>>;
  address?: InputMaybe<AddressRelationFilter>;
  addressId?: InputMaybe<IntFilter>;
  content?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<PostFileListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type Query = {
  __typename?: 'Query';
  address?: Maybe<Address>;
  addresses: Array<Address>;
  aggregateAddress: AggregateAddress;
  aggregateFile: AggregateFile;
  aggregatePost: AggregatePost;
  aggregatePostFile: AggregatePostFile;
  aggregateUser: AggregateUser;
  aggregateUserAddress: AggregateUserAddress;
  aggregateUserFile: AggregateUserFile;
  file?: Maybe<File>;
  files: Array<File>;
  findFirstAddress?: Maybe<Address>;
  findFirstAddressOrThrow?: Maybe<Address>;
  findFirstFile?: Maybe<File>;
  findFirstFileOrThrow?: Maybe<File>;
  findFirstPost?: Maybe<Post>;
  findFirstPostFile?: Maybe<PostFile>;
  findFirstPostFileOrThrow?: Maybe<PostFile>;
  findFirstPostOrThrow?: Maybe<Post>;
  findFirstUser?: Maybe<User>;
  findFirstUserAddress?: Maybe<UserAddress>;
  findFirstUserAddressOrThrow?: Maybe<UserAddress>;
  findFirstUserFile?: Maybe<UserFile>;
  findFirstUserFileOrThrow?: Maybe<UserFile>;
  findFirstUserOrThrow?: Maybe<User>;
  getAddress?: Maybe<Address>;
  getFile?: Maybe<File>;
  getPost?: Maybe<Post>;
  getPostFile?: Maybe<PostFile>;
  getUser?: Maybe<User>;
  getUserAddress?: Maybe<UserAddress>;
  getUserFile?: Maybe<UserFile>;
  groupByAddress: Array<AddressGroupBy>;
  groupByFile: Array<FileGroupBy>;
  groupByPost: Array<PostGroupBy>;
  groupByPostFile: Array<PostFileGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserAddress: Array<UserAddressGroupBy>;
  groupByUserFile: Array<UserFileGroupBy>;
  post?: Maybe<Post>;
  postFile?: Maybe<PostFile>;
  postFiles: Array<PostFile>;
  posts: Array<Post>;
  user?: Maybe<User>;
  userAddress?: Maybe<UserAddress>;
  userAddresses: Array<UserAddress>;
  userFile?: Maybe<UserFile>;
  userFiles: Array<UserFile>;
  users: Array<User>;
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


export type QueryAggregateAddressArgs = {
  cursor?: InputMaybe<AddressWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
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


export type QueryGetAddressArgs = {
  relationLoadStrategy?: InputMaybe<RelationLoadStrategy>;
  where: AddressWhereUniqueInput;
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


export type QueryGroupByAddressArgs = {
  by: Array<AddressScalarFieldEnum>;
  having?: InputMaybe<AddressScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AddressOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AddressWhereInput>;
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

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export enum RelationLoadStrategy {
  Join = 'join',
  Query = 'query'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
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

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  addresses: Array<UserAddress>;
  babyBirth?: Maybe<Scalars['DateTimeISO']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  files: Array<UserFile>;
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  username: Scalars['String']['output'];
};


export type UserAddressesArgs = {
  cursor?: InputMaybe<UserAddressWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserAddressScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserAddressOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserAddressWhereInput>;
};


export type UserFilesArgs = {
  cursor?: InputMaybe<UserFileWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserFileScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserFileOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserFileWhereInput>;
};

export type UserAddress = {
  __typename?: 'UserAddress';
  address: Address;
  addressId: Scalars['Int']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['Int']['output'];
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
  addresses: Scalars['Int']['output'];
  files: Scalars['Int']['output'];
};


export type UserCountAddressesArgs = {
  where?: InputMaybe<UserAddressWhereInput>;
};


export type UserCountFilesArgs = {
  where?: InputMaybe<UserFileWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  babyBirth: Scalars['Int']['output'];
  content: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  babyBirth?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  addresses?: InputMaybe<UserAddressCreateNestedManyWithoutUserInput>;
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<UserFileCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateManyInput = {
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateNestedOneWithoutAddressesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAddressesInput>;
  create?: InputMaybe<UserCreateWithoutAddressesInput>;
};

export type UserCreateNestedOneWithoutFilesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
};

export type UserCreateOrConnectWithoutAddressesInput = {
  create: UserCreateWithoutAddressesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAddressesInput = {
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  files?: InputMaybe<UserFileCreateNestedManyWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
};

export type UserCreateWithoutFilesInput = {
  addresses?: InputMaybe<UserAddressCreateNestedManyWithoutUserInput>;
  babyBirth?: InputMaybe<Scalars['DateTimeISO']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTimeISO']['input']>;
  username: Scalars['String']['input'];
};

export type UserFile = {
  __typename?: 'UserFile';
  createdAt: Scalars['DateTimeISO']['output'];
  file: File;
  fileId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
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
  file: FileCreateNestedOneWithoutUserFileInput;
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
  file: FileCreateNestedOneWithoutUserFileInput;
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
  file?: InputMaybe<FileUpdateOneRequiredWithoutUserFileNestedInput>;
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
  file?: InputMaybe<FileUpdateOneRequiredWithoutUserFileNestedInput>;
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
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
  username: Scalars['String']['output'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  babyBirth?: Maybe<Scalars['DateTimeISO']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  babyBirth?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  babyBirth?: Maybe<Scalars['DateTimeISO']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMinOrderByAggregateInput = {
  babyBirth?: InputMaybe<SortOrder>;
  content?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
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
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  addresses?: InputMaybe<UserAddressOrderByRelationAggregateInput>;
  babyBirth?: InputMaybe<SortOrderInput>;
  content?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  files?: InputMaybe<UserFileOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  BabyBirth = 'babyBirth',
  Content = 'content',
  CreatedAt = 'createdAt',
  Id = 'id',
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
  id?: InputMaybe<IntWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']['output']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  addresses?: InputMaybe<UserAddressUpdateManyWithoutUserNestedInput>;
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<UserFileUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAddressesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAddressesInput>;
  create?: InputMaybe<UserCreateWithoutAddressesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAddressesInput>;
  upsert?: InputMaybe<UserUpsertWithoutAddressesInput>;
};

export type UserUpdateOneRequiredWithoutFilesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutFilesInput>;
  create?: InputMaybe<UserCreateWithoutFilesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutFilesInput>;
  upsert?: InputMaybe<UserUpsertWithoutFilesInput>;
};

export type UserUpdateToOneWithWhereWithoutAddressesInput = {
  data: UserUpdateWithoutAddressesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutFilesInput = {
  data: UserUpdateWithoutFilesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAddressesInput = {
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  files?: InputMaybe<UserFileUpdateManyWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutFilesInput = {
  addresses?: InputMaybe<UserAddressUpdateManyWithoutUserNestedInput>;
  babyBirth?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  content?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAddressesInput = {
  create: UserCreateWithoutAddressesInput;
  update: UserUpdateWithoutAddressesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutFilesInput = {
  create: UserCreateWithoutFilesInput;
  update: UserUpdateWithoutFilesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  addresses?: InputMaybe<UserAddressListRelationFilter>;
  babyBirth?: InputMaybe<DateTimeNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<UserFileListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  addresses?: InputMaybe<UserAddressListRelationFilter>;
  babyBirth?: InputMaybe<DateTimeNullableFilter>;
  content?: InputMaybe<StringNullableFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  files?: InputMaybe<UserFileListRelationFilter>;
  id?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePostMutationVariables = Exact<{
  data: PostCreateInput;
  strategy?: InputMaybe<RelationLoadStrategy>;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createOnePost: { __typename?: 'Post', id: number, content: string, address: { __typename?: 'Address', c3?: string | null }, files: Array<{ __typename?: 'PostFile', file: { __typename?: 'File', location: string } }> } };

export type CreateUserMutationVariables = Exact<{
  data: UserCreateInput;
  strategy?: InputMaybe<RelationLoadStrategy>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createOneUser: { __typename?: 'User', id: number, username: string, babyBirth?: any | null, content?: string | null, addresses: Array<{ __typename?: 'UserAddress', address: { __typename?: 'Address', c3?: string | null } }>, files: Array<{ __typename?: 'UserFile', file: { __typename?: 'File', location: string } }> } };

export type GetAllAddressQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAddressQuery = { __typename?: 'Query', addresses: Array<{ __typename?: 'Address', id: number, code: string, c1: string, c2?: string | null, c3?: string | null, c4?: string | null }> };


export const CreatePostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createPost"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"PostCreateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"strategy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationLoadStrategy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOnePost"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"relationLoadStrategy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"strategy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"c3"}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreatePostMutation, CreatePostMutationVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserCreateInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"strategy"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"RelationLoadStrategy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createOneUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"relationLoadStrategy"},"value":{"kind":"Variable","name":{"kind":"Name","value":"strategy"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"babyBirth"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"address"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"c3"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"files"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export const GetAllAddressDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllAddress"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addresses"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"c1"}},{"kind":"Field","name":{"kind":"Name","value":"c2"}},{"kind":"Field","name":{"kind":"Name","value":"c3"}},{"kind":"Field","name":{"kind":"Name","value":"c4"}}]}}]}}]} as unknown as DocumentNode<GetAllAddressQuery, GetAllAddressQueryVariables>;