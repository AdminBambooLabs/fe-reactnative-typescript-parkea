import { MaskedTextInput } from 'react-native-advanced-input-mask';
import styled from 'styled-components/native';
import { InputStatusStyles, InputStyleProps } from './types';
import { Label } from '../Label';
import { colors } from '@/theme/colors';

const inputColorByStatus: Record<InputStatusStyles, string> = {
  idle: 'transparent',
  focused: colors.primary,
  success: colors.success,
  error: colors.error,
};

const helperTextColorByStatus: Record<InputStatusStyles, string> = {
  idle: colors.grayText,
  focused: colors.grayText,
  success: colors.success,
  error: colors.error,
};

export const Wrapper = styled.View<Pick<InputStyleProps, 'fullWidth'>>`
  min-height: 48px;
  ${({ fullWidth }) =>
    fullWidth
      ? `
    width: 100%;
    flex: 1;
  `
      : ''}
`;

export const InputContainer = styled.View`
  position: relative;
`;

export const CustomInput = styled(MaskedTextInput)<InputStyleProps>`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts[500]};
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 24px;
  padding: 14px 16px;
  ${({ fullWidth }) =>
    fullWidth
      ? `
    width: 100%;
  `
      : ''}
  border-width: 1px;
  border-color: ${({ status }) => inputColorByStatus[status] || 'transparent'};
  box-sizing: border-box;
`;

export const IconContainer = styled.View`
  position: absolute;
  top: 25%;
  right: 16px;
`;

export const HelperText = styled.Text<Pick<InputStyleProps, 'status'>>`
  font-family: ${({ theme }) => theme.fonts[500]};
  font-size: 10px;
  color: ${({ theme, status }) => helperTextColorByStatus[status] || theme.colors.black};
  margin-top: 8px;
`;

export const InputLabel = styled(Label)`
  margin-bottom: 8px;
`;
