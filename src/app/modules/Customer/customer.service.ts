import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCustomerIntoDB = async (payload: any) => {
  const result = await prisma.customer.create({
    data: payload,
  });

  return result;
};

const getAllCustomersFromDB = async () => {
  const result = await prisma.customer.findMany();

  return result;
};

const getSingleCustomerFromDB = async (id: string) => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId: id,
    },
  });

  return result;
};

const updateSingleCustomerIntoDB = async (id: string, payload: any) => {
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });

  return result;
};

const deleteSingleCustomerIntoDB = async (id: string) => {
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });

  return result;
};

export const CustomerServices = {
  createCustomerIntoDB,
  getAllCustomersFromDB,
  getSingleCustomerFromDB,
  updateSingleCustomerIntoDB,
  deleteSingleCustomerIntoDB,
};
