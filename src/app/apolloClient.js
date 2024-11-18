import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://localhost:4000/graphql", // Replace with your GraphQL backend URL
  uri: "https://bookhive-backend-2s6u.onrender.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
