import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { AggregateChatUserArgs } from './args/AggregateChatUserArgs';
import { ChatUser } from '../../../models/ChatUser';
import { AggregateChatUser } from '../../outputs/AggregateChatUser';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => ChatUser)
export class AggregateChatUserResolver {
  @TypeGraphQL.Query((_returns) => AggregateChatUser, {
    nullable: false,
  })
  async aggregateChatUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateChatUserArgs
  ): Promise<AggregateChatUser> {
    return getPrismaFromContext(ctx).chatUser.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
