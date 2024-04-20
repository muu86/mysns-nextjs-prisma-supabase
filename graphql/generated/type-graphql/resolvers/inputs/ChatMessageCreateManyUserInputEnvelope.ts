import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageCreateManyUserInput } from '../inputs/ChatMessageCreateManyUserInput';

@TypeGraphQL.InputType('ChatMessageCreateManyUserInputEnvelope', {})
export class ChatMessageCreateManyUserInputEnvelope {
  @TypeGraphQL.Field((_type) => [ChatMessageCreateManyUserInput], {
    nullable: false,
  })
  data!: ChatMessageCreateManyUserInput[];

  @TypeGraphQL.Field((_type) => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
