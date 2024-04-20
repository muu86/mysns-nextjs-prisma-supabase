import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressCreateNestedOneWithoutUsersInput } from '../inputs/AddressCreateNestedOneWithoutUsersInput';

@TypeGraphQL.InputType('UserAddressCreateWithoutUserInput', {})
export class UserAddressCreateWithoutUserInput {
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
}
