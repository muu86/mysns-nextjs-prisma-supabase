import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatCreateNestedOneWithoutUsersInput } from '../inputs/ChatCreateNestedOneWithoutUsersInput';
import { UserCreateNestedOneWithoutChatsInput } from '../inputs/UserCreateNestedOneWithoutChatsInput';

@TypeGraphQL.InputType('ChatUserCreateInput', {})
export class ChatUserCreateInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => ChatCreateNestedOneWithoutUsersInput, {
    nullable: false,
  })
  chat!: ChatCreateNestedOneWithoutUsersInput;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutChatsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutChatsInput;
}
