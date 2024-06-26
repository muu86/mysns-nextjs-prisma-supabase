import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatCreateNestedOneWithoutMessagesInput } from '../inputs/ChatCreateNestedOneWithoutMessagesInput';
import { UserCreateNestedOneWithoutChatMessagesInput } from '../inputs/UserCreateNestedOneWithoutChatMessagesInput';

@TypeGraphQL.InputType('ChatMessageCreateInput', {})
export class ChatMessageCreateInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  message!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => UserCreateNestedOneWithoutChatMessagesInput, {
    nullable: false,
  })
  user!: UserCreateNestedOneWithoutChatMessagesInput;

  @TypeGraphQL.Field((_type) => ChatCreateNestedOneWithoutMessagesInput, {
    nullable: false,
  })
  chat!: ChatCreateNestedOneWithoutMessagesInput;
}
