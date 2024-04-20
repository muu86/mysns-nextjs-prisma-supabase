import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutFilesInput } from '../inputs/UserCreateWithoutFilesInput';
import { UserUpdateWithoutFilesInput } from '../inputs/UserUpdateWithoutFilesInput';
import { UserWhereInput } from '../inputs/UserWhereInput';

@TypeGraphQL.InputType('UserUpsertWithoutFilesInput', {})
export class UserUpsertWithoutFilesInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutFilesInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutFilesInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutFilesInput, {
    nullable: false,
  })
  create!: UserCreateWithoutFilesInput;

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;
}
