import { BottomSheetProps } from "@/components/BottomSheet/types";
import { ReactNode } from "react";

export interface IAppContext {
    showTabBar: boolean;
    setShowTabBar: (value: boolean) => void;
}

export interface AppProviderProps {
    children: ReactNode;
}
