import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { NestedEnumFileStorageTypeFilter } from '../inputs/NestedEnumFileStorageTypeFilter';
import { FileStorageType } from '../../enums/FileStorageType';

@TypeGraphQL.InputType('EnumFileStorageTypeFilter', {})
export class EnumFileStorageTypeFilter {
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

  @TypeGraphQL.Field((_type) => NestedEnumFileStorageTypeFilter, {
    nullable: true,
  })
  not?: NestedEnumFileStorageTypeFilter | undefined;
}
