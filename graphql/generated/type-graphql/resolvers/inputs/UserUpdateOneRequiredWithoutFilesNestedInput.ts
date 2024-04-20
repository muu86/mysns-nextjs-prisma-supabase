import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutFilesInput } from '../inputs/UserCreateOrConnectWithoutFilesInput';
import { UserCreateWithoutFilesInput } from '../inputs/UserCreateWithoutFilesInput';
import { UserUpdateToOneWithWhereWithoutFilesInput } from '../inputs/UserUpdateToOneWithWhereWithoutFilesInput';
import { UserUpsertWithoutFilesInput } from '../inputs/UserUpsertWithoutFilesInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserUpdateOneRequiredWithoutFilesNestedInput', {})
export class UserUpdateOneRequiredWithoutFilesNestedInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutFilesInput, {
    nullable: true,
  })
  create?: UserCreateWithoutFilesInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutFilesInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutFilesInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutFilesInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutFilesInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateToOneWithWhereWithoutFilesInput, {
    nullable: true,
  })
  update?: UserUpdateToOneWithWhereWithoutFilesInput | undefined;
}
