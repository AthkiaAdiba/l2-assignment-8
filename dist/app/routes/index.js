"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_routes_1 = require("../modules/Customer/customer.routes");
const bike_routes_1 = require("../modules/Bike/bike.routes");
const serviceRecord_routes_1 = require("../modules/ServiceRecord/serviceRecord.routes");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: "/customers",
        route: customer_routes_1.CustomerRoutes,
    },
    {
        path: "/bikes",
        route: bike_routes_1.BikeRoutes,
    },
    {
        path: "/services",
        route: serviceRecord_routes_1.ServiceRecordRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
