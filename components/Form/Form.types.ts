import { PropsWithChildren } from "react";
import { FieldValues, SubmitHandler, UseFormProps } from "react-hook-form";

export interface FormProps<T extends FieldValues>
  extends PropsWithChildren,
    Pick<UseFormProps<T>, "defaultValues"> {
  onSubmit: SubmitHandler<T>;
}
