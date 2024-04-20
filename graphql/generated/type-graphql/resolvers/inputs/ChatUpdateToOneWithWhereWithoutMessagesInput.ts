import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUpdateWithoutMessagesInput } from '../inputs/ChatUpdateWithoutMessagesInput';
import { ChatWhereInput } from '../inputs/ChatWhereInput';

@TypeGraphQL.InputType('ChatUpdateToOneWithWhereWithoutMessagesInput', {})
export class ChatUpdateToOneWithWhereWithoutMessagesInput {
  @TypeGraphQL.Field((_type) => ChatWhereInput, {
    nullable: true,
  })
  where?: ChatWhereInput | undefined;

  @TypeGraphQL.Field((_type) => ChatUpdateWithoutMessagesInput, {
    nullable: false,
  })
  data!: ChatUpdateWithoutMessagesInput;
}
