import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { FindUniqueChatUserOrThrowArgs } from './args/FindUniqueChatUserOrThrowArgs';
import { ChatUser } from '../../../models/ChatUser';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => ChatUser)
export class FindUniqueChatUserOrThrowResolver {
  @TypeGraphQL.Query((_returns) => ChatUser, {
    nullable: true,
  })
  async getChatUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueChatUserOrThrowArgs
  ): Promise<ChatUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
