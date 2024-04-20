import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostCreateWithoutFilesInput } from '../inputs/PostCreateWithoutFilesInput';
import { PostWhereUniqueInput } from '../inputs/PostWhereUniqueInput';

@TypeGraphQL.InputType('PostCreateOrConnectWithoutFilesInput', {})
export class PostCreateOrConnectWithoutFilesInput {
  @TypeGraphQL.Field((_type) => PostWhereUniqueInput, {
    nullable: false,
  })
  where!: PostWhereUniqueInput;

  @TypeGraphQL.Field((_type) => PostCreateWithoutFilesInput, {
    nullable: false,
  })
  create!: PostCreateWithoutFilesInput;
}
