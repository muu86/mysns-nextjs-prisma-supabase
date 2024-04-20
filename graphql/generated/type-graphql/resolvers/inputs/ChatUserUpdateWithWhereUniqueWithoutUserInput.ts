import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserUpdateWithoutUserInput } from '../inputs/ChatUserUpdateWithoutUserInput';
import { ChatUserWhereUniqueInput } from '../inputs/ChatUserWhereUniqueInput';

@TypeGraphQL.InputType('ChatUserUpdateWithWhereUniqueWithoutUserInput', {})
export class ChatUserUpdateWithWhereUniqueWithoutUserInput {
  @TypeGraphQL.Field((_type) => ChatUserWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatUserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatUserUpdateWithoutUserInput, {
    nullable: false,
  })
  data!: ChatUserUpdateWithoutUserInput;
}
