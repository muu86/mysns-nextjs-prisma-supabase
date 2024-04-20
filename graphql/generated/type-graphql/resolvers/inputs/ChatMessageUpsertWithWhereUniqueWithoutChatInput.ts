import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageCreateWithoutChatInput } from '../inputs/ChatMessageCreateWithoutChatInput';
import { ChatMessageUpdateWithoutChatInput } from '../inputs/ChatMessageUpdateWithoutChatInput';
import { ChatMessageWhereUniqueInput } from '../inputs/ChatMessageWhereUniqueInput';

@TypeGraphQL.InputType('ChatMessageUpsertWithWhereUniqueWithoutChatInput', {})
export class ChatMessageUpsertWithWhereUniqueWithoutChatInput {
  @TypeGraphQL.Field((_type) => ChatMessageWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatMessageUpdateWithoutChatInput, {
    nullable: false,
  })
  update!: ChatMessageUpdateWithoutChatInput;

  @TypeGraphQL.Field((_type) => ChatMessageCreateWithoutChatInput, {
    nullable: false,
  })
  create!: ChatMessageCreateWithoutChatInput;
}
