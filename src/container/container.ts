import { Container } from "inversify";
import "../modules/index.controller";

const container = new Container({ defaultScope: "Singleton" });

export default container;
