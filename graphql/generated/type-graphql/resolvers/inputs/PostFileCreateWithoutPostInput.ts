import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileCreateNestedOneWithoutPostsInput } from '../inputs/FileCreateNestedOneWithoutPostsInput';

@TypeGraphQL.InputType('PostFileCreateWithoutPostInput', {})
export class PostFileCreateWithoutPostInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => FileCreateNestedOneWithoutPostsInput, {
    nullable: false,
  })
  file!: FileCreateNestedOneWithoutPostsInput;
}
