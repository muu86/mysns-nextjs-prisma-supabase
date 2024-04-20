import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatUserAvgAggregate } from '../outputs/ChatUserAvgAggregate';
import { ChatUserCountAggregate } from '../outputs/ChatUserCountAggregate';
import { ChatUserMaxAggregate } from '../outputs/ChatUserMaxAggregate';
import { ChatUserMinAggregate } from '../outputs/ChatUserMinAggregate';
import { ChatUserSumAggregate } from '../outputs/ChatUserSumAggregate';

@TypeGraphQL.ObjectType('AggregateChatUser', {})
export class AggregateChatUser {
  @TypeGraphQL.Field((_type) => ChatUserCountAggregate, {
    nullable: true,
  })
  _count!: ChatUserCountAggregate | null;

  @TypeGraphQL.Field((_type) => ChatUserAvgAggregate, {
    nullable: true,
  })
  _avg!: ChatUserAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ChatUserSumAggregate, {
    nullable: true,
  })
  _sum!: ChatUserSumAggregate | null;

  @TypeGraphQL.Field((_type) => ChatUserMinAggregate, {
    nullable: true,
  })
  _min!: ChatUserMinAggregate | null;

  @TypeGraphQL.Field((_type) => ChatUserMaxAggregate, {
    nullable: true,
  })
  _max!: ChatUserMaxAggregate | null;
}
