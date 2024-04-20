import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageOrderByRelationAggregateInput } from '../inputs/ChatMessageOrderByRelationAggregateInput';
import { ChatUserOrderByRelationAggregateInput } from '../inputs/ChatUserOrderByRelationAggregateInput';
import { SortOrderInput } from '../inputs/SortOrderInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('ChatOrderByWithRelationInput', {})
export class ChatOrderByWithRelationInput {
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

  @TypeGraphQL.Field((_type) => ChatMessageOrderByRelationAggregateInput, {
    nullable: true,
  })
  messages?: ChatMessageOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUserOrderByRelationAggregateInput, {
    nullable: true,
  })
  users?: ChatUserOrderByRelationAggregateInput | undefined;
}
