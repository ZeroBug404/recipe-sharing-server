import { NextFunction, Request, Response } from "express";
import { PaymentService } from "./payment.service";


const insertStartupPaymentIntoDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
    } else if (pricing === 5) {
      planId = startup;
    } else if (pricing === 10) {
      planId = enterprise;
    }

    const result = await PaymentService.insertStartupPaymentIntoDB(planId, userId);
    

    res.status(200).json({
      success: true,
      message: "Payment created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const PaymentController = {
  insertStartupPaymentIntoDB,
};
