import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { PostRelationFilter } from '../inputs/PostRelationFilter';
import { StringFilter } from '../inputs/StringFilter';
import { UserRelationFilter } from '../inputs/UserRelationFilter';

@TypeGraphQL.InputType('CommentWhereInput', {})
export class CommentWhereInput {
  @TypeGraphQL.Field((_type) => [CommentWhereInput], {
    nullable: true,
  })
  AND?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CommentWhereInput], {
    nullable: true,
  })
  OR?: CommentWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [CommentWhereInput], {
    nullable: true,
  })
  NOT?: CommentWhereInput[] | undefined;

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

  @TypeGraphQL.Field((_type) => PostRelationFilter, {
    nullable: true,
  })
  post?: PostRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;
}
