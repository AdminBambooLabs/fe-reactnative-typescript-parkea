import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ButtonTextStyleProps } from './types';

export const CustomButton = styled(TouchableOpacity)``;

export const CustomButtonText = styled(Text)<ButtonTextStyleProps>`
  color: ${({ theme, disabled }) => (disabled ? theme.colors.grayTextAlpha : theme.colors.primary)};
  font-family: ${({ theme }) => theme.fonts[500]};
  font-size: 12px;
  ${({ lined }) => (lined ? 'text-decoration: underline;' : '')}
`;
