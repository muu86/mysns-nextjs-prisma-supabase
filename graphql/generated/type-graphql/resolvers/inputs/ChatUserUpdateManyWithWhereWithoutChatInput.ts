import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserScalarWhereInput } from '../inputs/ChatUserScalarWhereInput';
import { ChatUserUpdateManyMutationInput } from '../inputs/ChatUserUpdateManyMutationInput';

@TypeGraphQL.InputType('ChatUserUpdateManyWithWhereWithoutChatInput', {})
export class ChatUserUpdateManyWithWhereWithoutChatInput {
  @TypeGraphQL.Field((_type) => ChatUserScalarWhereInput, {
    nullable: false,
  })
  where!: ChatUserScalarWhereInput;

  @TypeGraphQL.Field((_type) => ChatUserUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ChatUserUpdateManyMutationInput;
}
