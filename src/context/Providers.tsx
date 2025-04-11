import { ReactNode } from "react"
import { ThemeProvider } from 'styled-components/native';
import AppProvider from "./AppContext";
import { theme } from '@/theme';
import { BottomSheet } from "@/components/BottomSheet";
import { BottomSheetProvider } from "./BottomSheetContext";
import ParkingResumeProvider from "./ParkingResumeContext/ParkingResumeContext";

interface ProviderProps {
    children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
    return (
        <AppProvider>
            <ThemeProvider theme={theme}>
                <BottomSheetProvider>
                    <ParkingResumeProvider>
                        {children}
                    </ParkingResumeProvider>
                </BottomSheetProvider>
            </ThemeProvider>
        </AppProvider>
    )
}

export default Providers;