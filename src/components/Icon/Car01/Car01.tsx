import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { DefaultIconProps } from '../types';

const Car01 = ({ stroke = '#2C2C2C', ...rest }: DefaultIconProps) => (
    <Svg fill="none" {...rest}>
        <Path
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5.5 13h3m-6-4 2 1 1.27-3.812c.263-.787.394-1.18.637-1.471a2 2 0 0 1 .803-.578C7.562 4 7.977 4 8.806 4h7.388c.829 0 1.244 0 1.597.139a2 2 0 0 1 .802.578c.243.29.374.684.636 1.471L20.5 10l2-1m-6 4h3M7.3 10h10.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v2.7c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C20.697 20 20.465 20 20 20h-.5a2 2 0 0 1-2-2 .5.5 0 0 0-.5-.5H8a.5.5 0 0 0-.5.5 2 2 0 0 1-2 2H5c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89v-2.7c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.78 10 5.62 10 7.3 10Z"
        />
    </Svg>
);

export default Car01;
