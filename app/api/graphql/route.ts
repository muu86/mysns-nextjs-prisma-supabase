// Next.js Custom Route Handler: https://nextjs.org/docs/app/building-your-application/routing/router-handlers
import { schema } from '@/graphql/schema';
import { createYoga } from 'graphql-yoga';

const { handleRequest } = createYoga({
  schema: schema,

  // While using Next.js file convention for routing, we need to configure Yoga to use the correct endpoint
  graphqlEndpoint: '/api/graphql',

  // Yoga needs to know how to create a valid Next response
  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as OPTIONS, handleRequest as POST };
