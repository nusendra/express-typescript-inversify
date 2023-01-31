import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import { DbConnection } from "./db/utils/connection";
import config from "./config";
import container from "./container/container";
import middlewares from "./middlewares";

DbConnection.initConnection().then(() => {
  DbConnection.setAutoReconnect();

  const server = new InversifyExpressServer(container);

  server
    .setConfig((app) => {
      middlewares(app, container);
    })
    .build()
    .listen(config.port, () =>
      console.log(`server runnin on port ${config.port}`)
    );
});
