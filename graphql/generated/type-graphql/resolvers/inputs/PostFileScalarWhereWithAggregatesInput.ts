import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter';
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter';

@TypeGraphQL.InputType('PostFileScalarWhereWithAggregatesInput', {})
export class PostFileScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [PostFileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: PostFileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: PostFileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: PostFileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  postId?: IntWithAggregatesFilter | undefined;

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
