"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const handlePrismaError_1 = __importDefault(require("../errors/handlePrismaError"));
const globalErrorHandler = (err, req, res, next) => {
    let customError = err;
    // Convert Prisma error to AppError
    if (err instanceof Error &&
        (err.name.startsWith("Prisma") || err.constructor.name.startsWith("Prisma"))) {
        customError = (0, handlePrismaError_1.default)(err);
    }
    const statusCode = customError.statusCode || 500;
    const message = customError.message || "Internal Server Error";
    res.status(statusCode).json({
        success: false,
        status: statusCode,
        message,
        stack: process.env.NODE_ENV === "development" ? customError.stack : null,
    });
};
exports.default = globalErrorHandler;
