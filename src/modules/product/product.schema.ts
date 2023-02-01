import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Product {
    name: String
  }
`;

export default typeDefs;
