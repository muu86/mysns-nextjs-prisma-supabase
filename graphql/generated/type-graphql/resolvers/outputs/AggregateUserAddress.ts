import * as TypeGraphQL from 'type-graphql';
import * as GraphQLScalars from 'graphql-scalars';
import { Prisma } from '@prisma/client';
import { DecimalJSScalar } from '../../scalars';
import { UserAddressAvgAggregate } from '../outputs/UserAddressAvgAggregate';
import { UserAddressCountAggregate } from '../outputs/UserAddressCountAggregate';
import { UserAddressMaxAggregate } from '../outputs/UserAddressMaxAggregate';
import { UserAddressMinAggregate } from '../outputs/UserAddressMinAggregate';
import { UserAddressSumAggregate } from '../outputs/UserAddressSumAggregate';

@TypeGraphQL.ObjectType('AggregateUserAddress', {})
export class AggregateUserAddress {
  @TypeGraphQL.Field((_type) => UserAddressCountAggregate, {
    nullable: true,
  })
  _count!: UserAddressCountAggregate | null;

  @TypeGraphQL.Field((_type) => UserAddressAvgAggregate, {
    nullable: true,
  })
  _avg!: UserAddressAvgAggregate | null;

  @TypeGraphQL.Field((_type) => UserAddressSumAggregate, {
    nullable: true,
  })
  _sum!: UserAddressSumAggregate | null;

  @TypeGraphQL.Field((_type) => UserAddressMinAggregate, {
    nullable: true,
  })
  _min!: UserAddressMinAggregate | null;

  @TypeGraphQL.Field((_type) => UserAddressMaxAggregate, {
    nullable: true,
  })
  _max!: UserAddressMaxAggregate | null;
}
