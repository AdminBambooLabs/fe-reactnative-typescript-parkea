import { ReactNode } from 'react';

export interface HourlyPriceTable {
  15: string;
  30: string;
  60: string;
  additional: string;
}

export interface DiaristPriceTable {
  halfDay: string;
  fullDay: string;
}

export interface MonthlyPriceTable {
  value: string;
}

export interface ISignUpContext {
  hourlyPriceTable: HourlyPriceTable;
  setHourlyPriceTable: (value: HourlyPriceTable) => void;
  diaristPriceTable: DiaristPriceTable;
  setDiaristPriceTable: (value: DiaristPriceTable) => void;
  monthlyPriceTable: MonthlyPriceTable;
  setMonthlyPriceTable: (value: MonthlyPriceTable) => void;
  checkAllPriceTables: () => boolean;
}

export interface SignUpProviderProps {
  children: ReactNode;
}
