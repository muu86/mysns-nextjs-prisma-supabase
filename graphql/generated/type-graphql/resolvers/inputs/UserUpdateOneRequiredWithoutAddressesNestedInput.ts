import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutAddressesInput } from '../inputs/UserCreateOrConnectWithoutAddressesInput';
import { UserCreateWithoutAddressesInput } from '../inputs/UserCreateWithoutAddressesInput';
import { UserUpdateToOneWithWhereWithoutAddressesInput } from '../inputs/UserUpdateToOneWithWhereWithoutAddressesInput';
import { UserUpsertWithoutAddressesInput } from '../inputs/UserUpsertWithoutAddressesInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserUpdateOneRequiredWithoutAddressesNestedInput', {})
export class UserUpdateOneRequiredWithoutAddressesNestedInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutAddressesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutAddressesInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutAddressesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutAddressesInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutAddressesInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutAddressesInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateToOneWithWhereWithoutAddressesInput, {
    nullable: true,
  })
  update?: UserUpdateToOneWithWhereWithoutAddressesInput | undefined;
}
