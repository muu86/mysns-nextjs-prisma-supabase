import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileCreateManyPostInputEnvelope } from '../inputs/PostFileCreateManyPostInputEnvelope';
import { PostFileCreateOrConnectWithoutPostInput } from '../inputs/PostFileCreateOrConnectWithoutPostInput';
import { PostFileCreateWithoutPostInput } from '../inputs/PostFileCreateWithoutPostInput';
import { PostFileWhereUniqueInput } from '../inputs/PostFileWhereUniqueInput';

@TypeGraphQL.InputType('PostFileCreateNestedManyWithoutPostInput', {})
export class PostFileCreateNestedManyWithoutPostInput {
  @TypeGraphQL.Field((_type) => [PostFileCreateWithoutPostInput], {
    nullable: true,
  })
  create?: PostFileCreateWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileCreateOrConnectWithoutPostInput], {
    nullable: true,
  })
  connectOrCreate?: PostFileCreateOrConnectWithoutPostInput[] | undefined;

  @TypeGraphQL.Field((_type) => PostFileCreateManyPostInputEnvelope, {
    nullable: true,
  })
  createMany?: PostFileCreateManyPostInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [PostFileWhereUniqueInput], {
    nullable: true,
  })
  connect?: PostFileWhereUniqueInput[] | undefined;
}
