import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter';
import { EnumFileStorageTypeWithAggregatesFilter } from '../inputs/EnumFileStorageTypeWithAggregatesFilter';
import { IntWithAggregatesFilter } from '../inputs/IntWithAggregatesFilter';
import { StringWithAggregatesFilter } from '../inputs/StringWithAggregatesFilter';

@TypeGraphQL.InputType('FileScalarWhereWithAggregatesInput', {})
export class FileScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field((_type) => [FileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: FileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: FileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => [FileScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: FileScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field((_type) => IntWithAggregatesFilter, {
    nullable: true,
  })
  id?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => StringWithAggregatesFilter, {
    nullable: true,
  })
  location?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => EnumFileStorageTypeWithAggregatesFilter, {
    nullable: true,
  })
  type?: EnumFileStorageTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
