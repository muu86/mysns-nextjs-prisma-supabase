import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileCreateManyFileInputEnvelope } from '../inputs/PostFileCreateManyFileInputEnvelope';
import { PostFileCreateOrConnectWithoutFileInput } from '../inputs/PostFileCreateOrConnectWithoutFileInput';
import { PostFileCreateWithoutFileInput } from '../inputs/PostFileCreateWithoutFileInput';
import { PostFileScalarWhereInput } from '../inputs/PostFileScalarWhereInput';
import { PostFileUpdateManyWithWhereWithoutFileInput } from '../inputs/PostFileUpdateManyWithWhereWithoutFileInput';
import { PostFileUpdateWithWhereUniqueWithoutFileInput } from '../inputs/PostFileUpdateWithWhereUniqueWithoutFileInput';
import { PostFileUpsertWithWhereUniqueWithoutFileInput } from '../inputs/PostFileUpsertWithWhereUniqueWithoutFileInput';
import { PostFileWhereUniqueInput } from '../inputs/PostFileWhereUniqueInput';

@TypeGraphQL.InputType('PostFileUpdateManyWithoutFileNestedInput', {})
export class PostFileUpdateManyWithoutFileNestedInput {
  @TypeGraphQL.Field((_type) => [PostFileCreateWithoutFileInput], {
    nullable: true,
  })
  create?: PostFileCreateWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileCreateOrConnectWithoutFileInput], {
    nullable: true,
  })
  connectOrCreate?: PostFileCreateOrConnectWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileUpsertWithWhereUniqueWithoutFileInput], {
    nullable: true,
  })
  upsert?: PostFileUpsertWithWhereUniqueWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => PostFileCreateManyFileInputEnvelope, {
    nullable: true,
  })
  createMany?: PostFileCreateManyFileInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [PostFileWhereUniqueInput], {
    nullable: true,
  })
  set?: PostFileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: PostFileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileWhereUniqueInput], {
    nullable: true,
  })
  delete?: PostFileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileWhereUniqueInput], {
    nullable: true,
  })
  connect?: PostFileWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileUpdateWithWhereUniqueWithoutFileInput], {
    nullable: true,
  })
  update?: PostFileUpdateWithWhereUniqueWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileUpdateManyWithWhereWithoutFileInput], {
    nullable: true,
  })
  updateMany?: PostFileUpdateManyWithWhereWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PostFileScalarWhereInput[] | undefined;
}
