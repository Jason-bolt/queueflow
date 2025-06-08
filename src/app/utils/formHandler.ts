import { formOptions } from "@tanstack/react-form/nextjs";
import { SigninUserSchema, SignupUserSchema } from "./zodSchemas";

// You can pass other form options here
export const signUpFormOpts = formOptions({
  defaultValues: {
    email: "",
    password: "",
    confirmPassword: "",
  },
  validators: {
    onSubmit: SignupUserSchema,
  },
});

export const signInFormOpts = formOptions({
  defaultValues: {
    email: "",
    password: "",
  },
  validators: {
    onSubmit: SigninUserSchema,
  },
});
