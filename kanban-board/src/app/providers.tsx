"use client";
import { NhostReactProvider } from '@nhost/react';
import nhost from '../lib/nhost';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../lib/apollo-client';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NhostReactProvider nhost={nhost}>
      <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
    </NhostReactProvider>
  );
}
