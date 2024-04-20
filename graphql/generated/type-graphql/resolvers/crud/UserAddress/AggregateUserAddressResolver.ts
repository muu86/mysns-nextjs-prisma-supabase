import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { AggregateUserAddressArgs } from './args/AggregateUserAddressArgs';
import { UserAddress } from '../../../models/UserAddress';
import { AggregateUserAddress } from '../../outputs/AggregateUserAddress';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => UserAddress)
export class AggregateUserAddressResolver {
  @TypeGraphQL.Query((_returns) => AggregateUserAddress, {
    nullable: false,
  })
  async aggregateUserAddress(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateUserAddressArgs
  ): Promise<AggregateUserAddress> {
    return getPrismaFromContext(ctx).userAddress.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
