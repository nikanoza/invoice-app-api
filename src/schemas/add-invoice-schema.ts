import Joi from "joi";
import { AddressT, ItemT, NewInvoice } from "types";

const addInvoiceSchema = (data: NewInvoice) => {
  return Joi.object<NewInvoice>({
    createdAt: Joi.string()
      .pattern(/^\d{4}[-]\d{2}[-]\d{2}$/)
      .required()
      .messages({
        "string.base": "date of creation must be a string",
        "string.pattern": "date of creation must be yyyy-mm-dd format",
        "any.required": "this field is required",
      }),
    paymentDue: Joi.string()
      .pattern(/^\d{4}[-]\d{2}[-]\d{2}$/)
      .required()
      .messages({
        "string.base": "date of payment must be a string",
        "string.pattern": "date of payment must be yyyy-mm-dd format",
        "any.required": "this field is required",
      }),
    description: Joi.string().min(3).required().messages({
      "string.base": "description must be a string",
      "string.min": "description must includes 3 or more characters",
      "any.required": "this field is required",
    }),
    paymentTerms: Joi.number().required().messages({
      "number.base": "payment terms must be a number",
      "any.required": "this field is required",
    }),
    clientName: Joi.string().required().messages({
      "string.base": "client name must be a string",
      "any.required": "this field is required",
    }),
    clientEmail: Joi.string().email().required().messages({
      "string.base": "client email must be a string",
      "string.email": "client email must be email format",
      "any.required": "this field is required",
    }),
    status: Joi.string().valid("paid", "pending", "draft").required().messages({
      "string.base": "status must be a string",
      "string.valid": "status must be one of : 'paid', 'pending', 'draft'",
      "any.required": "this field is required",
    }),
    senderAddress: Joi.object<AddressT>({
      street: Joi.string().required().messages({
        "string.base": "street must be a string",
        "any.required": "this field is required",
      }),
      city: Joi.string().required().messages({
        "string.base": "city must be a string",
        "any.required": "this field is required",
      }),
      postCode: Joi.string().required().messages({
        "string.base": "post code must be a string",
        "any.required": "this field is required",
      }),
      country: Joi.string().required().messages({
        "string.base": "country must be a string",
        "any.required": "this field is required",
      }),
    }),
    clientAddress: Joi.object<AddressT>({
      street: Joi.string().required().messages({
        "string.base": "street must be a string",
        "any.required": "this field is required",
      }),
      city: Joi.string().required().messages({
        "string.base": "city must be a string",
        "any.required": "this field is required",
      }),
      postCode: Joi.string().required().messages({
        "string.base": "post code must be a string",
        "any.required": "this field is required",
      }),
      country: Joi.string().required().messages({
        "string.base": "country must be a string",
        "any.required": "this field is required",
      }),
    }),
    items: Joi.array().items(
      Joi.object<ItemT>({
        name: Joi.string().required().messages({
          "string.base": "name code must be a string",
          "any.required": "this field is required",
        }),
        quantity: Joi.number().required().messages({
          "number.base": "quantity code must be a number",
          "any.required": "this field is required",
        }),
        price: Joi.number().required().messages({
          "number.base": "price code must be a number",
          "any.required": "this field is required",
        }),
        total: Joi.number().required().messages({
          "number.base": "total code must be a number",
          "any.required": "this field is required",
        }),
      })
    ),
    total: Joi.number().required().messages({
      "number.base": "total code must be a number",
      "any.required": "this field is required",
    }),
  });
};
