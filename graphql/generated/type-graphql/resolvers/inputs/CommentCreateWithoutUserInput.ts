import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostCreateNestedOneWithoutCommentsInput } from '../inputs/PostCreateNestedOneWithoutCommentsInput';

@TypeGraphQL.InputType('CommentCreateWithoutUserInput', {})
export class CommentCreateWithoutUserInput {
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

  @TypeGraphQL.Field((_type) => PostCreateNestedOneWithoutCommentsInput, {
    nullable: false,
  })
  post!: PostCreateNestedOneWithoutCommentsInput;
}
