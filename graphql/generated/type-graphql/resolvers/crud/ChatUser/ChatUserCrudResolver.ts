import * as TypeGraphQL from 'type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import { AggregateChatUserArgs } from './args/AggregateChatUserArgs';
import { CreateManyChatUserArgs } from './args/CreateManyChatUserArgs';
import { CreateOneChatUserArgs } from './args/CreateOneChatUserArgs';
import { DeleteManyChatUserArgs } from './args/DeleteManyChatUserArgs';
import { DeleteOneChatUserArgs } from './args/DeleteOneChatUserArgs';
import { FindFirstChatUserArgs } from './args/FindFirstChatUserArgs';
import { FindFirstChatUserOrThrowArgs } from './args/FindFirstChatUserOrThrowArgs';
import { FindManyChatUserArgs } from './args/FindManyChatUserArgs';
import { FindUniqueChatUserArgs } from './args/FindUniqueChatUserArgs';
import { FindUniqueChatUserOrThrowArgs } from './args/FindUniqueChatUserOrThrowArgs';
import { GroupByChatUserArgs } from './args/GroupByChatUserArgs';
import { UpdateManyChatUserArgs } from './args/UpdateManyChatUserArgs';
import { UpdateOneChatUserArgs } from './args/UpdateOneChatUserArgs';
import { UpsertOneChatUserArgs } from './args/UpsertOneChatUserArgs';
import {
  transformInfoIntoPrismaArgs,
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
} from '../../../helpers';
import { ChatUser } from '../../../models/ChatUser';
import { AffectedRowsOutput } from '../../outputs/AffectedRowsOutput';
import { AggregateChatUser } from '../../outputs/AggregateChatUser';
import { ChatUserGroupBy } from '../../outputs/ChatUserGroupBy';

@TypeGraphQL.Resolver((_of) => ChatUser)
export class ChatUserCrudResolver {
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

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async createManyChatUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateManyChatUserArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ChatUser, {
    nullable: false,
  })
  async createOneChatUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneChatUserArgs
  ): Promise<ChatUser> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async deleteManyChatUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteManyChatUserArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation((_returns) => ChatUser, {
    nullable: true,
  })
  async deleteOneChatUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneChatUserArgs
  ): Promise<ChatUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => ChatUser, {
    nullable: true,
  })
  async findFirstChatUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstChatUserArgs
  ): Promise<ChatUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => ChatUser, {
    nullable: true,
  })
  async findFirstChatUserOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstChatUserOrThrowArgs
  ): Promise<ChatUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => [ChatUser], {
    nullable: false,
  })
  async chatUsers(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyChatUserArgs
  ): Promise<ChatUser[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query((_returns) => ChatUser, {
    nullable: true,
  })
  async chatUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueChatUserArgs
  ): Promise<ChatUser | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Mutation((_returns) => AffectedRowsOutput, {
    nullable: false,
  })
  async updateManyChatUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateManyChatUserArgs
  ): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).chatUser.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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
