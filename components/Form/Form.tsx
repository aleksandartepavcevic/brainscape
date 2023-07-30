import React, { PropsWithChildren } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormProps,
} from "react-hook-form";

interface FormProps<T extends FieldValues = FieldValues>
  extends PropsWithChildren,
    Pick<UseFormProps, "defaultValues"> {
  onSubmit: SubmitHandler<T>;
}

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
