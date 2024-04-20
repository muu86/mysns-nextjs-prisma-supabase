import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileCreateNestedOneWithoutFilesInput } from '../inputs/FileCreateNestedOneWithoutFilesInput';

@TypeGraphQL.InputType('UserFileCreateWithoutUserInput', {})
export class UserFileCreateWithoutUserInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => FileCreateNestedOneWithoutFilesInput, {
    nullable: false,
  })
  file!: FileCreateNestedOneWithoutFilesInput;
}
