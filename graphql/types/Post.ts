import { Post } from '@prisma/client';
import { builder } from '../builder';

builder.prismaObject('Post', {
  fields: (t) => ({
    id: t.exposeID('id'),
    content: t.exposeString('content'),
    address: t.relation('address'),
  }),
});

builder.queryField('posts', (t) =>
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
      content: t.arg.string(),
      addressCode: t.arg.string(),
    },
    resolve: async (q, r, a) => {
      const address = await prisma.address.findUnique({
        where: {
          code: a.addressCode!,
        },
      });
      if (!address) throw new Error('주소를 찾을 수 없습니다.');

      const post = {
        content: a.content!,
        addressId: address.id!,
      };

      return await prisma.post.create({
        data: post,
      });
    },
  })
);
