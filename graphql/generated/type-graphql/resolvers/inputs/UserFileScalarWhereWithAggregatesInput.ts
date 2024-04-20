import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter';
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter';

@TypeGraphQL.InputType('UserFileScalarWhereWithAggregatesInput', {})
export class UserFileScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [UserFileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: UserFileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: UserFileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: UserFileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  fileId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
