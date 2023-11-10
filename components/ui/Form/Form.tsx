"use client";

import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormProps } from "./Form.types";
import { yupResolver } from "@hookform/resolvers/yup";

const Form = <T extends FieldValues>({
  defaultValues,
  onSubmit,
  children,
  schema,
}: FormProps<T>) => {
  const methods = useForm<T>({
    mode: "all",
    defaultValues,
    resolver: yupResolver(schema),
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
