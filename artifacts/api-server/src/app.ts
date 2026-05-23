import express, { type Express } from "express";
import cors from "cors";
import pino from "pino";
import router from "./routes";
import { logger } from "./lib/logger";

declare module "http" {
  interface IncomingMessage {
    log: pino.Logger;
  }
}

const app: Express = express();

// Custom request logger middleware (replaces pino-http dependency)
app.use((req, res, next) => {
  req.log = logger;

  const start = Date.now();
  const urlPath = req.url?.split("?")[0];

  res.on("finish", () => {
    const responseTime = Date.now() - start;
    logger.info(
      {
        req: {
          method: req.method,
          url: urlPath,
        },
        res: {
          statusCode: res.statusCode,
        },
        responseTime,
      },
      "request completed"
    );
  });

  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
