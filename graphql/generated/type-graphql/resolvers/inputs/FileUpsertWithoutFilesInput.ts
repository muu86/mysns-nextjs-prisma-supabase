import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileCreateWithoutFilesInput } from '../inputs/FileCreateWithoutFilesInput';
import { FileUpdateWithoutFilesInput } from '../inputs/FileUpdateWithoutFilesInput';
import { FileWhereInput } from '../inputs/FileWhereInput';

@TypeGraphQL.InputType('FileUpsertWithoutFilesInput', {})
export class FileUpsertWithoutFilesInput {
  @TypeGraphQL.Field((_type) => FileUpdateWithoutFilesInput, {
    nullable: false,
  })
  update!: FileUpdateWithoutFilesInput;

  @TypeGraphQL.Field((_type) => FileCreateWithoutFilesInput, {
    nullable: false,
  })
  create!: FileCreateWithoutFilesInput;

  @TypeGraphQL.Field((_type) => FileWhereInput, {
    nullable: true,
  })
  where?: FileWhereInput | undefined;
}
