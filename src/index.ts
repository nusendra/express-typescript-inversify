import express, { Express, Request, Response } from "express";
import routes from "./routes";
import config from "./config/index";

const app: Express = express();
const port = config.port;

app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
