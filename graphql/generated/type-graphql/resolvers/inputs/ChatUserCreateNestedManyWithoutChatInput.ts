import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserCreateManyChatInputEnvelope } from '../inputs/ChatUserCreateManyChatInputEnvelope';
import { ChatUserCreateOrConnectWithoutChatInput } from '../inputs/ChatUserCreateOrConnectWithoutChatInput';
import { ChatUserCreateWithoutChatInput } from '../inputs/ChatUserCreateWithoutChatInput';
import { ChatUserWhereUniqueInput } from '../inputs/ChatUserWhereUniqueInput';

@TypeGraphQL.InputType('ChatUserCreateNestedManyWithoutChatInput', {})
export class ChatUserCreateNestedManyWithoutChatInput {
  @TypeGraphQL.Field((_type) => [ChatUserCreateWithoutChatInput], {
    nullable: true,
  })
  create?: ChatUserCreateWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserCreateOrConnectWithoutChatInput], {
    nullable: true,
  })
  connectOrCreate?: ChatUserCreateOrConnectWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => ChatUserCreateManyChatInputEnvelope, {
    nullable: true,
  })
  createMany?: ChatUserCreateManyChatInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereUniqueInput], {
    nullable: true,
  })
  connect?: ChatUserWhereUniqueInput[] | undefined;
}
