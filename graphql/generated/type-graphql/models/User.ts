import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';
import { Account } from '../models/Account';
import { ChatMessage } from '../models/ChatMessage';
import { ChatUser } from '../models/ChatUser';
import { Comment } from '../models/Comment';
import { Post } from '../models/Post';
import { Session } from '../models/Session';
import { UserAddress } from '../models/UserAddress';
import { UserFile } from '../models/UserFile';
import { Role } from '../enums/Role';
import { UserCount } from '../resolvers/outputs/UserCount';

@TypeGraphQL.ObjectType('User', {})
export class User {
  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  content?: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  babyBirth?: Date | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => String, {
    nullable: false,
  })
  email!: string;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: true,
  })
  emailVerified?: Date | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  image?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | null;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  username?: string | null;

  @TypeGraphQL.Field((_type) => Role, {
    nullable: false,
  })
  role!: 'READ' | 'WRITE';

  accounts?: Account[];

  chats?: ChatUser[];

  comments?: Comment[];

  posts?: Post[];

  sessions?: Session[];

  addresses?: UserAddress[];

  files?: UserFile[];

  chatMessages?: ChatMessage[];

  @TypeGraphQL.Field((_type) => UserCount, {
    nullable: true,
  })
  _count?: UserCount | null;
}
