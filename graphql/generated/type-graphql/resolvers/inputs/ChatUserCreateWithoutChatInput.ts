import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCreateNestedOneWithoutChatsInput } from '../inputs/UserCreateNestedOneWithoutChatsInput';

@TypeGraphQL.InputType('ChatUserCreateWithoutChatInput', {})
export class ChatUserCreateWithoutChatInput {
  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutChatsInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutChatsInput;
}
