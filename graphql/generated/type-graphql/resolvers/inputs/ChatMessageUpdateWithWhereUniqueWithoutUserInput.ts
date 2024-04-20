import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatMessageUpdateWithoutUserInput } from '../inputs/ChatMessageUpdateWithoutUserInput';
import { ChatMessageWhereUniqueInput } from '../inputs/ChatMessageWhereUniqueInput';

@TypeGraphQL.InputType('ChatMessageUpdateWithWhereUniqueWithoutUserInput', {})
export class ChatMessageUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => ChatMessageWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatMessageWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatMessageUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: ChatMessageUpdateWithoutUserInput;
}
