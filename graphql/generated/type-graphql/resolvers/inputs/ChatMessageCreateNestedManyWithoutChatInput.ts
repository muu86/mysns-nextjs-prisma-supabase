import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageCreateManyChatInputEnvelope } from '../inputs/ChatMessageCreateManyChatInputEnvelope';
import { ChatMessageCreateOrConnectWithoutChatInput } from '../inputs/ChatMessageCreateOrConnectWithoutChatInput';
import { ChatMessageCreateWithoutChatInput } from '../inputs/ChatMessageCreateWithoutChatInput';
import { ChatMessageWhereUniqueInput } from '../inputs/ChatMessageWhereUniqueInput';

@TypeGraphQL.InputType('ChatMessageCreateNestedManyWithoutChatInput', {})
export class ChatMessageCreateNestedManyWithoutChatInput {
  @TypeGraphQL.Field((_type) => [ChatMessageCreateWithoutChatInput], {
    nullable: true,
  })
  create?: ChatMessageCreateWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageCreateOrConnectWithoutChatInput], {
    nullable: true,
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => ChatMessageCreateManyChatInputEnvelope, {
    nullable: true,
  })
  createMany?: ChatMessageCreateManyChatInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  connect?: ChatMessageWhereUniqueInput[] | undefined;
}
