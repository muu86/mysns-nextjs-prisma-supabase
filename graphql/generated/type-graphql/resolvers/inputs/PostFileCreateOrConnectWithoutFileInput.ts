import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileCreateWithoutFileInput } from '../inputs/PostFileCreateWithoutFileInput';
import { PostFileWhereUniqueInput } from '../inputs/PostFileWhereUniqueInput';

@TypeGraphQL.InputType('PostFileCreateOrConnectWithoutFileInput', {})
export class PostFileCreateOrConnectWithoutFileInput {
  @TypeGraphQL.Field((_type) => PostFileWhereUniqueInput, {
    nullable: false,
  })
  where!: PostFileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostFileCreateWithoutFileInput, {
    nullable: false,
  })
  create!: PostFileCreateWithoutFileInput;
}
