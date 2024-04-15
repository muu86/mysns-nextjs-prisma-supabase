import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './graphql/schema.graphql',
  // schema: printSchema(schema),
  documents: ['app/**/*.tsx', 'components/**/*.tsx'],
  generates: {
    'gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
