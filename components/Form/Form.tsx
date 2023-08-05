"use client";

import React from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { FormProps } from "./Form.types";

const Form = <T extends FieldValues>({
  defaultValues,
  onSubmit,
  children,
}: FormProps<T>) => {
  const methods = useForm<T>({
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
