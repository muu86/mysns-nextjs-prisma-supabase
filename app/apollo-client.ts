import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const httpLink = new HttpLink({
  // this needs to be an absolute url, as relative urls cannot be used in SSR
  uri:
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
      ? `${process.env.NEXT_PUBLIC_MY_VERCEL_URL}/api/graphql`
      : 'http://localhost:3000/api/graphql',
  // you can disable result caching here if you want to
  // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
  // fetchOptions: { cache: "no-store" },
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: httpLink,
  });
});