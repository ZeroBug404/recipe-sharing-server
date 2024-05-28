"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_routes_1 = require("../modules/user/user.routes");
const recipe_routes_1 = require("../modules/recipe/recipe.routes");
const payment_routes_1 = require("../modules/payment/payment.routes");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/users',
        route: user_routes_1.UserRoutes,
    },
    {
        path: '/recipes',
        route: recipe_routes_1.RecipeRoutes,
    },
    {
        path: "/payments",
        route: payment_routes_1.PaymentRoutes,
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
