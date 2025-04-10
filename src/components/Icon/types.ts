import { SvgProps } from "react-native-svg";
import { Icons } from "@/assets/icons/types";

export interface IconProps extends SvgProps {
    name: Icons;
};

export interface DefaultIconProps extends SvgProps { }