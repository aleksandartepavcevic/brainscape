import * as yup from "yup";
import { errorMessageMap } from "../Form/Form.constants";

export const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email(errorMessageMap["email"])
    .required(errorMessageMap["required"]),
  password: yup.string().required(errorMessageMap["required"]),
});
