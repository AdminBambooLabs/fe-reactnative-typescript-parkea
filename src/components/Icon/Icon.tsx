import React, { FunctionComponent } from "react";
import { View } from "react-native";
import { SvgProps } from "react-native-svg";

import AlertCircle from "@/assets/icons/alert-circle.svg"
import AlertTriangle from "@/assets/icons/alert-triangle.svg"
import CheckSquareBroken from "@/assets/icons/check-square-broken.svg"
import Check from "@/assets/icons/check.svg"
import ArrowNarrowRightWhite from "@/assets/icons/arrow-narrow-right-white.svg"
import ArrowNarrowRightBlack from "@/assets/icons/arrow-narrow-right-black.svg"
import ArrowNarrowRightLightGray from "@/assets/icons/arrow-narrow-right-light-gray.svg"
import ArrowNarrowRightDarkGray from "@/assets/icons/arrow-narrow-right-dark-gray.svg"

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
    "arrow-narrow-right-white": ArrowNarrowRightWhite,
    "arrow-narrow-right-black": ArrowNarrowRightBlack,
    "arrow-narrow-right-light-gray": ArrowNarrowRightLightGray,
    "arrow-narrow-right-dark-gray": ArrowNarrowRightDarkGray,
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