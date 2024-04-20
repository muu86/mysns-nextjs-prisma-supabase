import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressUpdateWithoutUserInput } from '../inputs/UserAddressUpdateWithoutUserInput';
import { UserAddressWhereUniqueInput } from '../inputs/UserAddressWhereUniqueInput';

@TypeGraphQL.InputType('UserAddressUpdateWithWhereUniqueWithoutUserInput', {})
export class UserAddressUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => UserAddressWhereUniqueInput, {
    nullable: false,
  })
  where!: UserAddressWhereUniqueInput;

  @TypeGraphQL.Field((_type) => UserAddressUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: UserAddressUpdateWithoutUserInput;
}
