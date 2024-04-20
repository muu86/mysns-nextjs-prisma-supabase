import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AccountOrderByRelationAggregateInput } from '../inputs/AccountOrderByRelationAggregateInput';
import { ChatMessageOrderByRelationAggregateInput } from '../inputs/ChatMessageOrderByRelationAggregateInput';
import { ChatUserOrderByRelationAggregateInput } from '../inputs/ChatUserOrderByRelationAggregateInput';
import { CommentOrderByRelationAggregateInput } from '../inputs/CommentOrderByRelationAggregateInput';
import { PostOrderByRelationAggregateInput } from '../inputs/PostOrderByRelationAggregateInput';
import { SessionOrderByRelationAggregateInput } from '../inputs/SessionOrderByRelationAggregateInput';
import { SortOrderInput } from '../inputs/SortOrderInput';
import { UserAddressOrderByRelationAggregateInput } from '../inputs/UserAddressOrderByRelationAggregateInput';
import { UserFileOrderByRelationAggregateInput } from '../inputs/UserFileOrderByRelationAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('UserOrderByWithRelationInput', {})
export class UserOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  content?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  babyBirth?: SortOrderInput | undefined;

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
  email?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  emailVerified?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  image?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  name?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrderInput, {
    nullable: true,
  })
  username?: SortOrderInput | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  role?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => AccountOrderByRelationAggregateInput, {
    nullable: true,
  })
  accounts?: AccountOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUserOrderByRelationAggregateInput, {
    nullable: true,
  })
  chats?: ChatUserOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => CommentOrderByRelationAggregateInput, {
    nullable: true,
  })
  comments?: CommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => PostOrderByRelationAggregateInput, {
    nullable: true,
  })
  posts?: PostOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => SessionOrderByRelationAggregateInput, {
    nullable: true,
  })
  sessions?: SessionOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => UserAddressOrderByRelationAggregateInput, {
    nullable: true,
  })
  addresses?: UserAddressOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => UserFileOrderByRelationAggregateInput, {
    nullable: true,
  })
  files?: UserFileOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => ChatMessageOrderByRelationAggregateInput, {
    nullable: true,
  })
  chatMessages?: ChatMessageOrderByRelationAggregateInput | undefined;
}
