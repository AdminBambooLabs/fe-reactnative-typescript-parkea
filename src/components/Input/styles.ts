import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { InputStyleProps } from './types';

export const CustomInput = styled(TextInput) <InputStyleProps>`
  color: black;
  background-color: #ccc;
  border-radius: 24px;
  padding: 14px 16px;
  ${({ fullWidth }) => (fullWidth ? `
    width: 100%;
    flex: 1;
  ` : '')}
`;
