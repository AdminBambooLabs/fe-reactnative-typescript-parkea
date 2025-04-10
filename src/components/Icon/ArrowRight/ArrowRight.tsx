import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { DefaultIconProps } from "../types"

const ArrowRight = ({ stroke = "#000", ...rest }: DefaultIconProps) => (
    <Svg
        width={18}
        height={14}
        viewBox="0 0 18 14"
        fill="none"
        {...rest}
    >
        <Path
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M1 7h16m0 0-6-6m6 6-6 6"
        />
    </Svg>
);

export default ArrowRight
