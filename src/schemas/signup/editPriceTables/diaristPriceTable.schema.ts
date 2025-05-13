import { z } from 'zod';
import { MONEY_REQUIRED_MESSAGE } from './utils';

export type DiaristSchema = z.infer<typeof diaristSchema>;

export const diaristSchema = z.object({
  pricePerHalfDay: z.string({ required_error: MONEY_REQUIRED_MESSAGE }).refine(
    value => {
      return Number(value) > 0;
    },
    { message: MONEY_REQUIRED_MESSAGE },
  ),
  pricePerFullDay: z.string({ required_error: MONEY_REQUIRED_MESSAGE }).refine(
    value => {
      return Number(value) > 0;
    },
    { message: MONEY_REQUIRED_MESSAGE },
  ),
});
