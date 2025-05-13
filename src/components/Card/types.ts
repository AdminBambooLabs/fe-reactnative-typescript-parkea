import { ReactNode } from 'react';

export interface CardBaseProps {
  onPress?: () => void;
  icon?: ReactNode;
  content?: ReactNode;
  gap?: 'sm' | 'md';
}

export type CardCommonProps = Pick<CardBaseProps, 'gap' | 'onPress'>;

export type CardStylesProps = Required<Pick<CardBaseProps, 'gap'>>;
