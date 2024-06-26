import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { EnumFileStorageTypeFilter } from '../inputs/EnumFileStorageTypeFilter';
import { IntFilter } from '../inputs/IntFilter';
import { PostFileListRelationFilter } from '../inputs/PostFileListRelationFilter';
import { StringFilter } from '../inputs/StringFilter';
import { UserFileListRelationFilter } from '../inputs/UserFileListRelationFilter';

@TypeGraphQL.InputType('FileWhereInput', {})
export class FileWhereInput {
  @TypeGraphQL.Field((_type) => [FileWhereInput], {
    nullable: true,
  })
  AND?: FileWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileWhereInput], {
    nullable: true,
  })
  OR?: FileWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileWhereInput], {
    nullable: true,
  })
  NOT?: FileWhereInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntFilter, {
    nullable: true,
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field((_type) => StringFilter, {
    nullable: true,
  })
  location?: StringFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumFileStorageTypeFilter, {
    nullable: true,
  })
  type?: EnumFileStorageTypeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field((_type) => PostFileListRelationFilter, {
    nullable: true,
  })
  posts?: PostFileListRelationFilter | undefined;

  @TypeGraphQL.Field((_type) => UserFileListRelationFilter, {
    nullable: true,
  })
  files?: UserFileListRelationFilter | undefined;
}
