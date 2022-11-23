import { Request, Response } from "express";
import Invoice from "./Invoice.js";

export const getInvoices = async (req: Request, res: Response) => {
  const data = await Invoice.find();

  return res.status(200).json(data);
};
