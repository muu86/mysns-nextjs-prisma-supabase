import { Args, Ctx, Info, Mutation, Resolver } from 'type-graphql';
import { ChatMessage, ChatMessageCrudResolver, CreateOneChatMessageArgs } from '../generated/type-graphql';
import type { GraphQLResolveInfo } from 'graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../generated/type-graphql/helpers';
import { pubSub } from './pubsub';

@Resolver()
export class CustomChatMessageCrudResolver extends ChatMessageCrudResolver {
  @Mutation((returns) => ChatMessage)
  async createOneChatMessage(
    @Ctx() ctx: any,
    @Info() info: GraphQLResolveInfo,
    @Args() args: CreateOneChatMessageArgs
  ): Promise<ChatMessage> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    const created: ChatMessage = await getPrismaFromContext(ctx).chatMessage.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });

    pubSub.publish('chat:message', created.chatId, created);

    return created;
  }
}
