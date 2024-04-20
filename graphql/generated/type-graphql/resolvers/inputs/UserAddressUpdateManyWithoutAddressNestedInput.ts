import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressCreateManyAddressInputEnvelope } from '../inputs/UserAddressCreateManyAddressInputEnvelope';
import { UserAddressCreateOrConnectWithoutAddressInput } from '../inputs/UserAddressCreateOrConnectWithoutAddressInput';
import { UserAddressCreateWithoutAddressInput } from '../inputs/UserAddressCreateWithoutAddressInput';
import { UserAddressScalarWhereInput } from '../inputs/UserAddressScalarWhereInput';
import { UserAddressUpdateManyWithWhereWithoutAddressInput } from '../inputs/UserAddressUpdateManyWithWhereWithoutAddressInput';
import { UserAddressUpdateWithWhereUniqueWithoutAddressInput } from '../inputs/UserAddressUpdateWithWhereUniqueWithoutAddressInput';
import { UserAddressUpsertWithWhereUniqueWithoutAddressInput } from '../inputs/UserAddressUpsertWithWhereUniqueWithoutAddressInput';
import { UserAddressWhereUniqueInput } from '../inputs/UserAddressWhereUniqueInput';

@TypeGraphQL.InputType('UserAddressUpdateManyWithoutAddressNestedInput', {})
export class UserAddressUpdateManyWithoutAddressNestedInput {
  @TypeGraphQL.Field((_type) => [UserAddressCreateWithoutAddressInput], {
    nullable: true,
  })
  create?: UserAddressCreateWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressCreateOrConnectWithoutAddressInput], {
    nullable: true,
  })
  connectOrCreate?: UserAddressCreateOrConnectWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressUpsertWithWhereUniqueWithoutAddressInput], {
    nullable: true,
  })
  upsert?: UserAddressUpsertWithWhereUniqueWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field((_type) => UserAddressCreateManyAddressInputEnvelope, {
    nullable: true,
  })
  createMany?: UserAddressCreateManyAddressInputEnvelope | undefined;

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

  @TypeGraphQL.Field((_type) => [UserAddressUpdateWithWhereUniqueWithoutAddressInput], {
    nullable: true,
  })
  update?: UserAddressUpdateWithWhereUniqueWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressUpdateManyWithWhereWithoutAddressInput], {
    nullable: true,
  })
  updateMany?: UserAddressUpdateManyWithWhereWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserAddressScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: UserAddressScalarWhereInput[] | undefined;
}
