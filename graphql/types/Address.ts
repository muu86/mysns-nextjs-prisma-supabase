import { builder } from '../builder';

builder.prismaObject('Address', {
  fields: (t) => ({
    id: t.exposeID('id'),
    code: t.exposeString('code'),
    c1: t.exposeString('c1'),
    c2: t.exposeString('c2', { nullable: true }),
    c3: t.exposeString('c3', { nullable: true }),
    c4: t.exposeString('c4', { nullable: true }),
  }),
});

builder.queryField('getAddress', (t) =>
  t.prismaField({
    type: ['Address'],
    resolve(q, p, a, c) {
      return prisma.address.findMany();
    },
  })
);
