import { Customer } from "@prisma/client";
import { prisma } from "../../utils/prismaClient";

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
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });

  return result;
};

const updateSingleCustomerIntoDB = async (
  id: string,
  payload: Partial<Customer>
) => {
  prisma.customer.findFirstOrThrow({
    where: {
      customerId: id,
    },
  });

  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });

  return result;
};

const deleteSingleCustomerIntoDB = async (id: string) => {
  prisma.customer.findFirstOrThrow({
    where: {
      customerId: id,
    },
  });

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
