import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { DefaultIconProps } from "../types"

const CurrencyDollarCircle = ({ stroke = "#2C2C2C", ...rest }: DefaultIconProps) => (
    <Svg fill="none" {...rest}>
        <Path
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 14.667A2.333 2.333 0 0 0 11.333 17H13.5a2.5 2.5 0 0 0 0-5h-2a2.5 2.5 0 0 1 0-5h2.167A2.333 2.333 0 0 1 16 9.333M12.5 5.5V7m0 10v1.5m10-6.5c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10 10 4.477 10 10Z"
        />
    </Svg>
);

export default CurrencyDollarCircle
