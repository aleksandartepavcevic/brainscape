import * as yup from "yup";
import { errorMessageMap } from "../../../components/ui/Form/Form.constants";

export const signUpSchema = yup.object().shape({
  username: yup.string().required(errorMessageMap["required"]),
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
