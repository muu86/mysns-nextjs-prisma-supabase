import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileCreateWithoutPostInput } from '../inputs/PostFileCreateWithoutPostInput';
import { PostFileWhereUniqueInput } from '../inputs/PostFileWhereUniqueInput';

@TypeGraphQL.InputType('PostFileCreateOrConnectWithoutPostInput', {})
export class PostFileCreateOrConnectWithoutPostInput {
  @TypeGraphQL.Field((_type) => PostFileWhereUniqueInput, {
    nullable: false,
  })
  where!: PostFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostFileCreateWithoutPostInput, {
    nullable: false,
  })
  create!: PostFileCreateWithoutPostInput;
}
