import {Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';
import {ButtonStyleProps} from './types';

export const CustomButton = styled(TouchableOpacity)<ButtonStyleProps>`
  ${({fullWidth}) => fullWidth && 'width: 100%;'}
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  background-color: black;
`;

export const CustomButtonText = styled(Text)`
  color: white;
`;
