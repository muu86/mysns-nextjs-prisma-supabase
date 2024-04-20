import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatCreateWithoutUsersInput } from '../inputs/ChatCreateWithoutUsersInput';
import { ChatWhereUniqueInput } from '../inputs/ChatWhereUniqueInput';

@TypeGraphQL.InputType('ChatCreateOrConnectWithoutUsersInput', {})
export class ChatCreateOrConnectWithoutUsersInput {
  @TypeGraphQL.Field((_type) => ChatWhereUniqueInput, {
    nullable: false,
  })
  where!: ChatWhereUniqueInput;

  @TypeGraphQL.Field((_type) => ChatCreateWithoutUsersInput, {
    nullable: false,
  })
  create!: ChatCreateWithoutUsersInput;
}
