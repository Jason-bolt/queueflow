import { formOptions } from "@tanstack/react-form/nextjs";
import {
  NewQueueSchema,
  SigninUserSchema,
  SignupUserSchema,
} from "./zodSchemas";
import { getFormattedDateFromTimestamp } from "./helpers";

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

export const NewQueueFormOpts = formOptions({
  defaultValues: {
    name: "",
    isEmailRequired: false,
    maxSize: "1",
    description: "",
    expiresAt: getFormattedDateFromTimestamp(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ), // Default to one week from now
    queuePrefix: "QF",
  },
  validators: {
    onSubmit: NewQueueSchema,
  },
});
