import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { PostFileAvgAggregate } from '../outputs/PostFileAvgAggregate';
import { PostFileCountAggregate } from '../outputs/PostFileCountAggregate';
import { PostFileMaxAggregate } from '../outputs/PostFileMaxAggregate';
import { PostFileMinAggregate } from '../outputs/PostFileMinAggregate';
import { PostFileSumAggregate } from '../outputs/PostFileSumAggregate';

@TypeGraphQL.ObjectType('AggregatePostFile', {})
export class AggregatePostFile {
  @TypeGraphQL.Field((_type) => PostFileCountAggregate, {
    nullable: true,
  })
  _count!: PostFileCountAggregate | null;

  @TypeGraphQL.Field((_type) => PostFileAvgAggregate, {
    nullable: true,
  })
  _avg!: PostFileAvgAggregate | null;

  @TypeGraphQL.Field((_type) => PostFileSumAggregate, {
    nullable: true,
  })
  _sum!: PostFileSumAggregate | null;

  @TypeGraphQL.Field((_type) => PostFileMinAggregate, {
    nullable: true,
  })
  _min!: PostFileMinAggregate | null;

  @TypeGraphQL.Field((_type) => PostFileMaxAggregate, {
    nullable: true,
  })
  _max!: PostFileMaxAggregate | null;
}
