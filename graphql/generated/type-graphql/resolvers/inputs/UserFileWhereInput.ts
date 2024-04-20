import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { FileRelationFilter } from '../inputs/FileRelationFilter';
import { IntFilter } from '../inputs/IntFilter';
import { UserRelationFilter } from '../inputs/UserRelationFilter';

@TypeGraphQL.InputType('UserFileWhereInput', {})
export class UserFileWhereInput {
  @TypeGraphQL.Field((_type) => [UserFileWhereInput], {
    nullable: true,
  })
  AND?: UserFileWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileWhereInput], {
    nullable: true,
  })
  OR?: UserFileWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [UserFileWhereInput], {
    nullable: true,
  })
  NOT?: UserFileWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  userId?: IntFilter | undefined;

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

  @TypeGraphQL.Field((_type) => UserRelationFilter, {
    nullable: true,
  })
  user?: UserRelationFilter | undefined;
}
