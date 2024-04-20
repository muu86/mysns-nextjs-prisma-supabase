import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserUpdateWithoutAddressesInput } from '../inputs/UserUpdateWithoutAddressesInput';
import { UserWhereInput } from '../inputs/UserWhereInput';

@TypeGraphQL.InputType('UserUpdateToOneWithWhereWithoutAddressesInput', {})
export class UserUpdateToOneWithWhereWithoutAddressesInput {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutAddressesInput, {
    nullable: false,
  })
  data!: UserUpdateWithoutAddressesInput;
}
