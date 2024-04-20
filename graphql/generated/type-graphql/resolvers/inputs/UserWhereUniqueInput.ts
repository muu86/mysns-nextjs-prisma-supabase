import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AccountListRelationFilter } from '../inputs/AccountListRelationFilter';
import { ChatMessageListRelationFilter } from '../inputs/ChatMessageListRelationFilter';
import { ChatUserListRelationFilter } from '../inputs/ChatUserListRelationFilter';
import { CommentListRelationFilter } from '../inputs/CommentListRelationFilter';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { DateTimeNullableFilter } from '../inputs/DateTimeNullableFilter';
import { EnumRoleFilter } from '../inputs/EnumRoleFilter';
import { PostListRelationFilter } from '../inputs/PostListRelationFilter';
import { SessionListRelationFilter } from '../inputs/SessionListRelationFilter';
import { StringNullableFilter } from '../inputs/StringNullableFilter';
import { UserAddressListRelationFilter } from '../inputs/UserAddressListRelationFilter';
import { UserFileListRelationFilter } from '../inputs/UserFileListRelationFilter';
import { UserWhereInput } from '../inputs/UserWhereInput';

@TypeGraphQL.InputType('UserWhereUniqueInput', {})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  email?: string | undefined;

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserWhereInput], {
    nullable: true,
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  content?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  babyBirth?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeNullableFilter, {
    nullable: true,
  })
  emailVerified?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  image?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  username?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumRoleFilter, {
    nullable: true,
  })
  role?: EnumRoleFilter | undefined;

  @TypeGraphQL.Field((_type) => AccountListRelationFilter, {
    nullable: true,
  })
  accounts?: AccountListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ChatUserListRelationFilter, {
    nullable: true,
  })
  chats?: ChatUserListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => PostListRelationFilter, {
    nullable: true,
  })
  posts?: PostListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => SessionListRelationFilter, {
    nullable: true,
  })
  sessions?: SessionListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => UserAddressListRelationFilter, {
    nullable: true,
  })
  addresses?: UserAddressListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => UserFileListRelationFilter, {
    nullable: true,
  })
  files?: UserFileListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ChatMessageListRelationFilter, {
    nullable: true,
  })
  chatMessages?: ChatMessageListRelationFilter | undefined;
}
