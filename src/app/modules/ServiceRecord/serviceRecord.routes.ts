import express from "express";
import { ServiceRecordControllers } from "./serviceRecord.controller";

const router = express.Router();

router.post("/", ServiceRecordControllers.createServiceRecord);

router.get("/", ServiceRecordControllers.getAllServiceRecords);

router.get(
  "/status",
  ServiceRecordControllers.getOldPendingOrInProgressServices
);

router.get("/:serviceId", ServiceRecordControllers.getSingleServiceRecord);

router.put(
  "/:serviceId/complete",
  ServiceRecordControllers.toSetCompletionServiceRecord
);

export const ServiceRecordRoutes = router;
