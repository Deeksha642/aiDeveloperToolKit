import express from 'express';
import cors from "cors";
import morgan from 'morgan';

import apiRoutes from "./src/routes";
import { swaggerDocument, swaggerUi } from "./src/config/swagger";
import { errorHandler } from "./src/middlewares/errorHandler";
import { notFound } from "./src/middlewares/notFound";
const app = express();

app.use(cors());

app.use(morgan("dev"));


app.use(express.json());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use("/api/v1", apiRoutes);

app.use(notFound);

app.use(errorHandler);

export default app;