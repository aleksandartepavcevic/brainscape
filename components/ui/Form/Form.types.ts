import { PropsWithChildren } from "react";
import { FieldValues, SubmitHandler, UseFormProps } from "react-hook-form";
import * as yup from "yup";

export interface FormProps<T extends FieldValues>
  extends PropsWithChildren,
    Pick<UseFormProps<T>, "defaultValues"> {
  onSubmit: SubmitHandler<T>;
  schema: yup.ObjectSchema<T>;
}
