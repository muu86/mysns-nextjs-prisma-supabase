import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileCreateManyFileInputEnvelope } from '../inputs/PostFileCreateManyFileInputEnvelope';
import { PostFileCreateOrConnectWithoutFileInput } from '../inputs/PostFileCreateOrConnectWithoutFileInput';
import { PostFileCreateWithoutFileInput } from '../inputs/PostFileCreateWithoutFileInput';
import { PostFileWhereUniqueInput } from '../inputs/PostFileWhereUniqueInput';

@TypeGraphQL.InputType('PostFileCreateNestedManyWithoutFileInput', {})
export class PostFileCreateNestedManyWithoutFileInput {
  @TypeGraphQL.Field((_type) => [PostFileCreateWithoutFileInput], {
    nullable: true,
  })
  create?: PostFileCreateWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileCreateOrConnectWithoutFileInput], {
    nullable: true,
  })
  connectOrCreate?: PostFileCreateOrConnectWithoutFileInput[] | undefined;

  @TypeGraphQL.Field((_type) => PostFileCreateManyFileInputEnvelope, {
    nullable: true,
  })
  createMany?: PostFileCreateManyFileInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [PostFileWhereUniqueInput], {
    nullable: true,
  })
  connect?: PostFileWhereUniqueInput[] | undefined;
}
