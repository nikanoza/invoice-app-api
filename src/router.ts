import {
  createInvoice,
  deleteInvoice,
  getInvoices,
  updateInvoice,
} from "controller";
import express from "express";

const invoiceRouter = express.Router();

invoiceRouter.get("/invoices", getInvoices);
invoiceRouter.post("/invoices", createInvoice);
invoiceRouter.delete("/invoices/:id", deleteInvoice);
invoiceRouter.put("/invoices/:id", updateInvoice);

export default invoiceRouter;
