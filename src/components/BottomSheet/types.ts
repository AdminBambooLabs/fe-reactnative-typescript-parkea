import { Animated } from "react-native";
import { ButtonProps } from "../Button/types";

export interface BottomSheetProps {
    visible?: boolean;
    onClose?: () => void;
    title?: string;
    description?: string;
    buttonProps?: ButtonProps
}

export interface BottomSheetStylesProps {
    height: number;
}
