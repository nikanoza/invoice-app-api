export type ItemT = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export type AddressT = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type NewInvoice = {
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: AddressT;
  clientAddress: AddressT;
  items: ItemT[];
  total: number;
};

export interface InvoiceT extends NewInvoice {
  id: string;
}
