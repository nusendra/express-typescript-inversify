import dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  mongoUrl: process.env.MONGODB_URL ?? "",
};
