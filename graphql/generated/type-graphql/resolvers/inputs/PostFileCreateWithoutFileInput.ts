import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostCreateNestedOneWithoutFilesInput } from '../inputs/PostCreateNestedOneWithoutFilesInput';

@TypeGraphQL.InputType('PostFileCreateWithoutFileInput', {})
export class PostFileCreateWithoutFileInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutFilesInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutFilesInput;
}
