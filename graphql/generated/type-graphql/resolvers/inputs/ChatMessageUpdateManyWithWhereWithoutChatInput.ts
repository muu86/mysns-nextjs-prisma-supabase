import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageScalarWhereInput } from '../inputs/ChatMessageScalarWhereInput';
import { ChatMessageUpdateManyMutationInput } from '../inputs/ChatMessageUpdateManyMutationInput';

@TypeGraphQL.InputType('ChatMessageUpdateManyWithWhereWithoutChatInput', {})
export class ChatMessageUpdateManyWithWhereWithoutChatInput {
  @TypeGraphQL.Field((_type) => ChatMessageScalarWhereInput, {
    nullable: false,
  })
  where!: ChatMessageScalarWhereInput;

  @TypeGraphQL.Field((_type) => ChatMessageUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ChatMessageUpdateManyMutationInput;
}
