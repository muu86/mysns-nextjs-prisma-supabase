import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { Chat } from '../../../models/Chat';
import { ChatUser } from '../../../models/ChatUser';
import { User } from '../../../models/User';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';

@TypeGraphQL.Resolver((_of) => ChatUser)
export class ChatUserRelationsResolver {
  @TypeGraphQL.FieldResolver((_type) => Chat, {
    nullable: false,
  })
  async chat(
    @TypeGraphQL.Root() chatUser: ChatUser,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo
  ): Promise<Chat> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .chatUser.findUniqueOrThrow({
        where: {
          id: chatUser.id,
        },
      })
      .chat({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver((_type) => User, {
    nullable: false,
  })
  async user(
    @TypeGraphQL.Root() chatUser: ChatUser,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo
  ): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .chatUser.findUniqueOrThrow({
        where: {
          id: chatUser.id,
        },
      })
      .user({
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
