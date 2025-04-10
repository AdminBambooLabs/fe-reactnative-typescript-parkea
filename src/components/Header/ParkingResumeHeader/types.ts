import { BottomTabHeaderProps } from "@react-navigation/bottom-tabs";
import { ReactNode } from "react";

export interface ParkingResumeHeaderProps extends BottomTabHeaderProps {
    title?: string;
    hasBackButton?: boolean;
    rightSide?: ReactNode
}

export interface ParkingResumeHeaderStyleProps {
    safePaddingTop: number;
}