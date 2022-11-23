import { getInvoices } from "controller";
import express from "express";

const invoiceRouter = express.Router();

invoiceRouter.get("/invoices", getInvoices);

export default invoiceRouter;
