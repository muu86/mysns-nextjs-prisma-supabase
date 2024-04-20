import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressCreateNestedOneWithoutUsersInput } from '../inputs/AddressCreateNestedOneWithoutUsersInput';
import { UserCreateNestedOneWithoutAddressesInput } from '../inputs/UserCreateNestedOneWithoutAddressesInput';

@TypeGraphQL.InputType('UserAddressCreateInput', {})
export class UserAddressCreateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => AddressCreateNestedOneWithoutUsersInput, {
    nullable: false,
  })
  address!: AddressCreateNestedOneWithoutUsersInput;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutAddressesInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutAddressesInput;
}
