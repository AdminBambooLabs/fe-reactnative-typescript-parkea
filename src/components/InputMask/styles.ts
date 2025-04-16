import { MaskedTextInput } from 'react-native-mask-text';
import styled from 'styled-components/native';
import { InputMaskStyleProps } from './types';

export const Wrapper = styled.View`
  position: relative;
`;

export const CustomInput = styled(MaskedTextInput) <InputMaskStyleProps>`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts[500]};
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 24px;
  padding: 14px 16px;
  ${({ fullWidth }) => (fullWidth ? `
    width: 100%;
    flex: 1;
  ` : '')}
  border-width: 1px;
  border-color: ${({ theme, isFocused }) => isFocused ? theme.colors.primary : 'transparent'};
  box-sizing: border-box;
`;

export const IconContainer = styled.View`
  position: absolute;
  top: 25%;
  right: 16px;
`;
