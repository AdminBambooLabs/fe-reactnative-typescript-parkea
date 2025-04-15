import React, { FunctionComponent } from "react";
import { SvgProps } from "react-native-svg";

import AlertCircle from "@/assets/icons/alert-circle.svg"
import AlertTriangle from "@/assets/icons/alert-triangle.svg"
import CheckSquareBroken from "@/assets/icons/check-square-broken.svg"
import Check from "@/assets/icons/check.svg"

import { Icons } from "@/assets/icons/types";
import { IconProps } from "./types";

import { ParkingIcon } from "./ParkingIcon";
import { Car01 } from "./Car01";
import { CurrencyDollarCircle } from "./CurrencyDollarCircle";
import { Trash } from "./Trash";
import { ArrowRight } from "./ArrowRight";

import * as Styled from './styles';

export const icons: Record<Icons, FunctionComponent<SvgProps>> = {
    "alert-circle": AlertCircle,
    "alert-triangle": AlertTriangle,
    "check-square-broken": CheckSquareBroken,
    "check": Check,
    "arrow-narrow-right": ArrowRight,
    "car-01": Car01,
    "currency-dollar-circle": CurrencyDollarCircle,
    "parking": ParkingIcon,
    "trash": Trash,
}

const Icon = ({ name, ...props }: IconProps) => {
    const SvgIcon = icons[name];
    return <Styled.Wrapper><SvgIcon {...props} /></Styled.Wrapper>;
};

export default Icon;