import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { DefaultIconProps } from "../types"

const ParkingIcon = ({ stroke = "#451BED", ...rest }: DefaultIconProps) => (
    <Svg fill="none" {...rest}>
        <Path
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.5 21c4-4 8-7.582 8-12a8 8 0 1 0-16 0c0 4.418 4 8 8 12Z"
        />
        <Path
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8 12V9.5m0 0V6h2.387c2.166 0 2.135 3.5 0 3.5H8Z"
        />
    </Svg>
);

export default ParkingIcon
