import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { CreateOneUserAddressArgs } from './args/CreateOneUserAddressArgs';
import { UserAddress } from '../../../models/UserAddress';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => UserAddress)
export class CreateOneUserAddressResolver {
  @TypeGraphQL.Mutation((_returns) => UserAddress, {
    nullable: false,
  })
  async createOneUserAddress(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneUserAddressArgs
  ): Promise<UserAddress> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).userAddress.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
