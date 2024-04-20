import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutAddressesInput } from '../inputs/UserCreateOrConnectWithoutAddressesInput';
import { UserCreateWithoutAddressesInput } from '../inputs/UserCreateWithoutAddressesInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateNestedOneWithoutAddressesInput', {})
export class UserCreateNestedOneWithoutAddressesInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutAddressesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutAddressesInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutAddressesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutAddressesInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
