export enum EVehicleType {
  car = "car",
  motorcycle = "motorcycle",
  transport = "transport",
}

export enum ETicketStatus {
  open = "open",
  canceled = "canceled",
  closed = "closed",
  paid = "paid",
}

export enum EPaymentType {
  pix = "pix",
  cash = "cash",
  card = "card",
}

export enum EPriceTable {
  hourly = "hourly",
  diarist = "diarist",
  monthly = "monthly",
}

export interface ITicket {
  id: string;
  plate: string;
  vehicleType: keyof typeof EVehicleType;
  status: keyof typeof ETicketStatus;
  paymentType: keyof typeof EPaymentType;
  priceTable: keyof typeof EPriceTable;
  checkin: Date | null;
  checkout: Date | null;
  discount: number | null;
  total: number | null;
  createdAt: Date;
  updatedAt: Date;
  isActive: boolean;
}

// GET
export interface GetTicketsParams {
  ticketId?: string;
}

export type GetTicketsResponse = ITicket[];

// POST
export type PostTicketsParams = Pick<
  ITicket,
  'plate' | 'vehicleType' | 'priceTable'
>;
