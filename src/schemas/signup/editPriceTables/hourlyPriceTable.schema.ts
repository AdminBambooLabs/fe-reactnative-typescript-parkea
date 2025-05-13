import { z } from 'zod';
import { MONEY_REQUIRED_MESSAGE } from './utils';

export type HourlySchema = z.infer<typeof hourlySchema>;

export const hourlySchema = z.object({
  pricePer15: z.string({ required_error: MONEY_REQUIRED_MESSAGE }).refine(
    value => {
      return Number(value) > 0;
    },
    { message: MONEY_REQUIRED_MESSAGE },
  ),
  pricePer30: z.string({ required_error: MONEY_REQUIRED_MESSAGE }).refine(
    value => {
      return Number(value) > 0;
    },
    { message: MONEY_REQUIRED_MESSAGE },
  ),
  pricePer60: z.string({ required_error: MONEY_REQUIRED_MESSAGE }).refine(
    value => {
      return Number(value) > 0;
    },
    { message: MONEY_REQUIRED_MESSAGE },
  ),
  pricePerAdditional: z.string({ required_error: MONEY_REQUIRED_MESSAGE }).refine(
    value => {
      return Number(value) > 0;
    },
    { message: MONEY_REQUIRED_MESSAGE },
  ),
});
