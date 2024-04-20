import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressOrderByWithRelationInput } from '../inputs/AddressOrderByWithRelationInput';
import { CommentOrderByRelationAggregateInput } from '../inputs/CommentOrderByRelationAggregateInput';
import { PostFileOrderByRelationAggregateInput } from '../inputs/PostFileOrderByRelationAggregateInput';
import { UserOrderByWithRelationInput } from '../inputs/UserOrderByWithRelationInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('PostOrderByWithRelationInput', {})
export class PostOrderByWithRelationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  content?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  addressId?: 'asc' | 'desc' | undefined;

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
  userId?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => CommentOrderByRelationAggregateInput, {
    nullable: true,
  })
  comments?: CommentOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => PostFileOrderByRelationAggregateInput, {
    nullable: true,
  })
  files?: PostFileOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => AddressOrderByWithRelationInput, {
    nullable: true,
  })
  address?: AddressOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field((_type) => UserOrderByWithRelationInput, {
    nullable: true,
  })
  user?: UserOrderByWithRelationInput | undefined;
}
