"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const mongoose_1 = require("mongoose");
const PaymentSchema = new mongoose_1.Schema({
    pricing: {
        type: Number,
    },
    subscription: {
        userId: {
            type: String,
        },
        sessionId: String,
        planId: {
            type: String,
        },
        planType: {
            type: String,
        },
        planStartDate: {
            type: Date,
        },
        planEndDate: {
            type: Date,
        },
        planDuration: {
            type: Number,
        },
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Payment = (0, mongoose_1.model)("Payment", PaymentSchema);
