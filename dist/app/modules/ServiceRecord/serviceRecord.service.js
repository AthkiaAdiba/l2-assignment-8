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
exports.ServiceRecordServices = void 0;
const prismaClient_1 = require("../../utils/prismaClient");
const createServiceRecordIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, serviceDate, bikeId, status } = payload;
    const result = yield prismaClient_1.prisma.serviceRecord.create({
        data: {
            bikeId,
            serviceDate,
            description,
            status,
        },
    });
    return result;
});
const getAllServiceRecordsFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.serviceRecord.findMany();
    return result;
});
const getOldPendingOrInProgressServicesFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const result = yield prismaClient_1.prisma.serviceRecord.findMany({
        where: {
            status: {
                in: ["in-progress", "pending"],
            },
            serviceDate: {
                lt: sevenDaysAgo,
            },
        },
    });
    return result;
});
const getSingleServiceRecordFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prismaClient_1.prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    return result;
});
const toSetCompletionServiceRecordIntoDB = (id, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    yield prismaClient_1.prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    const result = yield prismaClient_1.prisma.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: {
            completionDate: completionDate ? new Date(completionDate) : new Date(),
            status: "done",
        },
    });
    return result;
});
exports.ServiceRecordServices = {
    createServiceRecordIntoDB,
    getAllServiceRecordsFromDB,
    getSingleServiceRecordFromDB,
    getOldPendingOrInProgressServicesFromDB,
    toSetCompletionServiceRecordIntoDB,
};
