import { TextInput } from 'react-native';
import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '@/theme/colors';
import { InputStatusStyles, CodeInputStyleProps } from './types';

const codeInputBorderColorByStatus: Record<InputStatusStyles, string> = {
  idle: colors.black,
  success: colors.success,
  error: colors.error,
};

const helperTextColorByStatus: Record<InputStatusStyles, string> = {
  idle: colors.grayText,
  success: colors.success,
  error: colors.error,
};

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
`;

export const CodeInputContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const CodeInput = styled.View<CodeInputStyleProps>`
  border-radius: 16px;
  border-width: 1px;
  border-color: ${({ status }) => codeInputBorderColorByStatus[status] || 'transparent'};
  width: 48px;
  height: 56px;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const CodeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};

  text-align: center;
`;

export const CodeCursor = styled(Animated.View)`
  width: 2px;
  height: 24px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const CustomInput = styled(TextInput)`
  position: absolute;
  width: 100%;
  border: 1px solid red;
  background-color: transparent;
  color: transparent;
  z-index: 10;
  opacity: 0;
`;

export const HelperText = styled.Text<Pick<CodeInputStyleProps, 'status'>>`
  font-family: ${({ theme }) => theme.fonts[500]};
  font-size: 10px;
  color: ${({ theme, status }) => helperTextColorByStatus[status] || theme.colors.black};
  margin-top: 8px;
`;
