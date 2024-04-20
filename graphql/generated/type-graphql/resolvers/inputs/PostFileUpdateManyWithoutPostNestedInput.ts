import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileCreateManyPostInputEnvelope } from '../inputs/PostFileCreateManyPostInputEnvelope';
import { PostFileCreateOrConnectWithoutPostInput } from '../inputs/PostFileCreateOrConnectWithoutPostInput';
import { PostFileCreateWithoutPostInput } from '../inputs/PostFileCreateWithoutPostInput';
import { PostFileScalarWhereInput } from '../inputs/PostFileScalarWhereInput';
import { PostFileUpdateManyWithWhereWithoutPostInput } from '../inputs/PostFileUpdateManyWithWhereWithoutPostInput';
import { PostFileUpdateWithWhereUniqueWithoutPostInput } from '../inputs/PostFileUpdateWithWhereUniqueWithoutPostInput';
import { PostFileUpsertWithWhereUniqueWithoutPostInput } from '../inputs/PostFileUpsertWithWhereUniqueWithoutPostInput';
import { PostFileWhereUniqueInput } from '../inputs/PostFileWhereUniqueInput';

@TypeGraphQL.InputType('PostFileUpdateManyWithoutPostNestedInput', {})
export class PostFileUpdateManyWithoutPostNestedInput {
  @TypeGraphQL.Field((_type) => [PostFileCreateWithoutPostInput], {
    nullable: true,
  })
  create?: PostFileCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: PostFileCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileUpsertWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  upsert?: PostFileUpsertWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => PostFileCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: PostFileCreateManyPostInputEnvelope | undefined;

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

  @TypeGraphQL.Field((_type) => [PostFileUpdateWithWhereUniqueWithoutPostInput], {
    nullable: true,
  })
  update?: PostFileUpdateWithWhereUniqueWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileUpdateManyWithWhereWithoutPostInput], {
    nullable: true,
  })
  updateMany?: PostFileUpdateManyWithWhereWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PostFileScalarWhereInput[] | undefined;
}
