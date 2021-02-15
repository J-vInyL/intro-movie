import ApolloClient from "apollo-boost";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const Client = new ApolloClient({
  link: createHttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: new InMemoryCache()
});

export default Client;
