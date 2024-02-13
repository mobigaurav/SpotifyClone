import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { PropsWithChildren } from 'react';

const client = new ApolloClient({
  uri: 'https://kualaterengganu.stepzen.net/api/brawny-shrimp/__graphql',
  headers: {
    Authorization:
      'apikey kualaterengganu::stepzen.net+1000::f3ae3429ad14309f3fe6029e8c80368d99ecf16a732c3151d787539dea0c394b',
  },
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: PropsWithChildren) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;