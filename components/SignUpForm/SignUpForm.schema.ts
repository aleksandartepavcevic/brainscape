import * as yup from "yup";
import { errorMessageMap } from "../Form/Form.constants";

export const signUpFormSchema = yup.object().shape({
  email: yup
    .string()
    .email(errorMessageMap["email"])
    .required(errorMessageMap["required"]),
  password: yup
    .string()
    .min(6, errorMessageMap["passwordMin"])
    .required(errorMessageMap["required"]),
  confirmPassword: yup
    .string()
    .min(6, errorMessageMap["passwordMin"])
    .required(errorMessageMap["required"])
    .oneOf([yup.ref("password")], errorMessageMap["passwordMatch"]),
});
