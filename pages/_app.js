import '../app/globals.css';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/apollo_client';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
