import { Schema, model } from "mongoose";
import { IPayment } from "./payment.interface";

const PaymentSchema = new Schema<IPayment>(
  {
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Payment = model<IPayment>("Payment", PaymentSchema);
