import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: Hello
  }
`;
export default typeDefs;
