import {
  createInvoice,
  deleteInvoice,
  getInvoice,
  getInvoices,
  updateInvoice,
} from "controller";
import express from "express";

const invoiceRouter = express.Router();

invoiceRouter.get("/invoices", getInvoices);
invoiceRouter.post("/invoices", createInvoice);
invoiceRouter.delete("/invoices/:id", deleteInvoice);
invoiceRouter.put("/invoices/:id", updateInvoice);
invoiceRouter.get("/invoices/:id", getInvoice);

export default invoiceRouter;
