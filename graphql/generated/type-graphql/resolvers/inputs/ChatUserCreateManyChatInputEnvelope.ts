import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserCreateManyChatInput } from '../inputs/ChatUserCreateManyChatInput';

@TypeGraphQL.InputType('ChatUserCreateManyChatInputEnvelope', {})
export class ChatUserCreateManyChatInputEnvelope {
  @TypeGraphQL.Field((_type) => [ChatUserCreateManyChatInput], {
    nullable: false,
  })
  data!: ChatUserCreateManyChatInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
