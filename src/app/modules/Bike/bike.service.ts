import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createBikeIntoDB = async (payload: any) => {
  const result = await prisma.bike.create({
    data: payload,
  });

  return result;
};

const getAllBikeFromDB = async () => {
  const result = await prisma.bike.findMany();

  return result;
};

const getSingleBikeFromDB = async (id: string) => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId: id,
    },
  });

  return result;
};

export const BikeServices = {
  createBikeIntoDB,
  getAllBikeFromDB,
  getSingleBikeFromDB,
};
