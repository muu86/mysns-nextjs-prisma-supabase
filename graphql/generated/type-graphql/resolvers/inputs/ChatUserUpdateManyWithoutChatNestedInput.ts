import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserCreateManyChatInputEnvelope } from '../inputs/ChatUserCreateManyChatInputEnvelope';
import { ChatUserCreateOrConnectWithoutChatInput } from '../inputs/ChatUserCreateOrConnectWithoutChatInput';
import { ChatUserCreateWithoutChatInput } from '../inputs/ChatUserCreateWithoutChatInput';
import { ChatUserScalarWhereInput } from '../inputs/ChatUserScalarWhereInput';
import { ChatUserUpdateManyWithWhereWithoutChatInput } from '../inputs/ChatUserUpdateManyWithWhereWithoutChatInput';
import { ChatUserUpdateWithWhereUniqueWithoutChatInput } from '../inputs/ChatUserUpdateWithWhereUniqueWithoutChatInput';
import { ChatUserUpsertWithWhereUniqueWithoutChatInput } from '../inputs/ChatUserUpsertWithWhereUniqueWithoutChatInput';
import { ChatUserWhereUniqueInput } from '../inputs/ChatUserWhereUniqueInput';

@TypeGraphQL.InputType('ChatUserUpdateManyWithoutChatNestedInput', {})
export class ChatUserUpdateManyWithoutChatNestedInput {
  @TypeGraphQL.Field((_type) => [ChatUserCreateWithoutChatInput], {
    nullable: true,
  })
  create?: ChatUserCreateWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserCreateOrConnectWithoutChatInput], {
    nullable: true,
  })
  connectOrCreate?: ChatUserCreateOrConnectWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserUpsertWithWhereUniqueWithoutChatInput], {
    nullable: true,
  })
  upsert?: ChatUserUpsertWithWhereUniqueWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => ChatUserCreateManyChatInputEnvelope, {
    nullable: true,
  })
  createMany?: ChatUserCreateManyChatInputEnvelope | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereUniqueInput], {
    nullable: true,
  })
  set?: ChatUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereUniqueInput], {
    nullable: true,
  })
  disconnect?: ChatUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereUniqueInput], {
    nullable: true,
  })
  delete?: ChatUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserWhereUniqueInput], {
    nullable: true,
  })
  connect?: ChatUserWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserUpdateWithWhereUniqueWithoutChatInput], {
    nullable: true,
  })
  update?: ChatUserUpdateWithWhereUniqueWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserUpdateManyWithWhereWithoutChatInput], {
    nullable: true,
  })
  updateMany?: ChatUserUpdateManyWithWhereWithoutChatInput[] | undefined;

  @TypeGraphQL.Field((_type) => [ChatUserScalarWhereInput], {
    nullable: true,
  })
  deleteMany?: ChatUserScalarWhereInput[] | undefined;
}
