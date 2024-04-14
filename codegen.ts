import type { CodegenConfig } from '@graphql-codegen/cli';
import { printSchema } from 'graphql';
import { schema } from './graphql/schema';

const config: CodegenConfig = {
  overwrite: true,
  schema: './graphql/generated/schema.graphql',
  // schema: printSchema(schema),
  documents: ['app/**/*.tsx', 'components/**/*.tsx'],
  generates: {
    'gql/': {
      preset: 'client',
      plugins: [],
    },
    './graphql/generated/schema.graphql': {
      plugins: ['schema-ast'],
    },
  },
};

export default config;
