import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { Chat } from '../../../models/Chat';
import { ChatMessage } from '../../../models/ChatMessage';
import { User } from '../../../models/User';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => ChatMessage)
export class ChatMessageRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() chatMessage: ChatMessage,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo
  ): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .chatMessage.findUniqueOrThrow({
        where: {
          id: chatMessage.id,
        },
      })
      .user({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => Chat, {
    nullable: false,
  })
  async chat(
    @TypeGraphQL.Root() chatMessage: ChatMessage,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo
  ): Promise<Chat> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .chatMessage.findUniqueOrThrow({
        where: {
          id: chatMessage.id,
        },
      })
      .chat({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
