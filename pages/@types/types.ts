import { schemaForm } from "../utils/schema";
import { z } from "zod";

export type IFormProps = z.infer<typeof schemaForm>;
export type IAddressProps = {
  bairro: string;
  logradouro: string;
  complemento: string;
  localidade: string;
  uf: string;
};
