import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileUpdateWithoutFilesInput } from '../inputs/FileUpdateWithoutFilesInput';
import { FileWhereInput } from '../inputs/FileWhereInput';

@TypeGraphQL.InputType('FileUpdateToOneWithWhereWithoutFilesInput', {})
export class FileUpdateToOneWithWhereWithoutFilesInput {
  @TypeGraphQL.Field((_type) => FileWhereInput, {
    nullable: true,
  })
  where?: FileWhereInput | undefined;

  @TypeGraphQL.Field((_type) => FileUpdateWithoutFilesInput, {
    nullable: false,
  })
  data!: FileUpdateWithoutFilesInput;
}
