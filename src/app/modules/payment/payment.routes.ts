import express from "express";
import { PaymentController } from "./payment.controller";
const router = express.Router();

router.post(
  "/create-subscription-checkout-session",
  PaymentController.insertStartupPaymentIntoDB
);

export const PaymentRoutes = router;
