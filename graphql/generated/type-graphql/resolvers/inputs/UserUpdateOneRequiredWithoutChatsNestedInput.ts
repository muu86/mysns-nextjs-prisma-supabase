import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutChatsInput } from '../inputs/UserCreateOrConnectWithoutChatsInput';
import { UserCreateWithoutChatsInput } from '../inputs/UserCreateWithoutChatsInput';
import { UserUpdateToOneWithWhereWithoutChatsInput } from '../inputs/UserUpdateToOneWithWhereWithoutChatsInput';
import { UserUpsertWithoutChatsInput } from '../inputs/UserUpsertWithoutChatsInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserUpdateOneRequiredWithoutChatsNestedInput', {})
export class UserUpdateOneRequiredWithoutChatsNestedInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutChatsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutChatsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutChatsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutChatsInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpsertWithoutChatsInput, {
    nullable: true,
  })
  upsert?: UserUpsertWithoutChatsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field((_type) => UserUpdateToOneWithWhereWithoutChatsInput, {
    nullable: true,
  })
  update?: UserUpdateToOneWithWhereWithoutChatsInput | undefined;
}
