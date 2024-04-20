import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserUpdateWithoutChatInput } from '../inputs/ChatUserUpdateWithoutChatInput';
import { ChatUserWhereUniqueInput } from '../inputs/ChatUserWhereUniqueInput';

@TypeGraphQL.InputType('ChatUserUpdateWithWhereUniqueWithoutChatInput', {})
export class ChatUserUpdateWithWhereUniqueWithoutChatInput {
  @TypeGraphQL.Field((_type) => ChatUserWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatUserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatUserUpdateWithoutChatInput, {
    nullable: false,
  })
  data!: ChatUserUpdateWithoutChatInput;
}
