import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { GroupByChatUserArgs } from './args/GroupByChatUserArgs';
import { ChatUser } from '../../../models/ChatUser';
import { ChatUserGroupBy } from '../../outputs/ChatUserGroupBy';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => ChatUser)
export class GroupByChatUserResolver {
  @TypeGraphQL.Query((_returns) => [ChatUserGroupBy], {
    nullable: false,
  })
  async groupByChatUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByChatUserArgs
  ): Promise<ChatUserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.groupBy({
      ...args,
      ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
    });
  }
}
