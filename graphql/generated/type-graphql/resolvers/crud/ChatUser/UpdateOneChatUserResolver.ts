import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { UpdateOneChatUserArgs } from './args/UpdateOneChatUserArgs';
import { ChatUser } from '../../../models/ChatUser';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => ChatUser)
export class UpdateOneChatUserResolver {
  @TypeGraphQL.Mutation((_returns) => ChatUser, {
    nullable: true,
  })
  async updateOneChatUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneChatUserArgs
  ): Promise<ChatUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
