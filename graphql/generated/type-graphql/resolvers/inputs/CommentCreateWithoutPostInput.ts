import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateNestedOneWithoutCommentsInput } from '../inputs/UserCreateNestedOneWithoutCommentsInput';

@TypeGraphQL.InputType('CommentCreateWithoutPostInput', {})
export class CommentCreateWithoutPostInput {
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

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutCommentsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutCommentsInput;
}
