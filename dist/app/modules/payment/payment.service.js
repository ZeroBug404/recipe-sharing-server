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
exports.PaymentService = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
const user_model_1 = require("../user/user.model");
const stripe = require('stripe')('sk_test_51PKlxWGv0Q9qhIkCGNv84EnJQ1kQg2eYTNSLbHzio5wuF7vuPvTElgpzwhjyXnmlHo7My7lzL5Ik2aGKupNjsmtU00ZyoxZSrH');
const insertStartupPaymentIntoDB = (plan, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield stripe.checkout.sessions.create({
        mode: 'payment',
        payment_method_types: ['card'],
        line_items: [
            {
                price: plan,
                quantity: 1,
            },
        ],
        success_url: 'https://recipe-sharing-green.vercel.app/all-recipes',
        cancel_url: 'https://recipe-sharing-green.vercel.app/buy-coin',
    });
    if (!session) {
        throw new Error('Error creating session');
    }
    console.log(plan, userId);
    if (plan === 'price_1PKm6LGv0Q9qhIkCfIq4vC2m') {
        yield user_model_1.User.findByIdAndUpdate({ _id: userId }, { $inc: { coin: 100 } });
    }
    else if (plan === 'price_1PKm7KGv0Q9qhIkCjN07yKay') {
        yield user_model_1.User.findByIdAndUpdate({ _id: userId }, { $inc: { coin: 500 } });
    }
    else if (plan === 'price_1PKm7vGv0Q9qhIkCm3oDsGQq') {
        yield user_model_1.User.findByIdAndUpdate({ _id: userId }, { $inc: { coin: 1000 } });
    }
    return session;
});
exports.PaymentService = {
    insertStartupPaymentIntoDB,
};
