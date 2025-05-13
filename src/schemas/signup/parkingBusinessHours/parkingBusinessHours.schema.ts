import { z } from 'zod';
import { TIME_REGEX, TIME_REGEX_MESSAGE, TIME_REQUIRED_MESSAGE } from './utils';

export type IParkingBusinessHours = z.infer<typeof parkingBusinessHoursSchema>;

const parkingBusinessHoursSchema = z.object({
  weekdayOpen: z.string({ required_error: TIME_REQUIRED_MESSAGE }).regex(TIME_REGEX, { message: TIME_REGEX_MESSAGE }),
  weekdayClose: z.string({ required_error: TIME_REQUIRED_MESSAGE }).regex(TIME_REGEX, { message: TIME_REGEX_MESSAGE }),

  weekendOpen: z.string({ required_error: TIME_REQUIRED_MESSAGE }).regex(TIME_REGEX, { message: TIME_REGEX_MESSAGE }),
  weekendClose: z.string({ required_error: TIME_REQUIRED_MESSAGE }).regex(TIME_REGEX, { message: TIME_REGEX_MESSAGE }),

  vacancies: z.string().min(1),
});

export default parkingBusinessHoursSchema;
