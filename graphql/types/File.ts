import { builder } from '../builder';

builder.prismaObject('File', {
  fields: (t) => ({
    id: t.exposeID('id'),
    location: t.exposeString('location'),
    type: t.exposeString('type'),
  }),
});
