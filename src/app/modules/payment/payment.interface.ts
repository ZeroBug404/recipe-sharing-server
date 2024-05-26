export type IPayment = {
  pricing?: number;
  subscription?: {
    userId?: string;
    sessionId?: string | null;
    planId?: string;
    planType?: string;
    planStartDate?: Date;
    planEndDate?: Date;
    planDuration?: number;
  };
};
