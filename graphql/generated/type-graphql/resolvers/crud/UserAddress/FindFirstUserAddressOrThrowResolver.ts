import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { FindFirstUserAddressOrThrowArgs } from './args/FindFirstUserAddressOrThrowArgs';
import { UserAddress } from '../../../models/UserAddress';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => UserAddress)
export class FindFirstUserAddressOrThrowResolver {
  @TypeGraphQL.Query((_returns) => UserAddress, {
    nullable: true,
  })
  async findFirstUserAddressOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstUserAddressOrThrowArgs
  ): Promise<UserAddress | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAddress.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
