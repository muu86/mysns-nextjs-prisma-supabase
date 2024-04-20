import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileCreateWithoutFilesInput } from '../inputs/FileCreateWithoutFilesInput';
import { FileWhereUniqueInput } from '../inputs/FileWhereUniqueInput';

@TypeGraphQL.InputType('FileCreateOrConnectWithoutFilesInput', {})
export class FileCreateOrConnectWithoutFilesInput {
  @TypeGraphQL.Field((_type) => FileWhereUniqueInput, {
    nullable: false,
  })
  where!: FileWhereUniqueInput;

  @TypeGraphQL.Field((_type) => FileCreateWithoutFilesInput, {
    nullable: false,
  })
  create!: FileCreateWithoutFilesInput;
}
