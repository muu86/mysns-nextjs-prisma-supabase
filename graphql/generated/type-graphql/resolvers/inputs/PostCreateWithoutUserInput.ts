import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { AddressCreateNestedOneWithoutPostsInput } from '../inputs/AddressCreateNestedOneWithoutPostsInput';
import { CommentCreateNestedManyWithoutPostInput } from '../inputs/CommentCreateNestedManyWithoutPostInput';
import { PostFileCreateNestedManyWithoutPostInput } from '../inputs/PostFileCreateNestedManyWithoutPostInput';

@TypeGraphQL.InputType('PostCreateWithoutUserInput', {})
export class PostCreateWithoutUserInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  content!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => CommentCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field((_type) => PostFileCreateNestedManyWithoutPostInput, {
    nullable: true,
  })
  files?: PostFileCreateNestedManyWithoutPostInput | undefined;

  @TypeGraphQL.Field((_type) => AddressCreateNestedOneWithoutPostsInput, {
    nullable: false,
  })
  address!: AddressCreateNestedOneWithoutPostsInput;
}
