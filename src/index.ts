import "reflect-metadata";
import { DbConnection } from "./db/utils/connection";
import { Server } from "./server";
import { TYPES } from "./container/types";
import container from "./container/container";

DbConnection.initConnection().then(() => {
  DbConnection.setAutoReconnect();

  container.get<Server>(TYPES.Server).start();
});
