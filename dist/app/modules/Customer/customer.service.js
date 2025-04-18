"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerServices = void 0;
const prismaClient_1 = require("../../utils/prismaClient");
const createCustomerIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.customer.create({
        data: payload,
    });
    return result;
});
const getAllCustomersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.customer.findMany();
    return result;
});
const getSingleCustomerFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.customer.findUniqueOrThrow({
        where: {
            customerId: id,
        },
    });
    return result;
});
const updateSingleCustomerIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    prismaClient_1.prisma.customer.findFirstOrThrow({
        where: {
            customerId: id,
        },
    });
    const result = yield prismaClient_1.prisma.customer.update({
        where: {
            customerId: id,
        },
        data: payload,
    });
    return result;
});
const deleteSingleCustomerIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    prismaClient_1.prisma.customer.findFirstOrThrow({
        where: {
            customerId: id,
        },
    });
    const result = yield prismaClient_1.prisma.customer.delete({
        where: {
            customerId: id,
        },
    });
    return result;
});
exports.CustomerServices = {
    createCustomerIntoDB,
    getAllCustomersFromDB,
    getSingleCustomerFromDB,
    updateSingleCustomerIntoDB,
    deleteSingleCustomerIntoDB,
};
