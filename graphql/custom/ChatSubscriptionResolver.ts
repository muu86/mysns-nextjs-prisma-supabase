import { Arg, Int, Resolver, Root, Subscription } from 'type-graphql';
import { ChatMessage } from '../generated/type-graphql';

@Resolver()
export class ChatSubscriptionResolver {
  @Subscription({
    topics: 'chat:message',
    topicId: ({ args }) => args.chatId,
  })
  chat(@Arg('chatId', () => Int) chatId: number, @Root() chatMessage: ChatMessage): ChatMessage {
    return chatMessage;
  }
}
