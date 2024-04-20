import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressCreateManyUserInputEnvelope } from '../inputs/UserAddressCreateManyUserInputEnvelope';
import { UserAddressCreateOrConnectWithoutUserInput } from '../inputs/UserAddressCreateOrConnectWithoutUserInput';
import { UserAddressCreateWithoutUserInput } from '../inputs/UserAddressCreateWithoutUserInput';
import { UserAddressScalarWhereInput } from '../inputs/UserAddressScalarWhereInput';
import { UserAddressUpdateManyWithWhereWithoutUserInput } from '../inputs/UserAddressUpdateManyWithWhereWithoutUserInput';
import { UserAddressUpdateWithWhereUniqueWithoutUserInput } from '../inputs/UserAddressUpdateWithWhereUniqueWithoutUserInput';
import { UserAddressUpsertWithWhereUniqueWithoutUserInput } from '../inputs/UserAddressUpsertWithWhereUniqueWithoutUserInput';
import { UserAddressWhereUniqueInput } from '../inputs/UserAddressWhereUniqueInput';

@TypeGraphQL.InputType('UserAddressUpdateManyWithoutUserNestedInput', {})
export class UserAddressUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field((_type) => [UserAddressCreateWithoutUserInput], {
    nullable: true,
  })
  create?: UserAddressCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: UserAddressCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: UserAddressUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => UserAddressCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: UserAddressCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressWhereUniqueInput], {
    nullable: true,
  })
  set?: UserAddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: UserAddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressWhereUniqueInput], {
    nullable: true,
  })
  delete?: UserAddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressWhereUniqueInput], {
    nullable: true,
  })
  connect?: UserAddressWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: UserAddressUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: UserAddressUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: UserAddressScalarWhereInput[] | undefined;
}
