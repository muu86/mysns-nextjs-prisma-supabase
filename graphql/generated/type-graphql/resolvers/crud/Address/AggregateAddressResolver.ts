import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { AggregateAddressArgs } from './args/AggregateAddressArgs';
import { Address } from '../../../models/Address';
import { AggregateAddress } from '../../outputs/AggregateAddress';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => Address)
export class AggregateAddressResolver {
  @TypeGraphQL.Query((_returns) => AggregateAddress, {
    nullable: false,
  })
  async aggregateAddress(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateAddressArgs
  ): Promise<AggregateAddress> {
    return getPrismaFromContext(ctx).address.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
