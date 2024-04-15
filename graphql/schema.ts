import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { resolvers } from '@/graphql/generated/type-graphql';
import path from 'path';

export const schema = await buildSchema({
  resolvers,
  validate: false,
  emitSchemaFile: {
    path: path.join(process.cwd(), './graphql/schema.graphql'),
  },
});
