import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressCreateWithoutUserInput } from '../inputs/UserAddressCreateWithoutUserInput';
import { UserAddressUpdateWithoutUserInput } from '../inputs/UserAddressUpdateWithoutUserInput';
import { UserAddressWhereUniqueInput } from '../inputs/UserAddressWhereUniqueInput';

@TypeGraphQL.InputType('UserAddressUpsertWithWhereUniqueWithoutUserInput', {})
export class UserAddressUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => UserAddressWhereUniqueInput, {
    nullable: false,
  })
  where!: UserAddressWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserAddressUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: UserAddressUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => UserAddressCreateWithoutUserInput, {
    nullable: false,
  })
  create!: UserAddressCreateWithoutUserInput;
}
