import { Schema, model } from "mongoose";
import { AddressT, InvoiceT, ItemT } from "types";

const itemSchema = new Schema<ItemT>({
  name: {
    type: Schema.Types.String,
    required: true,
  },
  quantity: {
    type: Schema.Types.Number,
    required: true,
  },
  price: {
    type: Schema.Types.Number,
    required: true,
  },
  total: {
    type: Schema.Types.Number,
    required: true,
  },
});

const InvoiceSchema = new Schema<InvoiceT>({
  id: {
    type: Schema.Types.String,
    required: true,
  },
  createdAt: {
    type: Schema.Types.String,
    required: true,
  },
  paymentDue: {
    type: Schema.Types.String,
    required: true,
  },
  description: {
    type: Schema.Types.String,
    required: true,
  },
  paymentTerms: {
    type: Schema.Types.Number,
    required: true,
  },
  clientName: {
    type: Schema.Types.String,
    required: true,
  },
  clientEmail: {
    type: Schema.Types.String,
    required: true,
  },
  status: {
    type: Schema.Types.String,
    required: true,
  },
  senderAddress: new Schema<AddressT>({
    street: {
      type: Schema.Types.String,
      required: true,
    },
    city: {
      type: Schema.Types.String,
      required: true,
    },
    postCode: {
      type: Schema.Types.String,
      required: true,
    },
    country: {
      type: Schema.Types.String,
      required: true,
    },
  }),
  clientAddress: new Schema<AddressT>({
    street: {
      type: Schema.Types.String,
      required: true,
    },
    city: {
      type: Schema.Types.String,
      required: true,
    },
    postCode: {
      type: Schema.Types.String,
      required: true,
    },
    country: {
      type: Schema.Types.String,
      required: true,
    },
  }),
  items: {
    type: [itemSchema],
    required: true,
  },
  total: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Invoice = model<InvoiceT>("Invoice", InvoiceSchema);

export default Invoice;
