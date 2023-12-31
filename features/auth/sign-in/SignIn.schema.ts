import * as yup from "yup";
import { errorMessageMap } from "../../../components/ui/Form/Form.constants";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email(errorMessageMap["email"])
    .required(errorMessageMap["required"]),
  password: yup.string().required(errorMessageMap["required"]),
});
