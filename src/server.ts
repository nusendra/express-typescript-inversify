import { inject, injectable } from "inversify";
import { GraphqlServer } from "./graphql";
import { json, urlencoded } from "express";
import helmet from "helmet";
import express, { Express } from "express";
import { TYPES } from "./container/types";
import config from "./config";

@injectable()
export class Server {
  public expressServer: Express;

  constructor(
    @inject(TYPES.GraphQLServer) private graphqlServer: GraphqlServer
  ) {
    this.expressServer = express();
    this.expressServer.use(json());
    this.expressServer.use(urlencoded({ extended: true }));
    this.expressServer.use(
      helmet({
        contentSecurityPolicy:
          config.nodeEnv === "production" ? undefined : false,
      })
    );
    this.graphqlServer.express = this.expressServer;
  }

  public start(): void {
    this.graphqlServer.start();
  }
}
