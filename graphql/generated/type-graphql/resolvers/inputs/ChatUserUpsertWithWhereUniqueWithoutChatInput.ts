import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserCreateWithoutChatInput } from '../inputs/ChatUserCreateWithoutChatInput';
import { ChatUserUpdateWithoutChatInput } from '../inputs/ChatUserUpdateWithoutChatInput';
import { ChatUserWhereUniqueInput } from '../inputs/ChatUserWhereUniqueInput';

@TypeGraphQL.InputType('ChatUserUpsertWithWhereUniqueWithoutChatInput', {})
export class ChatUserUpsertWithWhereUniqueWithoutChatInput {
  @TypeGraphQL.Field((_type) => ChatUserWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatUserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatUserUpdateWithoutChatInput, {
    nullable: false,
  })
  update!: ChatUserUpdateWithoutChatInput;

  @TypeGraphQL.Field((_type) => ChatUserCreateWithoutChatInput, {
    nullable: false,
  })
  create!: ChatUserCreateWithoutChatInput;
}
