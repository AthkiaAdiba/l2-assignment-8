import { z } from "zod";

const createCustomerValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: "Name must be string!",
      required_error: "Name is required!",
    }),
    email: z.string({
      invalid_type_error: "Email must be string!",
      required_error: "Email is required!",
    }),
    phone: z.string({
      invalid_type_error: "Phone must be string!",
      required_error: "Phone is required!",
    }),
  }),
});

export const EnrolledCourseValidations = {
  createCustomerValidationSchema,
};
