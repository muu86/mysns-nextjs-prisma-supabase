import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageCreateManyChatInput } from '../inputs/ChatMessageCreateManyChatInput';

@TypeGraphQL.InputType('ChatMessageCreateManyChatInputEnvelope', {})
export class ChatMessageCreateManyChatInputEnvelope {
  @TypeGraphQL.Field((_type) => [ChatMessageCreateManyChatInput], {
    nullable: false,
  })
  data!: ChatMessageCreateManyChatInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
