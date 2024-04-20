import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageCreateWithoutChatInput } from '../inputs/ChatMessageCreateWithoutChatInput';
import { ChatMessageWhereUniqueInput } from '../inputs/ChatMessageWhereUniqueInput';

@TypeGraphQL.InputType('ChatMessageCreateOrConnectWithoutChatInput', {})
export class ChatMessageCreateOrConnectWithoutChatInput {
  @TypeGraphQL.Field((_type) => ChatMessageWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatMessageCreateWithoutChatInput, {
    nullable: false,
  })
  create!: ChatMessageCreateWithoutChatInput;
}
