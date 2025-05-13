import { z } from 'zod';
import {
  CNPJ_REGEX,
  CNPJ_REGEX_MESSAGE,
  CNPJ_REQUIRED_MESSAGE,
  CONTACT_REGEX,
  CONTACT_REGEX_MESSAGE,
  CONTACT_REQUIRED_MESSAGE,
  ZIP_CODE_REGEX,
  ZIP_CODE_REGEX_MESSAGE,
  ZIP_CODE_REQUIRED_MESSAGE,
} from './utils';

export type ParkingInformation = z.infer<typeof parkingInformationSchema>;

const parkingInformationSchema = z.object({
  name: z.string().min(3),
  document: z.string({ required_error: CNPJ_REQUIRED_MESSAGE }).regex(CNPJ_REGEX, { message: CNPJ_REGEX_MESSAGE }),
  contact: z
    .string({ required_error: CONTACT_REQUIRED_MESSAGE })
    .regex(CONTACT_REGEX, { message: CONTACT_REGEX_MESSAGE }),
  zipCode: z
    .string({ required_error: ZIP_CODE_REQUIRED_MESSAGE })
    .regex(ZIP_CODE_REGEX, { message: ZIP_CODE_REGEX_MESSAGE }),
  street: z.string(),
  streetNumber: z.string(),
  state: z.string(),
  city: z.string(),
});

export default parkingInformationSchema;

// name: string;
// document: string;
// contact: string;
// zipCode: string;
// street: string;
// streetNumber: number;
// state: string;
// city: string;

// weekdayOpen: string;
// weekdayClose: string;
// weekendOpen: string;
// weekendClose: string;

// hourlyPrices?: HourlyPrices;
// diaristPrices?: DiaristPrices;
// monthlyPrices?: MonthlyPrices;
