import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateOrConnectWithoutChatsInput } from '../inputs/UserCreateOrConnectWithoutChatsInput';
import { UserCreateWithoutChatsInput } from '../inputs/UserCreateWithoutChatsInput';
import { UserWhereUniqueInput } from '../inputs/UserWhereUniqueInput';

@TypeGraphQL.InputType('UserCreateNestedOneWithoutChatsInput', {})
export class UserCreateNestedOneWithoutChatsInput {
  @TypeGraphQL.Field((_type) => UserCreateWithoutChatsInput, {
    nullable: true,
  })
  create?: UserCreateWithoutChatsInput | undefined;

  @TypeGraphQL.Field((_type) => UserCreateOrConnectWithoutChatsInput, {
    nullable: true,
  })
  connectOrCreate?: UserCreateOrConnectWithoutChatsInput | undefined;

  @TypeGraphQL.Field((_type) => UserWhereUniqueInput, {
    nullable: true,
  })
  connect?: UserWhereUniqueInput | undefined;
}
