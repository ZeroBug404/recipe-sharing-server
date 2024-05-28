"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const payment_service_1 = require("./payment.service");
const insertStartupPaymentIntoDB = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const [basic, startup, enterprise] = [
        "price_1PKm6LGv0Q9qhIkCfIq4vC2m",
        "price_1PKm7KGv0Q9qhIkCjN07yKay",
        "price_1PKm7vGv0Q9qhIkCm3oDsGQq",
    ];
    try {
        const { pricing, userId } = req.body;
        let planId = null;
        if (pricing === 1) {
            planId = basic;
        }
        else if (pricing === 5) {
            planId = startup;
        }
        else if (pricing === 10) {
            planId = enterprise;
        }
        const result = yield payment_service_1.PaymentService.insertStartupPaymentIntoDB(planId, userId);
        res.status(200).json({
            success: true,
            message: "Payment created successfully",
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.PaymentController = {
    insertStartupPaymentIntoDB,
};
