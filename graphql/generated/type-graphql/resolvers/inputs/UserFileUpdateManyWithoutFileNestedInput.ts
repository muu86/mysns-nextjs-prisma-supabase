import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileCreateManyFileInputEnvelope } from '../inputs/UserFileCreateManyFileInputEnvelope';
import { UserFileCreateOrConnectWithoutFileInput } from '../inputs/UserFileCreateOrConnectWithoutFileInput';
import { UserFileCreateWithoutFileInput } from '../inputs/UserFileCreateWithoutFileInput';
import { UserFileScalarWhereInput } from '../inputs/UserFileScalarWhereInput';
import { UserFileUpdateManyWithWhereWithoutFileInput } from '../inputs/UserFileUpdateManyWithWhereWithoutFileInput';
import { UserFileUpdateWithWhereUniqueWithoutFileInput } from '../inputs/UserFileUpdateWithWhereUniqueWithoutFileInput';
import { UserFileUpsertWithWhereUniqueWithoutFileInput } from '../inputs/UserFileUpsertWithWhereUniqueWithoutFileInput';
import { UserFileWhereUniqueInput } from '../inputs/UserFileWhereUniqueInput';

@TypeGraphQL.InputType('UserFileUpdateManyWithoutFileNestedInput', {})
export class UserFileUpdateManyWithoutFileNestedInput {
  @TypeGraphQL.Field((_type) => [UserFileCreateWithoutFileInput], {
    nullable: true,
  })
  create?: UserFileCreateWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileCreateOrConnectWithoutFileInput], {
    nullable: true,
  })
  connectOrCreate?: UserFileCreateOrConnectWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileUpsertWithWhereUniqueWithoutFileInput], {
    nullable: true,
  })
  upsert?: UserFileUpsertWithWhereUniqueWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => UserFileCreateManyFileInputEnvelope, {
    nullable: true,
  })
  createMany?: UserFileCreateManyFileInputEnvelope | undefined;

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

  @TypeGraphQL.Field((_type) => [UserFileUpdateWithWhereUniqueWithoutFileInput], {
    nullable: true,
  })
  update?: UserFileUpdateWithWhereUniqueWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileUpdateManyWithWhereWithoutFileInput], {
    nullable: true,
  })
  updateMany?: UserFileUpdateManyWithWhereWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: UserFileScalarWhereInput[] | undefined;
}
