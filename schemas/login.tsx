import { z } from "zod";

export const loginFormSchema = z.object({
  id: z.string().min(2).max(50),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(6, { message: "Password must be at least 6 characters long" }),
});

export type loginFormType = z.infer<typeof loginFormSchema>;
