import { ServiceRecord } from "@prisma/client";
import { prisma } from "../../utils/prismaClient";

const createServiceRecordIntoDB = async (payload: ServiceRecord) => {
  const { description, serviceDate, bikeId, status } = payload;

  const result = await prisma.serviceRecord.create({
    data: {
      bikeId,
      serviceDate,
      description,
      status,
    },
  });

  return result;
};

const getAllServiceRecordsFromDB = async () => {
  const result = await prisma.serviceRecord.findMany();

  return result;
};

const getOldPendingOrInProgressServicesFromDB = async () => {
  const now = new Date();
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const result = await prisma.serviceRecord.findMany({
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
};

const getSingleServiceRecordFromDB = async (id: string) => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });

  return result;
};

const toSetCompletionServiceRecordIntoDB = async (
  id: string,
  completionDate: any
) => {
  await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });

  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: {
      completionDate: completionDate ? new Date(completionDate) : new Date(),
      status: "done",
    },
  });

  return result;
};

export const ServiceRecordServices = {
  createServiceRecordIntoDB,
  getAllServiceRecordsFromDB,
  getSingleServiceRecordFromDB,
  getOldPendingOrInProgressServicesFromDB,
  toSetCompletionServiceRecordIntoDB,
};
