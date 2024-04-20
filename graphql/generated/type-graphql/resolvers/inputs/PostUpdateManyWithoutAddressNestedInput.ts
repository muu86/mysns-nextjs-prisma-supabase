import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostCreateManyAddressInputEnvelope } from '../inputs/PostCreateManyAddressInputEnvelope';
import { PostCreateOrConnectWithoutAddressInput } from '../inputs/PostCreateOrConnectWithoutAddressInput';
import { PostCreateWithoutAddressInput } from '../inputs/PostCreateWithoutAddressInput';
import { PostScalarWhereInput } from '../inputs/PostScalarWhereInput';
import { PostUpdateManyWithWhereWithoutAddressInput } from '../inputs/PostUpdateManyWithWhereWithoutAddressInput';
import { PostUpdateWithWhereUniqueWithoutAddressInput } from '../inputs/PostUpdateWithWhereUniqueWithoutAddressInput';
import { PostUpsertWithWhereUniqueWithoutAddressInput } from '../inputs/PostUpsertWithWhereUniqueWithoutAddressInput';
import { PostWhereUniqueInput } from '../inputs/PostWhereUniqueInput';

@TypeGraphQL.InputType('PostUpdateManyWithoutAddressNestedInput', {})
export class PostUpdateManyWithoutAddressNestedInput {
  @TypeGraphQL.Field((_type) => [PostCreateWithoutAddressInput], {
    nullable: true,
  })
  create?: PostCreateWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostCreateOrConnectWithoutAddressInput], {
    nullable: true,
  })
  connectOrCreate?: PostCreateOrConnectWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostUpsertWithWhereUniqueWithoutAddressInput], {
    nullable: true,
  })
  upsert?: PostUpsertWithWhereUniqueWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field((_type) => PostCreateManyAddressInputEnvelope, {
    nullable: true,
  })
  createMany?: PostCreateManyAddressInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [PostWhereUniqueInput], {
    nullable: true,
  })
  set?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostWhereUniqueInput], {
    nullable: true,
  })
  delete?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostWhereUniqueInput], {
    nullable: true,
  })
  connect?: PostWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostUpdateWithWhereUniqueWithoutAddressInput], {
    nullable: true,
  })
  update?: PostUpdateWithWhereUniqueWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostUpdateManyWithWhereWithoutAddressInput], {
    nullable: true,
  })
  updateMany?: PostUpdateManyWithWhereWithoutAddressInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: PostScalarWhereInput[] | undefined;
}
