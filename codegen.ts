import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './graphql/schema.graphql',
  documents: ['actions/**/*.ts', 'app/**/*.tsx', 'components/**/*.tsx', 'graphql/query/**/*.ts'],
  generates: {
    'graphql/generated/gql/': {
      preset: 'client',
      plugins: [],
    },
  },
};

export default config;
