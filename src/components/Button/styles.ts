import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ButtonStyleProps } from './types';

export const CustomButton = styled(TouchableOpacity)`
  ${({ fullWidth }: ButtonStyleProps) => (fullWidth ? 'width: 100%;' : '')}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: black;
  border-radius: 24px;
`;

export const CustomButtonText = styled(Text)`
  color: white;
`;
