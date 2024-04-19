import { Arg, Resolver, Root, Subscription } from 'type-graphql';
import { ChatMessage } from '../generated/type-graphql';

@Resolver()
export class ChatSubscriptionResolver {
  @Subscription({
    topics: 'chat:message',
    topicId: ({ args }) => args.chatId,
  })
  toChat(@Arg('chatId') chatId: number, @Root() chatMessage: ChatMessage): ChatMessage {
    return chatMessage;
  }
}
