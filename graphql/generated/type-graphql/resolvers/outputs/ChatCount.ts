import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatCountMessagesArgs } from './args/ChatCountMessagesArgs';
import { ChatCountUsersArgs } from './args/ChatCountUsersArgs';

@TypeGraphQL.ObjectType('ChatCount', {})
export class ChatCount {
  messages!: number;
  users!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'messages',
    nullable: false,
  })
  getMessages(@TypeGraphQL.Root() root: ChatCount, @TypeGraphQL.Args() args: ChatCountMessagesArgs): number {
    return root.messages;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'users',
    nullable: false,
  })
  getUsers(@TypeGraphQL.Root() root: ChatCount, @TypeGraphQL.Args() args: ChatCountUsersArgs): number {
    return root.users;
  }
}
