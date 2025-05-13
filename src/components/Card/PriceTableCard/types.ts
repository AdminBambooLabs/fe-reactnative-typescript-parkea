import { CardBaseProps, CardCommonProps } from '../types';

export interface PriceTableCardProps extends CardCommonProps, Pick<CardBaseProps, 'content'> {
  title?: string;
}
