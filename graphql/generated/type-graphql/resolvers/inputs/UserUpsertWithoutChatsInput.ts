import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateWithoutChatsInput } from '../inputs/UserCreateWithoutChatsInput';
import { UserUpdateWithoutChatsInput } from '../inputs/UserUpdateWithoutChatsInput';
import { UserWhereInput } from '../inputs/UserWhereInput';

@TypeGraphQL.InputType('UserUpsertWithoutChatsInput', {})
export class UserUpsertWithoutChatsInput {
  @TypeGraphQL.Field((_type) => UserUpdateWithoutChatsInput, {
    nullable: false,
  })
  update!: UserUpdateWithoutChatsInput;

  @TypeGraphQL.Field((_type) => UserCreateWithoutChatsInput, {
    nullable: false,
  })
  create!: UserCreateWithoutChatsInput;

  @TypeGraphQL.Field((_type) => UserWhereInput, {
    nullable: true,
  })
  where?: UserWhereInput | undefined;
}
