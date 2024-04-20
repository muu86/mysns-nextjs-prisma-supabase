import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageUpdateWithoutChatInput } from '../inputs/ChatMessageUpdateWithoutChatInput';
import { ChatMessageWhereUniqueInput } from '../inputs/ChatMessageWhereUniqueInput';

@TypeGraphQL.InputType('ChatMessageUpdateWithWhereUniqueWithoutChatInput', {})
export class ChatMessageUpdateWithWhereUniqueWithoutChatInput {
  @TypeGraphQL.Field((_type) => ChatMessageWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatMessageUpdateWithoutChatInput, {
    nullable: false,
  })
  data!: ChatMessageUpdateWithoutChatInput;
}
