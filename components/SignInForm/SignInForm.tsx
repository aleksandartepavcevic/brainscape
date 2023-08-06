"use client";

import Form from "../Form";
import GoogleButton from "../Button/components/GoogleButton";
import { signIn } from "next-auth/react";
import SignInFormFields from "./components/SignInFormFields";
import { useSnackbar } from "@/hooks/useSnackbar";
import { SignInFormValues } from "./SignInForm.types";
import { useRouter } from "next/navigation";
import { signInFormSchema } from "./SignInForm.schema";

export const SignInForm = () => {
  const router = useRouter();
  const { enqueueErrorSnackbar } = useSnackbar();

  const handleSubmit = async (values: SignInFormValues) => {
    const res = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (res?.error) enqueueErrorSnackbar(res.error);
    if (res?.error === null) router.push("/dashboard");
  };

  return (
    <div className="w-full flex flex-col">
      <Form<SignInFormValues>
        onSubmit={handleSubmit}
        defaultValues={{ email: "", password: "" }}
        schema={signInFormSchema}
      >
        <SignInFormFields />
      </Form>

      <div className="flex gap-4 items-center my-4">
        <span className="w-full h-[1px] bg-gray-200 block"></span>
        <p className="text-sm text-gray-400 font-light">or</p>
        <span className="w-full h-[1px] bg-gray-200 block"></span>
      </div>
      <GoogleButton />
    </div>
  );
};
