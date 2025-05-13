import React, { FunctionComponent } from 'react';
import { SvgProps } from 'react-native-svg';

import AlertCircle from '@/assets/icons/alert-circle.svg';
import AlertTriangle from '@/assets/icons/alert-triangle.svg';
import CheckSquareBroken from '@/assets/icons/check-square-broken.svg';
import Check from '@/assets/icons/check.svg';
import EyeClose from '@/assets/icons/eye-close.svg';
import EyeOpen from '@/assets/icons/eye-open.svg';
import Search from '@/assets/icons/search.svg';
import EditPen from '@/assets/icons/edit-pen.svg';

import { Icons } from '@/assets/icons/types';

import { ArrowRight } from './ArrowRight';
import { Car01 } from './Car01';
import { CurrencyDollarCircle } from './CurrencyDollarCircle';
import { ParkingIcon } from './ParkingIcon';
import * as Styled from './styles';
import { Trash } from './Trash';

import { IconProps } from './types';

export const icons: Record<Icons, FunctionComponent<SvgProps>> = {
    'alert-circle': AlertCircle,
    'alert-triangle': AlertTriangle,
    'check-square-broken': CheckSquareBroken,
    'check': Check,
    'arrow-narrow-right': ArrowRight,
    'car-01': Car01,
    'currency-dollar-circle': CurrencyDollarCircle,
    'parking': ParkingIcon,
    'trash': Trash,
    'eye-open': EyeOpen,
    'eye-close': EyeClose,
    'edit-pen': EditPen,
    'search': Search,
};

const Icon = ({ name, ...props }: IconProps) => {
    const SvgIcon = icons[name];
    return <Styled.Wrapper><SvgIcon {...props} /></Styled.Wrapper>;
};

export default Icon;
