import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { NestedEnumFileStorageTypeFilter } from '../inputs/NestedEnumFileStorageTypeFilter';
import { NestedEnumFileStorageTypeWithAggregatesFilter } from '../inputs/NestedEnumFileStorageTypeWithAggregatesFilter';
import { NestedIntFilter } from '../inputs/NestedIntFilter';
import { FileStorageType } from '../../enums/FileStorageType';

@TypeGraphQL.InputType('EnumFileStorageTypeWithAggregatesFilter', {})
export class EnumFileStorageTypeWithAggregatesFilter {
  @TypeGraphQL.Field((_type) => FileStorageType, {
    nullable: true,
  })
  equals?: 'S3' | undefined;

  @TypeGraphQL.Field((_type) => [FileStorageType], {
    nullable: true,
  })
  in?: 'S3'[] | undefined;

  @TypeGraphQL.Field((_type) => [FileStorageType], {
    nullable: true,
  })
  notIn?: 'S3'[] | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumFileStorageTypeWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumFileStorageTypeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedIntFilter, {
    nullable: true,
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumFileStorageTypeFilter, {
    nullable: true,
  })
  _min?: NestedEnumFileStorageTypeFilter | undefined;

  @TypeGraphQL.Field((_type) => NestedEnumFileStorageTypeFilter, {
    nullable: true,
  })
  _max?: NestedEnumFileStorageTypeFilter | undefined;
}
