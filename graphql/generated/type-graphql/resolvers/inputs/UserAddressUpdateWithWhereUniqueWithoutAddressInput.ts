import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressUpdateWithoutAddressInput } from '../inputs/UserAddressUpdateWithoutAddressInput';
import { UserAddressWhereUniqueInput } from '../inputs/UserAddressWhereUniqueInput';

@TypeGraphQL.InputType('UserAddressUpdateWithWhereUniqueWithoutAddressInput', {})
export class UserAddressUpdateWithWhereUniqueWithoutAddressInput {
  @TypeGraphQL.Field((_type) => UserAddressWhereUniqueInput, {
    nullable: false,
  })
  where!: UserAddressWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserAddressUpdateWithoutAddressInput, {
    nullable: false,
  })
  data!: UserAddressUpdateWithoutAddressInput;
}
