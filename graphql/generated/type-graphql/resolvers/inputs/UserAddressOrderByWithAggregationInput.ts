import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressAvgOrderByAggregateInput } from '../inputs/UserAddressAvgOrderByAggregateInput';
import { UserAddressCountOrderByAggregateInput } from '../inputs/UserAddressCountOrderByAggregateInput';
import { UserAddressMaxOrderByAggregateInput } from '../inputs/UserAddressMaxOrderByAggregateInput';
import { UserAddressMinOrderByAggregateInput } from '../inputs/UserAddressMinOrderByAggregateInput';
import { UserAddressSumOrderByAggregateInput } from '../inputs/UserAddressSumOrderByAggregateInput';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('UserAddressOrderByWithAggregationInput', {})
export class UserAddressOrderByWithAggregationInput {
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
  addressId?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  createdAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => SortOrder, {
    nullable: true,
  })
  updatedAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field((_type) => UserAddressCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: UserAddressCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => UserAddressAvgOrderByAggregateInput, {
    nullable: true,
  })
  _avg?: UserAddressAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => UserAddressMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: UserAddressMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => UserAddressMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: UserAddressMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field((_type) => UserAddressSumOrderByAggregateInput, {
    nullable: true,
  })
  _sum?: UserAddressSumOrderByAggregateInput | undefined;
}
