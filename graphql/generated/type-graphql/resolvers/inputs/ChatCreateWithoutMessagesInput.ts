import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserCreateNestedManyWithoutChatInput } from '../inputs/ChatUserCreateNestedManyWithoutChatInput';

@TypeGraphQL.InputType('ChatCreateWithoutMessagesInput', {})
export class ChatCreateWithoutMessagesInput {
  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field((_type) => ChatUserCreateNestedManyWithoutChatInput, {
    nullable: true,
  })
  users?: ChatUserCreateNestedManyWithoutChatInput | undefined;
}
