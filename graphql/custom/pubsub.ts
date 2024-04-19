import { createPubSub } from '@graphql-yoga/subscription';
import { ChatMessage } from '../generated/type-graphql';

export const pubSub = createPubSub<{
  'chat:message': [chatId: number, payload: ChatMessage];
}>();
