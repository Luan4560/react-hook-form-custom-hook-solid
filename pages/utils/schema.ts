import { z } from "zod";

export const schemaForm = z
  .object({
    address: z.object({
      zipCode: z.string().min(9, "Por favor, insira um CEP válido"),
      street: z.string().min(1, "Por favor, insira uma rua válida"),
      number: z.string(),
      district: z.string().min(1, "Por favor, insira um bairro válido"),
      complement: z.string(),
      city: z.string().min(1, "Por favor, insira uma cidade válida"),
      state: z.string().min(1, "Por favor, insira um estado válido"),
    }),
  })
  .transform((field) => ({
    address: {
      zipCode: field.address.zipCode,
      street: field.address.street,
      number: field.address.number,
      district: field.address.district,
      complement: field.address.complement,
      city: field.address.city,
      state: field.address.state,
    },
  }));