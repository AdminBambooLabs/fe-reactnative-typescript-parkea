import { ReactNode } from "react";
import { ToastProps } from "@/components/Toast/types";

export interface IParkingResumeContext {
    pushToastToQueue: (value: IToastQueue) => void;
    resetQueue: () => void;
    popToastFromQueue: () => void;
    toastQueue: IToastQueue[];
}

export interface ParkingResumeProviderProps {
    children: ReactNode;
}

export type IToastQueue = ToastProps & {
    timeout?: number;
}
