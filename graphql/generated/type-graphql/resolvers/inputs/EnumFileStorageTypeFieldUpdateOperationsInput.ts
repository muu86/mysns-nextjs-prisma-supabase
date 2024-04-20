import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileStorageType } from '../../enums/FileStorageType';

@TypeGraphQL.InputType('EnumFileStorageTypeFieldUpdateOperationsInput', {})
export class EnumFileStorageTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field((_type) => FileStorageType, {
    nullable: true,
  })
  set?: 'S3' | undefined;
}
