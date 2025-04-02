import styled from 'styled-components/native';
import { InputMaskStyleProps } from './types';
import { MaskedTextInput } from "react-native-mask-text";

export const CustomInput = styled(MaskedTextInput) <InputMaskStyleProps>`
  color: black;
  background-color: #ccc;
  border-radius: 24px;
  padding: 14px 16px;
  ${({ fullWidth }) => (fullWidth ? `
    width: 100%;
    flex: 1;
  ` : '')}
`;
