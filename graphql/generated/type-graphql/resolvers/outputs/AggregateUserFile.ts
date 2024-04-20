import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserFileAvgAggregate } from '../outputs/UserFileAvgAggregate';
import { UserFileCountAggregate } from '../outputs/UserFileCountAggregate';
import { UserFileMaxAggregate } from '../outputs/UserFileMaxAggregate';
import { UserFileMinAggregate } from '../outputs/UserFileMinAggregate';
import { UserFileSumAggregate } from '../outputs/UserFileSumAggregate';

@TypeGraphQL.ObjectType('AggregateUserFile', {})
export class AggregateUserFile {
  @TypeGraphQL.Field((_type) => UserFileCountAggregate, {
    nullable: true,
  })
  _count!: UserFileCountAggregate | null;

  @TypeGraphQL.Field((_type) => UserFileAvgAggregate, {
    nullable: true,
  })
  _avg!: UserFileAvgAggregate | null;

  @TypeGraphQL.Field((_type) => UserFileSumAggregate, {
    nullable: true,
  })
  _sum!: UserFileSumAggregate | null;

  @TypeGraphQL.Field((_type) => UserFileMinAggregate, {
    nullable: true,
  })
  _min!: UserFileMinAggregate | null;

  @TypeGraphQL.Field((_type) => UserFileMaxAggregate, {
    nullable: true,
  })
  _max!: UserFileMaxAggregate | null;
}
