import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter';
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter';
import { StringNullableWithAggregatesFilter } from '../inputs/StringNullableWithAggregatesFilter';

@TypeGraphQL.InputType('ChatScalarWhereWithAggregatesInput', {})
export class ChatScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [ChatScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ChatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ChatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ChatScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
