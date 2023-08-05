"use client";

import Form from "../Form";
import { signIn } from "next-auth/react";
import { useSnackbar } from "@/hooks/useSnackbar";
import { SignUpFormValues } from "./SingUpForm.types";
import { useRouter } from "next/navigation";
import SignUpFormFields from "./components/SignInFormFields";

const SignUpForm = () => {
  const router = useRouter();
  const { enqueueErrorSnackbar } = useSnackbar();

  const handleSubmit = async (values: SignUpFormValues) => {
    try {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (response?.error) enqueueErrorSnackbar(response.error);
      if (response?.error === null) router.push("/dashboard");
    } catch (err) {
      throw new Error("Something went wrong!");
    }
  };

  return (
    <div className="w-full flex flex-col">
      <Form<SignUpFormValues>
        onSubmit={handleSubmit}
        defaultValues={{ email: "", password: "", confirmPassword: "" }}
      >
        <SignUpFormFields />
      </Form>
    </div>
  );
};

export default SignUpForm;
