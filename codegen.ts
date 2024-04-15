import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './graphql/schema.graphql',
  // schema: printSchema(schema),
  documents: ['actions/**/*.ts', 'app/**/*.tsx', 'components/**/*.tsx'],
  generates: {
    'graphql/generated/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
