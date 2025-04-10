import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { ReactNode } from "react";

export interface SimpleHeaderProps extends NativeStackHeaderProps {
    title?: string;
    hasBackButton?: boolean;
    rightSide?: ReactNode
}

export interface SimpleHeaderStyleProps {
    safePaddingTop?: number;
}