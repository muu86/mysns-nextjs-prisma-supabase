import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileAvgOrderByAggregateInput } from '../inputs/PostFileAvgOrderByAggregateInput';
import { PostFileCountOrderByAggregateInput } from '../inputs/PostFileCountOrderByAggregateInput';
import { PostFileMaxOrderByAggregateInput } from '../inputs/PostFileMaxOrderByAggregateInput';
import { PostFileMinOrderByAggregateInput } from '../inputs/PostFileMinOrderByAggregateInput';
import { PostFileSumOrderByAggregateInput } from '../inputs/PostFileSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('PostFileOrderByWithAggregationInput', {})
export class PostFileOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  postId?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  fileId?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => PostFileCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: PostFileCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => PostFileAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: PostFileAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => PostFileMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: PostFileMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => PostFileMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: PostFileMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => PostFileSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: PostFileSumOrderByAggregateInput | undefined;
}
