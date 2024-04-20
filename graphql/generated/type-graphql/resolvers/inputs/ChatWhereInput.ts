import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageListRelationFilter } from '../inputs/ChatMessageListRelationFilter';
import { ChatUserListRelationFilter } from '../inputs/ChatUserListRelationFilter';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { StringNullableFilter } from '../inputs/StringNullableFilter';

@TypeGraphQL.InputType('ChatWhereInput', {})
export class ChatWhereInput {
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

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

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
