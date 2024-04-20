import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter';
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter';

@TypeGraphQL.InputType('ChatUserScalarWhereWithAggregatesInput', {})
export class ChatUserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [ChatUserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ChatUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ChatUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ChatUserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

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
