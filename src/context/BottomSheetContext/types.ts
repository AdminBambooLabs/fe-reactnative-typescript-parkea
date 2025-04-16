import { ReactNode } from 'react';
import { BottomSheetProps } from '@/components/BottomSheet/types';

export type IHandleOpenBottomSheet = Pick<BottomSheetProps, 'buttonProps' | 'title' | 'description'>

export interface IBottomSheetContext {
    handleOpenBottomSheet: (value: IHandleOpenBottomSheet) => void
}

export interface BottomSheetProviderProps {
    children: ReactNode;
}
