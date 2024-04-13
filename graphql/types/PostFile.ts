import { builder } from '../builder';

builder.prismaObject('PostFile', {
  fields: (t) => ({
    id: t.exposeID('id'),
    post: t.relation('post'),
    file: t.relation('file'),
  }),
});
