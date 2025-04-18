"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnrolledCourseValidations = void 0;
const zod_1 = require("zod");
const createCustomerValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: "Name must be string!",
            required_error: "Name is required!",
        }),
        email: zod_1.z.string({
            invalid_type_error: "Email must be string!",
            required_error: "Email is required!",
        }),
        phone: zod_1.z.string({
            invalid_type_error: "Phone must be string!",
            required_error: "Phone is required!",
        }),
    }),
});
exports.EnrolledCourseValidations = {
    createCustomerValidationSchema,
};
