"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const AppError_1 = __importDefault(require("./AppError"));
const handlePrismaError = (err) => {
    var _a, _b, _c, _d;
    if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        switch (err.code) {
            case "P2002": {
                const fields = Array.isArray((_a = err.meta) === null || _a === void 0 ? void 0 : _a.target)
                    ? (_b = err.meta) === null || _b === void 0 ? void 0 : _b.target.join(", ")
                    : String((_d = (_c = err.meta) === null || _c === void 0 ? void 0 : _c.target) !== null && _d !== void 0 ? _d : "unknown field");
                return new AppError_1.default(400, `Unique constraint failed on field(s): ${fields}`);
            }
            case "P2025":
                return new AppError_1.default(404, "Customer not found");
            default:
                return new AppError_1.default(400, `Prisma error: ${err.message}`);
        }
    }
    if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        return new AppError_1.default(400, `Validation error: ${err.message}`);
    }
    return new AppError_1.default(500, "Internal server error");
};
exports.default = handlePrismaError;
