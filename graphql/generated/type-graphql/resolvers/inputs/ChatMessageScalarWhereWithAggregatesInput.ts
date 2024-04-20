import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter';
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter';
import { StringWithAggregatesFilter } from '../inputs/StringWithAggregatesFilter';

@TypeGraphQL.InputType('ChatMessageScalarWhereWithAggregatesInput', {})
export class ChatMessageScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [ChatMessageScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ChatMessageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ChatMessageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ChatMessageScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  message?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  chatId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  userId?: IntWithAggregatesFilter | undefined;
}
