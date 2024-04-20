import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { FileRelationFilter } from '../inputs/FileRelationFilter';
import { IntFilter } from '../inputs/IntFilter';
import { PostRelationFilter } from '../inputs/PostRelationFilter';

@TypeGraphQL.InputType('PostFileWhereInput', {})
export class PostFileWhereInput {
  @TypeGraphQL.Field((_type) => [PostFileWhereInput], {
    nullable: true,
  })
  AND?: PostFileWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileWhereInput], {
    nullable: true,
  })
  OR?: PostFileWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [PostFileWhereInput], {
    nullable: true,
  })
  NOT?: PostFileWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  postId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  fileId?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => FileRelationFilter, {
    nullable: true,
  })
  file?: FileRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => PostRelationFilter, {
    nullable: true,
  })
  post?: PostRelationFilter | undefined;
}
