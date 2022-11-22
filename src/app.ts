import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connect from "./config/mongo.js";
import invoiceRouter from "./router.js";
import swaggerMiddleware from "./swagger.js";

dotenv.config();
connect();

const app = express();

app.use("/api", cors(), invoiceRouter);
app.use("/", ...swaggerMiddleware);

app.listen(process.env.PORT || 4000);
