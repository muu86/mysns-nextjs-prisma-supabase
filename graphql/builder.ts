import SchemaBuilder from '@pothos/core';
import PrismaPlugin from '@pothos/plugin-prisma';
import PrismaTypes from '@pothos/plugin-prisma/generated';
import prisma from '@/lib/prisma';

export const builder = new SchemaBuilder<{
  // 3.
  PrismaTypes: PrismaTypes;
}>({
  // 4.
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
