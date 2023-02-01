import { ApolloServer } from "apollo-server-express";
import { Express } from "express";
import config from "./config";
import { injectable } from "inversify";
import { Resolvers } from "./resolvers/index";
import { makeExecutableSchema } from "@graphql-tools/schema";
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageDisabled,
} from "apollo-server-core";
import { aggregatedSchemas } from "./schemas";

@injectable()
export class GraphqlServer {
  private app: Express;
  public set express(x: Express) {
    this.app = x;
  }

  async start(): Promise<void> {
    const resolvers = new Resolvers();
    const schema = makeExecutableSchema({
      resolvers: resolvers.getAll(),
      typeDefs: aggregatedSchemas,
    });

    const server = new ApolloServer({
      schema,
      plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({}),
        ApolloServerPluginLandingPageDisabled(),
      ],
    });
    await server.start();

    server.applyMiddleware({ app: this.app, path: "/graphql" });

    this.app.listen(config.port, () => {
      console.log(`app running in port ${config.port}`);
    });
  }
}
