import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter';
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter';
import { StringWithAggregatesFilter } from '../inputs/StringWithAggregatesFilter';

@TypeGraphQL.InputType('SessionScalarWhereWithAggregatesInput', {})
export class SessionScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [SessionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: SessionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SessionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: SessionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [SessionScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: SessionScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  sessionToken?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  expires?: DateTimeWithAggregatesFilter | undefined;

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
  userId?: IntWithAggregatesFilter | undefined;
}
