export const PROFILE_STORAGE_KEY = 'profile';

export interface IProfile {
  id?: string;
  email?: string;
  name?: string;
  document?: string;
  contact?: string;
  street?: string;
  streetNumber?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  createdAt?: Date;
  updatedAt?: Date;
  cognitoId?: string;

  weekdayOpen?: string;
  weekdayClose?: string;
  weekendOpen?: string;
  weekendClose?: string;

  hourlyPrices?: HourlyPrices;
  diaristPrices?: DiaristPrices;
  monthlyPrices?: MonthlyPrices;
}

type HourlyPrices = {
  id: string;
  parkingId: string;
  pricePer15: number;
  pricePer30: number;
  pricePer60: number;
  pricePerAdditional: number;
  createdAt: Date;
  updatedAt: Date;
};

type DiaristPrices = {
  id: string;
  parkingId: string;
  createdAt: Date;
  updatedAt: Date;
  pricePerHalfDay: number;
  pricePerFullDay: number;
};

type MonthlyPrices = {
  id: string;
  parkingId: string;
  createdAt: Date;
  updatedAt: Date;
  price: number;
};
