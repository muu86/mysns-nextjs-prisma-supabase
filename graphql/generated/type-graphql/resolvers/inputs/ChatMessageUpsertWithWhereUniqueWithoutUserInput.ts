import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageCreateWithoutUserInput } from '../inputs/ChatMessageCreateWithoutUserInput';
import { ChatMessageUpdateWithoutUserInput } from '../inputs/ChatMessageUpdateWithoutUserInput';
import { ChatMessageWhereUniqueInput } from '../inputs/ChatMessageWhereUniqueInput';

@TypeGraphQL.InputType('ChatMessageUpsertWithWhereUniqueWithoutUserInput', {})
export class ChatMessageUpsertWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => ChatMessageWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatMessageUpdateWithoutUserInput, {
    nullable: false,
  })
  update!: ChatMessageUpdateWithoutUserInput;

  @TypeGraphQL.Field((_type) => ChatMessageCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ChatMessageCreateWithoutUserInput;
}
