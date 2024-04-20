import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../scalars';
import { ChatMessage } from '../models/ChatMessage';
import { ChatUser } from '../models/ChatUser';
import { ChatCount } from '../resolvers/outputs/ChatCount';

@TypeGraphQL.ObjectType('Chat', {})
export class Chat {
  @TypeGraphQL.Field((_type) => TypeGraphQL.ID, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name?: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  messages?: ChatMessage[];

  users?: ChatUser[];

  @TypeGraphQL.Field((_type) => ChatCount, {
    nullable: true,
  })
  _count?: ChatCount | null;
}
