import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileWhereInput } from '../inputs/FileWhereInput';

@TypeGraphQL.InputType('FileRelationFilter', {})
export class FileRelationFilter {
  @TypeGraphQL.Field((_type) => FileWhereInput, {
    nullable: true,
  })
  is?: FileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => FileWhereInput, {
    nullable: true,
  })
  isNot?: FileWhereInput | undefined;
}
