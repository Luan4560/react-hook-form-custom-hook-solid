import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { schemaForm } from "../utils/schema";
import { IAddressProps, IFormProps } from "../@types/types";
import { useCallback, useEffect } from "react";
import { zipCodeMask } from "../utils/utils";

export const useCep = () => {

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schemaForm),
    defaultValues: {
      address: {
        zipCode: "",
        street: "",
        number: "",
        district: "",
        complement: "",
        city: "",
        state: "",
      },
    },
  });

  const zipCode = watch("address.zipCode");

  const handleSubmitForm = (data: IFormProps) => {
    console.log(data);
  };

  const handleSetData = useCallback(
    (data: IAddressProps) => {
      setValue("address.street", data.logradouro);
      setValue("address.district", data.bairro);
      setValue("address.complement", data.complemento);
      setValue("address.city", data.localidade);
      setValue("address.state", data.uf);
    },
    [setValue]
  );

  const handleFechAdrress = useCallback(
    async (zipCode: string) => {
      const response = await fetch(`https://viacep.com.br/ws/${zipCode}/json/`);
      const data = await response.json();

      if (data.erro) {
        alert("CEP não encontrado");
        return;
      }

      handleSetData(data);
    },
    [handleSetData]
  );

  useEffect(() => {
    setValue("address.zipCode", zipCodeMask(zipCode));

    if (zipCode.length !== 9) return;

    handleFechAdrress(zipCode);
  }, [handleFechAdrress, setValue, zipCode]);

  return {
    errors,
    register,
    handleSubmitForm,
    handleSubmit,
  }
}