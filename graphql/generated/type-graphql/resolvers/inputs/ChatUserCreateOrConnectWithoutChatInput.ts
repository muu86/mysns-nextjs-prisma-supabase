import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserCreateWithoutChatInput } from '../inputs/ChatUserCreateWithoutChatInput';
import { ChatUserWhereUniqueInput } from '../inputs/ChatUserWhereUniqueInput';

@TypeGraphQL.InputType('ChatUserCreateOrConnectWithoutChatInput', {})
export class ChatUserCreateOrConnectWithoutChatInput {
  @TypeGraphQL.Field((_type) => ChatUserWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatUserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatUserCreateWithoutChatInput, {
    nullable: false,
  })
  create!: ChatUserCreateWithoutChatInput;
}
