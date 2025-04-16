import { ReactNode } from 'react';
import { ToastProps } from '@/components/Toast/types';

export interface IParkingResumeContext {
    pushToastToQueue: (value: IToastQueue) => void;
    resetQueue: () => void;
    popToastFromQueue: () => void;
    toastQueue: IToastQueue[];
    search: string;
    setSearch: (value: string) => void;
}

export interface ParkingResumeProviderProps {
    children: ReactNode;
}

export type IToastQueue = ToastProps & {
    timeout?: number;
}
