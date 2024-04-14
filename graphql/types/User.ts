import { User } from '@prisma/client';
import { builder } from '../builder';

builder.prismaObject('User', {
  fields: (t) => ({
    id: t.exposeID('id'),
    username: t.exposeString('username'),
    babyBirth: t.expose('babyBirth', {
      type: 'Date',
      nullable: true,
    }),
    content: t.exposeString('content', { nullable: true }),
    addresses: t.relation('addresses'),
    files: t.relation('files'),
  }),
});

builder.prismaObject('UserFile', {
  fields: (t) => ({
    id: t.exposeID('id'),
    user: t.relation('user'),
    file: t.relation('file'),
  }),
});

builder.prismaObject('UserAddress', {
  fields: (t) => ({
    id: t.exposeID('id'),
    user: t.relation('user'),
    address: t.relation('address'),
  }),
});

builder.queryField('getUser', (t) =>
  t.prismaField({
    type: 'User',
    args: {
      username: t.arg.string({ required: true }),
    },
    resolve: async (q, p, a, c, i) => {
      return prisma.user.findUniqueOrThrow({
        where: {
          username: a.username,
        },
        ...q,
      });
    },
  })
);

builder.mutationField('createUser', (t) =>
  t.prismaField({
    type: 'User',
    args: {
      username: t.arg.string({ required: true }),
      babyBirth: t.arg({
        type: 'Date',
      }),
      content: t.arg.string(),
      addressIds: t.arg.idList({ required: true }),
      fileKeys: t.arg.stringList({ required: true }),
    },
    resolve: async (q, r, a) => {
      return prisma.user.create({
        data: {
          username: a.username,
          content: a.content,
          addresses: {
            create: a.addressIds.map((aid) => ({
              address: {
                connect: { id: +aid },
              },
            })),
          },
          files: {
            create: a.fileKeys.map((fk) => ({
              file: {
                create: {
                  location: fk,
                },
              },
            })),
          },
        },
        include: {
          addresses: {
            include: {
              address: true,
            },
          },
          files: {
            include: {
              file: true,
            },
          },
        },
      });
    },
  })
);
