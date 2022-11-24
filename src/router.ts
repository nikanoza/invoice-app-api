import { createInvoice, getInvoices } from "controller";
import express from "express";

const invoiceRouter = express.Router();

invoiceRouter.get("/invoices", getInvoices);
invoiceRouter.post("/invoices", createInvoice);

export default invoiceRouter;
