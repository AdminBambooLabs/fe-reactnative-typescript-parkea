import { TextProps } from 'react-native';

export type LabelSizes = 'sm' | 'md' | 'lg';

export interface LabelProps extends TextProps {
    size?: LabelSizes;
}

export type LabelStylesProps = Pick<LabelProps, 'size'>
