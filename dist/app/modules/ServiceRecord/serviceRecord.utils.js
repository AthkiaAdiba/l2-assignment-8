"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapStatus = void 0;
const mapStatus = (status) => {
    const statusMap = {
        pending: "pending",
        "in-progress": "in_progress",
        done: "done",
    };
    return statusMap[status];
};
exports.mapStatus = mapStatus;
