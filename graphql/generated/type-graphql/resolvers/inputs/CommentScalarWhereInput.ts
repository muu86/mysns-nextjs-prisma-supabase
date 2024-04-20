import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { StringFilter } from '../inputs/StringFilter';

@TypeGraphQL.InputType('CommentScalarWhereInput', {})
export class CommentScalarWhereInput {
  @TypeGraphQL.Field((_type) => [CommentScalarWhereInput], {
    nullable: true,
  })
  AND?: CommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CommentScalarWhereInput], {
    nullable: true,
  })
  OR?: CommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CommentScalarWhereInput], {
    nullable: true,
  })
  NOT?: CommentScalarWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  content?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  userId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  postId?: IntFilter | undefined;
}
