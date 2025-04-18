import { createContext, useContext, useMemo, useState } from 'react';
import { BottomSheet } from '@/components/BottomSheet';
import { BottomSheetProps } from '@/components/BottomSheet/types';
import { BottomSheetProviderProps, IBottomSheetContext, IHandleOpenBottomSheet } from './types';

const BottomSheetContext = createContext<IBottomSheetContext>({} as IBottomSheetContext);

const BottomSheetProvider = ({ children }: BottomSheetProviderProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const [bottomSheetProps, setBottomSheetProps] = useState<Pick<BottomSheetProps, 'buttonProps' | 'title' | 'description'>>({});

    console.log('[bottomSheetProps', bottomSheetProps);

    const handleOpenBottomSheet = (props: IHandleOpenBottomSheet) => {
        setBottomSheetProps(props);
        setIsVisible(true);
    };

    const value = useMemo(() => {
        return {
            handleOpenBottomSheet,
        };
    }, []);

    return (
        <BottomSheetContext.Provider value={value}>
            {children}

            <BottomSheet visible={isVisible} onClose={() => setIsVisible(false)} {...bottomSheetProps} />
        </BottomSheetContext.Provider>
    );
};

export const useBottomSheetContext = () => useContext(BottomSheetContext);

export default BottomSheetProvider;
