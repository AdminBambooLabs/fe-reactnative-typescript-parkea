export enum EVehicleType {
    car = "car",
    motorcycle = "motorcycle",
    transport = "transport",
}

export enum EVehicleTypeToLabel {
    car = "carro",
    motorcycle = "moto",
    transport = "transporte",
}

export enum ETicketStatus {
    open = "open",
    canceled = "canceled",
    closed = "closed",
    paid = "paid",
}

export enum ETicketStatusToLabel {
    open = "aberto",
    canceled = "cancelado",
    closed = "fechado",
    paid = "pago",
}


export enum EPaymentType {
    pix = "pix",
    cash = "cash",
    card = "card",
}

export enum EPaymentTypeToLabel {
    pix = "pix",
    cash = "dinheiro",
    card = "cartão",
}

export enum EPriceTable {
    hourly = "hourly",
    diarist = "diarist",
    monthly = "monthly",
}

export enum EPriceTableToLabel {
    hourly = "horista",
    diarist = "diarista",
    monthly = "mensalista",
}

export type TVehicleTypes = keyof typeof EVehicleType
export type TTicketStatus = keyof typeof ETicketStatus
export type TPaymentTypes = keyof typeof EPaymentType
export type TPriceTables = keyof typeof EPriceTable

export interface ITicket {
    id: string;
    plate: string;
    vehicleType: TVehicleTypes;
    status: TTicketStatus;
    paymentType: TPaymentTypes;
    priceTable: TPriceTables;
    checkin: Date | null;
    checkout: Date | null;
    discount: number | null;
    total: number | null;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
}
