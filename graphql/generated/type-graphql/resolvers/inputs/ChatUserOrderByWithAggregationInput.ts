import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserAvgOrderByAggregateInput } from '../inputs/ChatUserAvgOrderByAggregateInput';
import { ChatUserCountOrderByAggregateInput } from '../inputs/ChatUserCountOrderByAggregateInput';
import { ChatUserMaxOrderByAggregateInput } from '../inputs/ChatUserMaxOrderByAggregateInput';
import { ChatUserMinOrderByAggregateInput } from '../inputs/ChatUserMinOrderByAggregateInput';
import { ChatUserSumOrderByAggregateInput } from '../inputs/ChatUserSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('ChatUserOrderByWithAggregationInput', {})
export class ChatUserOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  chatId?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => ChatUserCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ChatUserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUserAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: ChatUserAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUserMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ChatUserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUserMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ChatUserMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUserSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: ChatUserSumOrderByAggregateInput | undefined;
}
