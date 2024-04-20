import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileCreateManyUserInputEnvelope } from '../inputs/UserFileCreateManyUserInputEnvelope';
import { UserFileCreateOrConnectWithoutUserInput } from '../inputs/UserFileCreateOrConnectWithoutUserInput';
import { UserFileCreateWithoutUserInput } from '../inputs/UserFileCreateWithoutUserInput';
import { UserFileScalarWhereInput } from '../inputs/UserFileScalarWhereInput';
import { UserFileUpdateManyWithWhereWithoutUserInput } from '../inputs/UserFileUpdateManyWithWhereWithoutUserInput';
import { UserFileUpdateWithWhereUniqueWithoutUserInput } from '../inputs/UserFileUpdateWithWhereUniqueWithoutUserInput';
import { UserFileUpsertWithWhereUniqueWithoutUserInput } from '../inputs/UserFileUpsertWithWhereUniqueWithoutUserInput';
import { UserFileWhereUniqueInput } from '../inputs/UserFileWhereUniqueInput';

@TypeGraphQL.InputType('UserFileUpdateManyWithoutUserNestedInput', {})
export class UserFileUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field((_type) => [UserFileCreateWithoutUserInput], {
    nullable: true,
  })
  create?: UserFileCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  connectOrCreate?: UserFileCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  upsert?: UserFileUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => UserFileCreateManyUserInputEnvelope, {
    nullable: true,
  })
  createMany?: UserFileCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [UserFileWhereUniqueInput], {
    nullable: true,
  })
  set?: UserFileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: UserFileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileWhereUniqueInput], {
    nullable: true,
  })
  delete?: UserFileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileWhereUniqueInput], {
    nullable: true,
  })
  connect?: UserFileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  update?: UserFileUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  updateMany?: UserFileUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: UserFileScalarWhereInput[] | undefined;
}
