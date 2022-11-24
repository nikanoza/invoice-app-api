import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import invoiceSchema from "./invoice-schema.js";
import Invoice from "./Invoice.js";

export const getInvoices = async (_: Request, res: Response) => {
  const data = await Invoice.find();

  return res.status(200).json(data);
};

export const createInvoice = async (req: Request, res: Response) => {
  const { body } = req;

  const validator = await invoiceSchema(body);
  const { value, error } = validator.validate(body);

  if (error) {
    return res.status(422).json(error.details);
  }

  const {
    createdAt,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    senderAddress,
    clientAddress,
    items,
    total,
  } = value;

  const id = uuidv4();

  const newInvoice = {
    id,
    createdAt,
    paymentDue,
    description,
    paymentTerms,
    clientName,
    clientEmail,
    status,
    senderAddress: {
      street: senderAddress.street,
      city: senderAddress.city,
      postCode: senderAddress.postCode,
      country: senderAddress.country,
    },
    clientAddress: {
      street: clientAddress.street,
      city: clientAddress.city,
      postCode: clientAddress.postCode,
      country: clientAddress.country,
    },
    items,
    total,
  };

  await Invoice.create({ ...newInvoice });

  return res.status(201).json({ ...newInvoice });
};
