import express from "express";
import dotenv from "dotenv";

import connect from "./config/mongo.js";

dotenv.config();
connect();

const app = express();

app.listen(process.env.PORT || 4000);
