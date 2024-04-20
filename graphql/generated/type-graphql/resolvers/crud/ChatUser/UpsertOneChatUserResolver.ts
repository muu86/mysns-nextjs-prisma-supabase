import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { UpsertOneChatUserArgs } from './args/UpsertOneChatUserArgs';
import { ChatUser } from '../../../models/ChatUser';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => ChatUser)
export class UpsertOneChatUserResolver {
  @TypeGraphQL.Mutation((_returns) => ChatUser, {
    nullable: false,
  })
  async upsertOneChatUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneChatUserArgs
  ): Promise<ChatUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
