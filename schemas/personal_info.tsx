import { z } from "zod";

export const personInfoFormSchema = z.object({
  image: z.instanceof(File).optional(),

  age: z
    .number({
      required_error: "Age is required.",
      invalid_type_error: "Age must be a number.",
    })
    .int({ message: "Age must be an integer." })
    .positive({ message: "Age must be greater than 0." }),

  address: z
    .string({
      required_error: "Address is required.",
      invalid_type_error: "Address must be a string.",
    })
    .min(5, { message: "Address must be at least 5 characters." }),

  email: z
    .string({
      required_error: "Email is required.",
      invalid_type_error: "Email must be a string.",
    })
    .email({ message: "Email must be a valid email address." }),

  phone: z
    .array(
      z
        .string()
        .min(7, { message: "Phone number must be at least 7 digits." })
        .regex(/^\+?[0-9\s\-()]+$/, {
          message: "Phone number contains invalid characters.",
        })
    )
    .min(1, { message: "At least one phone number is required." }),
});

export type personInfoFormType=z.infer<typeof personInfoFormSchema>
