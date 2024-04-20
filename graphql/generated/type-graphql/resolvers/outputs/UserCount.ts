import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserCountAccountsArgs } from './args/UserCountAccountsArgs';
import { UserCountAddressesArgs } from './args/UserCountAddressesArgs';
import { UserCountChatMessagesArgs } from './args/UserCountChatMessagesArgs';
import { UserCountChatsArgs } from './args/UserCountChatsArgs';
import { UserCountCommentsArgs } from './args/UserCountCommentsArgs';
import { UserCountFilesArgs } from './args/UserCountFilesArgs';
import { UserCountPostsArgs } from './args/UserCountPostsArgs';
import { UserCountSessionsArgs } from './args/UserCountSessionsArgs';

@TypeGraphQL.ObjectType('UserCount', {})
export class UserCount {
  accounts!: number;
  chats!: number;
  comments!: number;
  posts!: number;
  sessions!: number;
  addresses!: number;
  files!: number;
  chatMessages!: number;

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'accounts',
    nullable: false,
  })
  getAccounts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountAccountsArgs): number {
    return root.accounts;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'chats',
    nullable: false,
  })
  getChats(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountChatsArgs): number {
    return root.chats;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'comments',
    nullable: false,
  })
  getComments(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountCommentsArgs): number {
    return root.comments;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'posts',
    nullable: false,
  })
  getPosts(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountPostsArgs): number {
    return root.posts;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'sessions',
    nullable: false,
  })
  getSessions(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountSessionsArgs): number {
    return root.sessions;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'addresses',
    nullable: false,
  })
  getAddresses(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountAddressesArgs): number {
    return root.addresses;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'files',
    nullable: false,
  })
  getFiles(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountFilesArgs): number {
    return root.files;
  }

  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    name: 'chatMessages',
    nullable: false,
  })
  getChatMessages(@TypeGraphQL.Root() root: UserCount, @TypeGraphQL.Args() args: UserCountChatMessagesArgs): number {
    return root.chatMessages;
  }
}
