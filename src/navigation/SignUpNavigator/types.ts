import { TPriceTables } from '@/types/tickets';

export type SignUpStackParamList = {
  LoginInformation: undefined;
  RegisterCode: undefined;
  ParkingInformations: undefined;
  ParkingBusinessHours: undefined;
  PriceTables: undefined;
  EditPriceTables: {
    priceTable: TPriceTables;
  };
};
