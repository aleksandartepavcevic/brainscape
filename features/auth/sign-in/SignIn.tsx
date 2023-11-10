"use client";

import Form from "../../../components/ui/Form";
import { signIn } from "next-auth/react";
import { useSnackbar } from "@/hooks/useSnackbar";
import { SignInValues } from "./SignIn.types";
import { useRouter } from "next/navigation";
import { signInSchema } from "./SignIn.schema";
import SignInFormFields from "./components/SignInFormFields";
import { GoogleButton } from "@/components/ui/Button";

export const SignIn = () => {
  const router = useRouter();
  const { enqueueErrorSnackbar } = useSnackbar();

  const handleSubmit = async (values: SignInValues) => {
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
      <Form<SignInValues>
        onSubmit={handleSubmit}
        defaultValues={{ email: "", password: "" }}
        schema={signInSchema}
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
