import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter';
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter';

@TypeGraphQL.InputType('UserAddressScalarWhereWithAggregatesInput', {})
export class UserAddressScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [UserAddressScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: UserAddressScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: UserAddressScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: UserAddressScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  addressId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
