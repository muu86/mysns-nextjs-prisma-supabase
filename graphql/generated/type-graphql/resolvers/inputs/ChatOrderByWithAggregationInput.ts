import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatAvgOrderByAggregateInput } from '../inputs/ChatAvgOrderByAggregateInput';
import { ChatCountOrderByAggregateInput } from '../inputs/ChatCountOrderByAggregateInput';
import { ChatMaxOrderByAggregateInput } from '../inputs/ChatMaxOrderByAggregateInput';
import { ChatMinOrderByAggregateInput } from '../inputs/ChatMinOrderByAggregateInput';
import { ChatSumOrderByAggregateInput } from '../inputs/ChatSumOrderByAggregateInput';
import { SortOrderInput } from '../inputs/SortOrderInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('ChatOrderByWithAggregationInput', {})
export class ChatOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => ChatCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ChatCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ChatAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: ChatAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ChatMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ChatMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ChatMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ChatMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ChatSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: ChatSumOrderByAggregateInput | undefined;
}
