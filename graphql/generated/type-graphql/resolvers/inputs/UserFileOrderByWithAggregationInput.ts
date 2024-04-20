import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileAvgOrderByAggregateInput } from '../inputs/UserFileAvgOrderByAggregateInput';
import { UserFileCountOrderByAggregateInput } from '../inputs/UserFileCountOrderByAggregateInput';
import { UserFileMaxOrderByAggregateInput } from '../inputs/UserFileMaxOrderByAggregateInput';
import { UserFileMinOrderByAggregateInput } from '../inputs/UserFileMinOrderByAggregateInput';
import { UserFileSumOrderByAggregateInput } from '../inputs/UserFileSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('UserFileOrderByWithAggregationInput', {})
export class UserFileOrderByWithAggregationInput {
  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  userId?: 'asc' | 'desc' | undefined;

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

  @TypeGraphQL.Field((_type) => UserFileCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: UserFileCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => UserFileAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: UserFileAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => UserFileMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: UserFileMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => UserFileMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: UserFileMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => UserFileSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: UserFileSumOrderByAggregateInput | undefined;
}
