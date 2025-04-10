import { Text } from 'react-native';
import styled from 'styled-components/native';
import { LabelSizes, LabelStylesProps } from './types';

const fontBySize: Record<LabelSizes, string> = {
  sm: '12px',
  md: '16px;',
  lg: '20px',
}

export const CustomLabel = styled(Text) <LabelStylesProps>`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  font-size: ${({ size }) => fontBySize[size!]};
  font-family: ${({ theme }) => theme.fonts[600]};

`