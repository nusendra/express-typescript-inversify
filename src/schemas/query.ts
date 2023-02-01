import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Query {
    hello: Hello
    product: Product
  }
`;
export default typeDefs;
