import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileOrderByRelationAggregateInput } from '../inputs/PostFileOrderByRelationAggregateInput';
import { UserFileOrderByRelationAggregateInput } from '../inputs/UserFileOrderByRelationAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('FileOrderByWithRelationInput', {})
export class FileOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  location?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  type?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => PostFileOrderByRelationAggregateInput, {
    nullable: true,
  })
  posts?: PostFileOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => UserFileOrderByRelationAggregateInput, {
    nullable: true,
  })
  files?: UserFileOrderByRelationAggregateInput | undefined;
}
