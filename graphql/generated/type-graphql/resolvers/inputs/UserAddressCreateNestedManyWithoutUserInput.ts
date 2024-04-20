import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressCreateManyUserInputEnvelope } from '../inputs/UserAddressCreateManyUserInputEnvelope';
import { UserAddressCreateOrConnectWithoutUserInput } from '../inputs/UserAddressCreateOrConnectWithoutUserInput';
import { UserAddressCreateWithoutUserInput } from '../inputs/UserAddressCreateWithoutUserInput';
import { UserAddressWhereUniqueInput } from '../inputs/UserAddressWhereUniqueInput';

@TypeGraphQL.InputType('UserAddressCreateNestedManyWithoutUserInput', {})
export class UserAddressCreateNestedManyWithoutUserInput {
  @TypeGraphQL.Field((_type) => [UserAddressCreateWithoutUserInput], {
    nullable: true,
  })
  create?: UserAddressCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => UserAddressCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: UserAddressCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressWhereUniqueInput], {
    nullable: true,
  })
  connect?: UserAddressWhereUniqueInput[] | undefined;
}
