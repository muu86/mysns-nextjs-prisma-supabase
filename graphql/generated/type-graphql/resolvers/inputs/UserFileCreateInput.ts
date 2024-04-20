import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { FileCreateNestedOneWithoutFilesInput } from '../inputs/FileCreateNestedOneWithoutFilesInput';
import { UserCreateNestedOneWithoutFilesInput } from '../inputs/UserCreateNestedOneWithoutFilesInput';

@TypeGraphQL.InputType('UserFileCreateInput', {})
export class UserFileCreateInput {
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

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutFilesInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutFilesInput;
}
