import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { UpsertOneUserAddressArgs } from './args/UpsertOneUserAddressArgs';
import { UserAddress } from '../../../models/UserAddress';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => UserAddress)
export class UpsertOneUserAddressResolver {
  @TypeGraphQL.Mutation((_returns) => UserAddress, {
    nullable: false,
  })
  async upsertOneUserAddress(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneUserAddressArgs
  ): Promise<UserAddress> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAddress.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
