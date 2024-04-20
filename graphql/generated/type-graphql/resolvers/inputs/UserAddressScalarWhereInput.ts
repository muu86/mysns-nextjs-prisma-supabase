import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';

@TypeGraphQL.InputType('UserAddressScalarWhereInput', {})
export class UserAddressScalarWhereInput {
  @TypeGraphQL.Field((_type) => [UserAddressScalarWhereInput], {
    nullable: true,
  })
  AND?: UserAddressScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressScalarWhereInput], {
    nullable: true,
  })
  OR?: UserAddressScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressScalarWhereInput], {
    nullable: true,
  })
  NOT?: UserAddressScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  addressId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;
}
