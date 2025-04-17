import express from "express";
import { CustomerControllers } from "./customer.controller";

const router = express.Router();

router.post("/", CustomerControllers.createCustomer);

router.get("/:customerId", CustomerControllers.getSingleCustomer);

router.get("/", CustomerControllers.getAllCustomers);

router.put("/:customerId", CustomerControllers.updateSingleCustomer);

router.delete("/:customerId", CustomerControllers.deleteSingleCustomer);

export const CustomerRoutes = router;
