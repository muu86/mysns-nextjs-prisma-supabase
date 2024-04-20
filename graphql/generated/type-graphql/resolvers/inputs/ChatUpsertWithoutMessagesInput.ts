import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatCreateWithoutMessagesInput } from '../inputs/ChatCreateWithoutMessagesInput';
import { ChatUpdateWithoutMessagesInput } from '../inputs/ChatUpdateWithoutMessagesInput';
import { ChatWhereInput } from '../inputs/ChatWhereInput';

@TypeGraphQL.InputType('ChatUpsertWithoutMessagesInput', {})
export class ChatUpsertWithoutMessagesInput {
  @TypeGraphQL.Field((_type) => ChatUpdateWithoutMessagesInput, {
    nullable: false,
  })
  update!: ChatUpdateWithoutMessagesInput;

  @TypeGraphQL.Field((_type) => ChatCreateWithoutMessagesInput, {
    nullable: false,
  })
  create!: ChatCreateWithoutMessagesInput;

  @TypeGraphQL.Field((_type) => ChatWhereInput, {
    nullable: true,
  })
  where?: ChatWhereInput | undefined;
}
