// Next.js Custom Route Handler: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
// import { schema } from '@/graphql-pothos/schema';
import { createSchema, createYoga } from 'graphql-yoga';

import prisma from '@/lib/prisma';
import { schema } from '@/graphql/schema';

const { handleRequest } = createYoga({
  schema: schema,
  // schema: createSchema({
  //   typeDefs: /* GraphQL */ `
  //     type Query {
  //       hello: String
  //     }

  //     type Subscription {
  //       countdown(from: Int!): Int!
  //     }
  //   `,
  //   resolvers: {
  //     Query: {
  //       hello: () => 'world',
  //     },
  //     Subscription: {
  //       countdown: {
  //         // This will return the value on every 1 sec until it reaches 0
  //         subscribe: async function* (_, { from }) {
  //           for (let i = from; i >= 0; i--) {
  //             await new Promise((resolve) => setTimeout(resolve, 1000));
  //             yield { countdown: i };
  //           }
  //         },
  //       },
  //     },
  //   },
  // }),

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: '/api/graphql',

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },

  context: () => {
    return {
      prisma,
    };
  },
});

export { handleRequest as GET, handleRequest as OPTIONS, handleRequest as POST };
