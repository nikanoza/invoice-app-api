import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connect from "./config/mongo.js";
import invoiceRouter from "router.js";

dotenv.config();
connect();

const app = express();

app.use("/api", cors(), invoiceRouter);

app.listen(process.env.PORT || 4000);
