import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressCreateWithoutAddressInput } from '../inputs/UserAddressCreateWithoutAddressInput';
import { UserAddressUpdateWithoutAddressInput } from '../inputs/UserAddressUpdateWithoutAddressInput';
import { UserAddressWhereUniqueInput } from '../inputs/UserAddressWhereUniqueInput';

@TypeGraphQL.InputType('UserAddressUpsertWithWhereUniqueWithoutAddressInput', {})
export class UserAddressUpsertWithWhereUniqueWithoutAddressInput {
  @TypeGraphQL.Field((_type) => UserAddressWhereUniqueInput, {
    nullable: false,
  })
  where!: UserAddressWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserAddressUpdateWithoutAddressInput, {
    nullable: false,
  })
  update!: UserAddressUpdateWithoutAddressInput;

  @TypeGraphQL.Field((_type) => UserAddressCreateWithoutAddressInput, {
    nullable: false,
  })
  create!: UserAddressCreateWithoutAddressInput;
}
