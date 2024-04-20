import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { Address } from '../../../models/Address';
import { Post } from '../../../models/Post';
import { UserAddress } from '../../../models/UserAddress';
import { AddressPostsArgs } from './args/AddressPostsArgs';
import { AddressUsersArgs } from './args/AddressUsersArgs';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => Address)
export class AddressRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [Post], {
    nullable: false,
  })
  async posts(
    @TypeGraphQL.Root() address: Address,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AddressPostsArgs
  ): Promise<Post[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .address.findUniqueOrThrow({
        where: {
          id: address.id,
        },
      })
      .posts({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [UserAddress], {
    nullable: false,
  })
  async users(
    @TypeGraphQL.Root() address: Address,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AddressUsersArgs
  ): Promise<UserAddress[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .address.findUniqueOrThrow({
        where: {
          id: address.id,
        },
      })
      .users({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
