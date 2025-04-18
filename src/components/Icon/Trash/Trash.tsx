import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { DefaultIconProps } from '../types';

const Trash = ({ stroke = '#000', ...rest }: DefaultIconProps) => (
    <Svg fill="none" {...rest}>
        <Path
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M14 5v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C12.48 1 11.92 1 10.8 1H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 2.52 6 3.08 6 4.2V5m2 5.5v5m4-5v5M1 5h18m-2 0v11.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C14.72 21 13.88 21 12.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V5"
        />
    </Svg>
);

export default Trash;
