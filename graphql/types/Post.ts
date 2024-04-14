import { Post } from '@prisma/client';
import { builder } from '../builder';

builder.prismaObject('Post', {
  fields: (t) => ({
    id: t.exposeID('id'),
    content: t.exposeString('content'),
    address: t.relation('address'),
    files: t.relation('files'),
  }),
});

builder.prismaObject('PostFile', {
  fields: (t) => ({
    id: t.exposeID('id'),
    post: t.relation('post'),
    file: t.relation('file'),
  }),
});

builder.queryField('getPosts', (t) =>
  t.prismaField({
    type: ['Post'],
    resolve: async (q, p, a, c, i) => {
      const code = '1111010100';
      const distance = 1000;
      return await prisma.$queryRaw<Post[]>`
        SELECT p.id, p.content, p.address_id FROM post p
        JOIN address a ON p.address_id = a.id
        JOIN LATERAL (SELECT aa.center_p FROM address aa WHERE aa.code = ${code}) aa on true 
        WHERE st_dwithin(a.center_p, aa.center_p, ${distance}) = true
        ORDER BY st_distance(a.center_p, aa.center_p) ASC
        `;
    },
  })
);

builder.mutationField('createPost', (t) =>
  t.prismaField({
    type: 'Post',
    args: {
      content: t.arg.string({ required: true }),
      addressCode: t.arg.string({ required: true }),
      fileKeys: t.arg.stringList({ required: true }),
    },
    resolve: async (q, r, a) => {
      return prisma.post.create({
        data: {
          content: a.content,
          address: {
            connect: {
              code: a.addressCode,
            },
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
          address: true,
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
