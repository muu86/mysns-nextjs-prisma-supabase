import 'reflect-metadata';
import { NonEmptyArray, buildSchema } from 'type-graphql';
import { ChatMessageCrudResolver, resolvers } from '@/graphql/generated/type-graphql';
import path from 'path';
import { pubSub } from './custom/pubsub';
import { ChatSubscriptionResolver } from './custom';
import { CustomChatMessageCrudResolver } from './custom/CustomChatMessageCrudResolver';
import { CustomFileUrl } from './custom/CustomFileUrl';
import { CustomFileResolver } from './custom/CustomFileResolver';

const filtered = resolvers.filter((r) => r.name !== ChatMessageCrudResolver.name) as NonEmptyArray<Function>;

export const schema = await buildSchema({
  resolvers: [...filtered, CustomChatMessageCrudResolver, ChatSubscriptionResolver, CustomFileUrl, CustomFileResolver],
  validate: false,
  // emitSchemaFile: {
  //   path: path.join(process.cwd(), './graphql/schema.graphql'),
  // },
  pubSub: pubSub,
});
