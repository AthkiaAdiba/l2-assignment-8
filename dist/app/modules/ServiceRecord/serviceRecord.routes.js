"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordRoutes = void 0;
const express_1 = __importDefault(require("express"));
const serviceRecord_controller_1 = require("./serviceRecord.controller");
const router = express_1.default.Router();
router.post("/", serviceRecord_controller_1.ServiceRecordControllers.createServiceRecord);
router.get("/", serviceRecord_controller_1.ServiceRecordControllers.getAllServiceRecords);
router.get("/status", serviceRecord_controller_1.ServiceRecordControllers.getOldPendingOrInProgressServices);
router.get("/:serviceId", serviceRecord_controller_1.ServiceRecordControllers.getSingleServiceRecord);
router.put("/:serviceId/complete", serviceRecord_controller_1.ServiceRecordControllers.toSetCompletionServiceRecord);
exports.ServiceRecordRoutes = router;
