import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { ChatAvgAggregate } from '../outputs/ChatAvgAggregate';
import { ChatCountAggregate } from '../outputs/ChatCountAggregate';
import { ChatMaxAggregate } from '../outputs/ChatMaxAggregate';
import { ChatMinAggregate } from '../outputs/ChatMinAggregate';
import { ChatSumAggregate } from '../outputs/ChatSumAggregate';

@TypeGraphQL.ObjectType('ChatGroupBy', {})
export class ChatGroupBy {
  @TypeGraphQL.Field((_type) => TypeGraphQL.Int, {
    nullable: false,
  })
  id!: number;

  @TypeGraphQL.Field((_type) => String, {
    nullable: true,
  })
  name!: string | null;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field((_type) => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field((_type) => ChatCountAggregate, {
    nullable: true,
  })
  _count!: ChatCountAggregate | null;

  @TypeGraphQL.Field((_type) => ChatAvgAggregate, {
    nullable: true,
  })
  _avg!: ChatAvgAggregate | null;

  @TypeGraphQL.Field((_type) => ChatSumAggregate, {
    nullable: true,
  })
  _sum!: ChatSumAggregate | null;

  @TypeGraphQL.Field((_type) => ChatMinAggregate, {
    nullable: true,
  })
  _min!: ChatMinAggregate | null;

  @TypeGraphQL.Field((_type) => ChatMaxAggregate, {
    nullable: true,
  })
  _max!: ChatMaxAggregate | null;
}
