import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { GroupByUserAddressArgs } from './args/GroupByUserAddressArgs';
import { UserAddress } from '../../../models/UserAddress';
import { UserAddressGroupBy } from '../../outputs/UserAddressGroupBy';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => UserAddress)
export class GroupByUserAddressResolver {
  @TypeGraphQL.Query((_returns) => [UserAddressGroupBy], {
    nullable: false,
  })
  async groupByUserAddress(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByUserAddressArgs
  ): Promise<UserAddressGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAddress.groupBy({
      ...args,
      ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
    });
  }
}
