import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileCreateWithoutPostInput } from '../inputs/PostFileCreateWithoutPostInput';
import { PostFileUpdateWithoutPostInput } from '../inputs/PostFileUpdateWithoutPostInput';
import { PostFileWhereUniqueInput } from '../inputs/PostFileWhereUniqueInput';

@TypeGraphQL.InputType('PostFileUpsertWithWhereUniqueWithoutPostInput', {})
export class PostFileUpsertWithWhereUniqueWithoutPostInput {
  @TypeGraphQL.Field((_type) => PostFileWhereUniqueInput, {
    nullable: false,
  })
  where!: PostFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostFileUpdateWithoutPostInput, {
    nullable: false,
  })
  update!: PostFileUpdateWithoutPostInput;

  @TypeGraphQL.Field((_type) => PostFileCreateWithoutPostInput, {
    nullable: false,
  })
  create!: PostFileCreateWithoutPostInput;
}
