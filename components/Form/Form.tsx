import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormProps } from "./Form.types";

const Form = ({ defaultValues, onSubmit, children }: FormProps) => {
  const methods = useForm({
    mode: "all",
    defaultValues,
  });
  return (
    <FormProvider {...methods}>
      <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
