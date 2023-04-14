import { useCep } from "./hook/useCep";

export default function Home() {
  const { errors, handleSubmit, handleSubmitForm, register } = useCep();

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="font-bold text-2xl">Cep</h1>

      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-full mt-10 flex flex-col gap-5"
      >
        <input
          {...register("address.zipCode")}
          type="text"
          placeholder="CEP"
          maxLength={9}
          className="w-full p-2 border border-gray-300 rounded-md text-black"
        />
        {errors.address?.zipCode?.message && (
          <p className="text-red-500">{errors.address?.zipCode?.message}</p>
        )}

        <input
          {...register("address.street")}
          type="text"
          placeholder="Rua"
          maxLength={9}
          className=" w-full p-2 border border-gray-300 rounded-md text-black"
        />
        {errors.address?.street?.message && (
          <p className="text-red-500">{errors.address?.street?.message}</p>
        )}

        <input
          {...register("address.number")}
          type="text"
          placeholder="Número"
          maxLength={9}
          className=" w-full p-2 border border-gray-300 rounded-md text-black"
        />
        {errors.address?.number?.message && (
          <p className="text-red-500">{errors.address?.number?.message}</p>
        )}

        <input
          {...register("address.district")}
          type="text"
          placeholder="Bairro"
          maxLength={9}
          className=" w-full p-2 border border-gray-300 rounded-md text-black"
        />
        {errors.address?.district?.message && (
          <p className="text-red-500">{errors.address?.district?.message}</p>
        )}

        <input
          {...register("address.complement")}
          type="text"
          placeholder="Complemento"
          maxLength={9}
          className=" w-full p-2 border border-gray-300 rounded-md text-black"
        />
        {errors.address?.complement?.message && (
          <p className="text-red-500">{errors.address?.complement?.message}</p>
        )}

        <input
          {...register("address.city")}
          type="text"
          placeholder="Cidade"
          maxLength={9}
          className=" w-full p-2 border border-gray-300 rounded-md text-black"
        />
        {errors.address?.city?.message && (
          <p className="text-red-500">{errors.address?.city?.message}</p>
        )}

        <input
          {...register("address.state")}
          type="text"
          placeholder="Estado"
          maxLength={9}
          className=" w-full p-2 border border-gray-300 rounded-md text-black"
        />
        {errors.address?.state?.message && (
          <p className="text-red-500">{errors.address?.state?.message}</p>
        )}

        <button
          className="w-full bg-blue-500 p-4 rounded-md text-white font-bold"
          type="submit"
        >
          Enviar
        </button>
      </form>
    </main>
  );
}
