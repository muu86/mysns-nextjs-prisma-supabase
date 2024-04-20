import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageCreateManyChatInputEnvelope } from '../inputs/ChatMessageCreateManyChatInputEnvelope';
import { ChatMessageCreateOrConnectWithoutChatInput } from '../inputs/ChatMessageCreateOrConnectWithoutChatInput';
import { ChatMessageCreateWithoutChatInput } from '../inputs/ChatMessageCreateWithoutChatInput';
import { ChatMessageScalarWhereInput } from '../inputs/ChatMessageScalarWhereInput';
import { ChatMessageUpdateManyWithWhereWithoutChatInput } from '../inputs/ChatMessageUpdateManyWithWhereWithoutChatInput';
import { ChatMessageUpdateWithWhereUniqueWithoutChatInput } from '../inputs/ChatMessageUpdateWithWhereUniqueWithoutChatInput';
import { ChatMessageUpsertWithWhereUniqueWithoutChatInput } from '../inputs/ChatMessageUpsertWithWhereUniqueWithoutChatInput';
import { ChatMessageWhereUniqueInput } from '../inputs/ChatMessageWhereUniqueInput';

@TypeGraphQL.InputType('ChatMessageUpdateManyWithoutChatNestedInput', {})
export class ChatMessageUpdateManyWithoutChatNestedInput {
  @TypeGraphQL.Field((_type) => [ChatMessageCreateWithoutChatInput], {
    nullable: true,
  })
  create?: ChatMessageCreateWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageCreateOrConnectWithoutChatInput], {
    nullable: true,
  })
  connectOrCreate?: ChatMessageCreateOrConnectWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageUpsertWithWhereUniqueWithoutChatInput], {
    nullable: true,
  })
  upsert?: ChatMessageUpsertWithWhereUniqueWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => ChatMessageCreateManyChatInputEnvelope, {
    nullable: true,
  })
  createMany?: ChatMessageCreateManyChatInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  set?: ChatMessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ChatMessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  delete?: ChatMessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageWhereUniqueInput], {
    nullable: true,
  })
  connect?: ChatMessageWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageUpdateWithWhereUniqueWithoutChatInput], {
    nullable: true,
  })
  update?: ChatMessageUpdateWithWhereUniqueWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageUpdateManyWithWhereWithoutChatInput], {
    nullable: true,
  })
  updateMany?: ChatMessageUpdateManyWithWhereWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatMessageScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ChatMessageScalarWhereInput[] | undefined;
}
