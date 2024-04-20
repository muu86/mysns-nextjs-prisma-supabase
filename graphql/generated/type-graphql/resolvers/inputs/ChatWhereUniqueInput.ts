import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageListRelationFilter } from '../inputs/ChatMessageListRelationFilter';
import { ChatUserListRelationFilter } from '../inputs/ChatUserListRelationFilter';
import { ChatWhereInput } from '../inputs/ChatWhereInput';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { StringNullableFilter } from '../inputs/StringNullableFilter';

@TypeGraphQL.InputType('ChatWhereUniqueInput', {})
export class ChatWhereUniqueInput {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: true,
  })
  id?: number | undefined;

  @TypeGraphQL.Field((_type) => [ChatWhereInput], {
    nullable: true,
  })
  AND?: ChatWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatWhereInput], {
    nullable: true,
  })
  OR?: ChatWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatWhereInput], {
    nullable: true,
  })
  NOT?: ChatWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => ChatMessageListRelationFilter, {
    nullable: true,
  })
  messages?: ChatMessageListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => ChatUserListRelationFilter, {
    nullable: true,
  })
  users?: ChatUserListRelationFilter | undefined;
}
