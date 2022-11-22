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

export type InvoiceT = {
  id: string;
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
