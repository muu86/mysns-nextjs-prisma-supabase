import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserUpdateWithoutFilesInput } from '../inputs/UserUpdateWithoutFilesInput';
import { UserWhereInput } from '../inputs/UserWhereInput';

@TypeGraphQL.InputType('UserUpdateToOneWithWhereWithoutFilesInput', {})
export class UserUpdateToOneWithWhereWithoutFilesInput {
  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateWithoutFilesInput, {
    nullable: false,
  })
  data!: UserUpdateWithoutFilesInput;
}
