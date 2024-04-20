import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { DeleteOneUserAddressArgs } from './args/DeleteOneUserAddressArgs';
import { UserAddress } from '../../../models/UserAddress';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => UserAddress)
export class DeleteOneUserAddressResolver {
  @TypeGraphQL.Mutation((_returns) => UserAddress, {
    nullable: true,
  })
  async deleteOneUserAddress(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneUserAddressArgs
  ): Promise<UserAddress | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAddress.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
