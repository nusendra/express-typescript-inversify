import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Hello {
    name: String
  }
`;

export default typeDefs;
