import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import PrismaTypes from '@pothos/plugin-prisma/generated';
import prisma from '../lib/prisma';
import { DateResolver } from 'graphql-scalars';

export const builder = new SchemaBuilder<{
  PrismaTypes: PrismaTypes;
  Scalars: {
    Date: {
      Input: String;
      Output: Date;
    };
  };
}>({
  plugins: [PrismaPlugin],
  prisma: {
    client: prisma,
  },
});

builder.queryType({
  fields: (t) => ({
    ok: t.boolean({
      resolve: () => true,
    }),
  }),
});

builder.mutationType({});

builder.addScalarType('Date', DateResolver);
