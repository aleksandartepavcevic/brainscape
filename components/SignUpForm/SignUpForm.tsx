"use client";

import Form from "../Form";
import { useSnackbar } from "@/hooks/useSnackbar";
import { SignUpFormValues } from "./SingUpForm.types";
import { useRouter } from "next/navigation";
import SignUpFormFields from "./components/SignInFormFields";
import axios, { AxiosError } from "axios";
import { artificialDelay } from "@/utils/artificialDelay";
import { signUpFormSchema } from "./SignUpForm.schema";

const SignUpForm = () => {
  const router = useRouter();
  const { enqueueErrorSnackbar, enqueueSuccessSnackbar } = useSnackbar();

  const handleSubmit = async (values: SignUpFormValues) => {
    try {
      const res = await artificialDelay(
        axios.post("/api/register", {
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
      <Form<SignUpFormValues>
        onSubmit={handleSubmit}
        defaultValues={{ email: "", password: "", confirmPassword: "" }}
        schema={signUpFormSchema}
      >
        <SignUpFormFields />
      </Form>
    </div>
  );
};

export default SignUpForm;
