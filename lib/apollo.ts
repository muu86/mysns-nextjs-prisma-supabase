import { ApolloClient, HttpLink, InMemoryCache, split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

import { ApolloLink, Operation, FetchResult, Observable } from '@apollo/client/core';
import { print, GraphQLError } from 'graphql';
import { createClient, ClientOptions, Client } from 'graphql-sse';

const httpLink = new HttpLink({
  // this needs to be an absolute url, as relative urls cannot be used in SSR
  uri: 'http://localhost:3000/api/graphql',
  // you can disable result caching here if you want to
  // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
  // fetchOptions: { cache: "no-store" },
});

// const wsLink = new GraphQLWsLink(
//   createClient({
//     url: 'ws://localhost:3000/subscriptions',
//   })
// );

class SSELink extends ApolloLink {
  private client: Client;

  constructor(options: ClientOptions) {
    super();
    this.client = createClient(options);
  }

  public request(operation: Operation): Observable<FetchResult> {
    return new Observable((sink) => {
      return this.client.subscribe<FetchResult>(
        { ...operation, query: print(operation.query) },
        {
          next: sink.next.bind(sink),
          complete: sink.complete.bind(sink),
          error: sink.error.bind(sink),
        }
      );
    });
  }
}

export const sseLink = new SSELink({
  url: 'http://localhost:3000/api/graphql',
  // headers: () => {
  //   const session = getSession();
  //   if (!session) return {};
  //   return {
  //     Authorization: `Bearer ${session.token}`,
  //   };
  // },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  sseLink,
  httpLink
);

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: splitLink,
  });
});
