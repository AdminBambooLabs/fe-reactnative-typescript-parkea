import { ReactNode } from 'react';

export interface ConfirmationRouteProps {
    icon: ReactNode;
    text: string;
    callBack: (args?: any) => unknown;
    buttonText: string;
}
