import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormRenderer from "../components/forms/FormRenderer";
import formConfig0221 from "../configs/formConfigs/0221";
import { formSchema0221 } from "../configs/formConfigs/0221";


function InputForm() {
  const methods = useForm({
    resolver: zodResolver(formSchema0221),
    defaultValues: {},
  });

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(' Submitted Data:', data);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">{formConfig0221.title || "Fill the Form"}</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <FormRenderer formConfig={formConfig0221} />
          <button
            type="submit"
            className="bg-[#00adef] text-white px-4 py-2 rounded hover:opacity-80"
          >
            Submit
          </button>
        </form>
      </FormProvider>
    </div>
  );
}

export default InputForm;
