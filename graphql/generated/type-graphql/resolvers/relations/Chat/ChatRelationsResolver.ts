import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { Chat } from '../../../models/Chat';
import { ChatMessage } from '../../../models/ChatMessage';
import { ChatUser } from '../../../models/ChatUser';
import { ChatMessagesArgs } from './args/ChatMessagesArgs';
import { ChatUsersArgs } from './args/ChatUsersArgs';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => Chat)
export class ChatRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => [ChatMessage], {
    nullable: false,
  })
  async messages(
    @TypeGraphQL.Root() chat: Chat,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ChatMessagesArgs
  ): Promise<ChatMessage[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .chat.findUniqueOrThrow({
        where: {
          id: chat.id,
        },
      })
      .messages({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => [ChatUser], {
    nullable: false,
  })
  async users(
    @TypeGraphQL.Root() chat: Chat,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ChatUsersArgs
  ): Promise<ChatUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .chat.findUniqueOrThrow({
        where: {
          id: chat.id,
        },
      })
      .users({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
