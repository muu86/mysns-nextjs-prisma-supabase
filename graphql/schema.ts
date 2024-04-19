import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { resolvers } from '@/graphql/generated/type-graphql';
import path from 'path';
import { pubSub } from './custom/pubsub';
import { ChatSubscriptionResolver } from './custom';

export const schema = await buildSchema({
  resolvers: [...resolvers, ChatSubscriptionResolver],
  validate: false,
  emitSchemaFile: {
    path: path.join(process.cwd(), './graphql/schema.graphql'),
  },
  pubSub: pubSub,
});
