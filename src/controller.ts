import { Request, Response } from "express";
import { generateId } from "./helpers.js";
import { AddressT, InvoiceT, ItemT } from "types.js";
import invoiceSchema from "./invoice-schema.js";
import Invoice from "./Invoice.js";

export const getInvoices = async (_: Request, res: Response) => {
  const data: InvoiceT[] = await Invoice.find();

  const transformData = data.map((invoice: InvoiceT) => {
    const senderAddress: AddressT = {
      street: invoice.senderAddress.street,
      city: invoice.senderAddress.city,
      postCode: invoice.senderAddress.postCode,
      country: invoice.senderAddress.country,
    };

    const clientAddress: AddressT = {
      street: invoice.clientAddress.street,
      city: invoice.clientAddress.city,
      postCode: invoice.clientAddress.postCode,
      country: invoice.clientAddress.country,
    };

    const items = invoice.items.map((item: ItemT) => {
      return {
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        total: item.total,
      };
    });
    return {
      id: invoice.id,
      createdAt: invoice.createdAt,
      paymentDue: invoice.paymentDue,
      description: invoice.description,
      paymentTerms: invoice.paymentTerms,
      clientName: invoice.clientName,
      clientEmail: invoice.clientEmail,
      status: invoice.status,
      senderAddress: senderAddress,
      clientAddress: clientAddress,
      items: items,
      total: invoice.total,
    };
  });

  return res.status(200).json(transformData);
};

export const getInvoice = async (req: Request, res: Response) => {
  const { id } = req.params;

  const invoice = await Invoice.findOne({ id });

  if (!invoice) {
    return res
      .status(422)
      .json({ message: "there is no invoice with this id" });
  }

  const senderAddress: AddressT = {
    street: invoice.senderAddress.street,
    city: invoice.senderAddress.city,
    postCode: invoice.senderAddress.postCode,
    country: invoice.senderAddress.country,
  };

  const clientAddress: AddressT = {
    street: invoice.clientAddress.street,
    city: invoice.clientAddress.city,
    postCode: invoice.clientAddress.postCode,
    country: invoice.clientAddress.country,
  };

  const items = invoice.items.map((item: ItemT) => {
    return {
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      total: item.total,
    };
  });

  const data = {
    id: invoice.id,
    createdAt: invoice.createdAt,
    paymentDue: invoice.paymentDue,
    description: invoice.description,
    paymentTerms: invoice.paymentTerms,
    clientName: invoice.clientName,
    clientEmail: invoice.clientEmail,
    status: invoice.status,
    senderAddress: senderAddress,
    clientAddress: clientAddress,
    items: items,
    total: invoice.total,
  };

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

  const id = generateId();

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

export const updateInvoice = async (req: Request, res: Response) => {
  const { params, body } = req;

  const invoice = await Invoice.findOne({ id: params.id });

  if (!invoice) {
    return res
      .status(422)
      .json({ message: "there is no invoice with this id" });
  }

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

  await Invoice.findOneAndUpdate(
    { id: params.id },
    {
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
    }
  );

  return res.status(200).json({ message: "invoice update successfully" });
};

export const deleteInvoice = async (req: Request, res: Response) => {
  const { params } = req;

  const invoice = await Invoice.findOne({ id: params.id });

  if (!invoice) {
    return res
      .status(422)
      .json({ message: "there is no invoice with this id" });
  }

  await Invoice.findOneAndDelete({ id: params.id });

  return res.status(200).json({ message: "invoice removed successfully" });
};
