import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserCreateWithoutUserInput } from '../inputs/ChatUserCreateWithoutUserInput';
import { ChatUserWhereUniqueInput } from '../inputs/ChatUserWhereUniqueInput';

@TypeGraphQL.InputType('ChatUserCreateOrConnectWithoutUserInput', {})
export class ChatUserCreateOrConnectWithoutUserInput {
  @TypeGraphQL.Field((_type) => ChatUserWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatUserWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatUserCreateWithoutUserInput, {
    nullable: false,
  })
  create!: ChatUserCreateWithoutUserInput;
}
