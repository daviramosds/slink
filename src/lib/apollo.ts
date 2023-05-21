import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://sa-east-1.cdn.hygraph.com/content/clfze0wa06xy101t79rf8c5vk/master",
  cache: new InMemoryCache(),
});
