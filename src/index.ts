import "reflect-metadata";
import { InversifyExpressServer } from "inversify-express-utils";
import config from "./config";
import container from "./container/container";
import middlewares from "./middlewares";

(async () => {
  const server = new InversifyExpressServer(container);

  server
    .setConfig((app) => {
      middlewares(app, container);
    })
    .build()
    .listen(config.port, () =>
      console.log(`server runnin on port ${config.port}`)
    );
})();
