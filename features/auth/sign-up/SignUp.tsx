"use client";

import Form from "../../../components/ui/Form";
import { useSnackbar } from "@/hooks/useSnackbar";
import { SignUpValues } from "./SingUp.types";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { artificialDelay } from "@/utils/artificialDelay";
import { signUpSchema } from "./SignUp.schema";
import SignUpFormFields from "./components/SignInFormFields";

const SignUp = () => {
  const router = useRouter();
  const { enqueueErrorSnackbar, enqueueSuccessSnackbar } = useSnackbar();

  const handleSubmit = async (values: SignUpValues) => {
    try {
      const res = await artificialDelay(
        axios.post("/api/register", {
          username: values.username,
          email: values.email,
          password: values.password,
        }),
        1000
      );
      enqueueSuccessSnackbar(res.data.message);
      router.push("/sign-in");
    } catch (error) {
      if (error instanceof AxiosError) {
        const { response } = error;
        const { data } = response || {};

        enqueueErrorSnackbar(data.message);
      }
    }
  };

  return (
    <div className="w-full flex flex-col">
      <Form<SignUpValues>
        onSubmit={handleSubmit}
        defaultValues={{ email: "", password: "", confirmPassword: "" }}
        schema={signUpSchema}
      >
        <SignUpFormFields />
      </Form>
    </div>
  );
};

export default SignUp;
