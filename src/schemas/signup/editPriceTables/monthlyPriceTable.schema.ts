import { z } from 'zod';
import { MONEY_REQUIRED_MESSAGE } from './utils';

export type MonthlySchema = z.infer<typeof monthlySchema>;

export const monthlySchema = z.object({
  price: z.string({ required_error: MONEY_REQUIRED_MESSAGE }).refine(
    value => {
      return Number(value) > 0;
    },
    { message: MONEY_REQUIRED_MESSAGE },
  ),
});
