import { PropsWithChildren } from "react";
import { FieldValues, SubmitHandler, UseFormProps } from "react-hook-form";

export interface FormProps<T extends FieldValues = FieldValues>
  extends PropsWithChildren,
    Pick<UseFormProps, "defaultValues"> {
  onSubmit: SubmitHandler<T>;
}
