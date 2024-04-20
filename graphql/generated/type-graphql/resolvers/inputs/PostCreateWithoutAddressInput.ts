import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { CommentCreateNestedManyWithoutPostInput } from '../inputs/CommentCreateNestedManyWithoutPostInput';
import { PostFileCreateNestedManyWithoutPostInput } from '../inputs/PostFileCreateNestedManyWithoutPostInput';
import { UserCreateNestedOneWithoutPostsInput } from '../inputs/UserCreateNestedOneWithoutPostsInput';

@TypeGraphQL.InputType('PostCreateWithoutAddressInput', {})
export class PostCreateWithoutAddressInput {
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

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutPostsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutPostsInput;
}
