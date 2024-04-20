import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateNestedOneWithoutFilesInput } from '../inputs/UserCreateNestedOneWithoutFilesInput';

@TypeGraphQL.InputType('UserFileCreateWithoutFileInput', {})
export class UserFileCreateWithoutFileInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutFilesInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutFilesInput;
}
