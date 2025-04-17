import { Prisma } from "@prisma/client";
import AppError from "./AppError";

const handlePrismaError = (err: unknown): AppError => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002": {
        const fields = Array.isArray(err.meta?.target)
          ? err.meta?.target.join(", ")
          : String(err.meta?.target ?? "unknown field");
        return new AppError(
          400,
          `Unique constraint failed on field(s): ${fields}`
        );
      }
      case "P2025":
        return new AppError(404, "Customer not found");
      default:
        return new AppError(400, `Prisma error: ${err.message}`);
    }
  }

  if (err instanceof Prisma.PrismaClientValidationError) {
    return new AppError(400, `Validation error: ${err.message}`);
  }

  return new AppError(500, "Internal server error");
};

export default handlePrismaError;
