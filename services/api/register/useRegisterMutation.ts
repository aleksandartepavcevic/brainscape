import { UseMutationOptions, useMutation } from "@tanstack/react-query";
import { register } from "./register";

export const useRegisterMutation = (
  options?: Omit<UseMutationOptions, "mutationFn">
) => {
  const registerMutation = useMutation({
    mutationFn: register,
  });
};
