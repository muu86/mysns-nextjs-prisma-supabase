import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutAddressesInput } from '../inputs/UserCreateWithoutAddressesInput';
import { UserUpdateWithoutAddressesInput } from '../inputs/UserUpdateWithoutAddressesInput';
import { UserWhereInput } from '../inputs/UserWhereInput';

@TypeGraphQL.InputType('UserUpsertWithoutAddressesInput', {})
export class UserUpsertWithoutAddressesInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutAddressesInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutAddressesInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutAddressesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutAddressesInput;

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;
}
