import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageCreateWithoutUserInput } from '../inputs/ChatMessageCreateWithoutUserInput';
import { ChatMessageWhereUniqueInput } from '../inputs/ChatMessageWhereUniqueInput';

@TypeGraphQL.InputType('ChatMessageCreateOrConnectWithoutUserInput', {})
export class ChatMessageCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => ChatMessageWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatMessageCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ChatMessageCreateWithoutUserInput;
}
