import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { DbConnection } from "./db/utils/connection";
import { json, urlencoded } from "express";
import helmet from "helmet";
import config from "./config";
import container from "./container/container";

DbConnection.initConnection().then(() => {
  DbConnection.setAutoReconnect();

  const server = new InversifyExpressServer(container);

  server
    .setConfig((app) => {
      app.use(json());
      app.use(urlencoded({ extended: true }));
      app.use(helmet());
    })
    .build()
    .listen(config.port, () =>
      console.log(`server runnin on port ${config.port}`)
    );
});
