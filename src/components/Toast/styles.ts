import { View, Text as RNText } from 'react-native';
import styled from 'styled-components/native';
import { ToastStyleProps } from './types';

export const Wrapper = styled(View) <ToastStyleProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  padding: 14px 16px;
  border-radius: 24px;
  background-color: ${({ theme, type }) => theme.colors[type]};
`;

export const Text = styled(RNText) <ToastStyleProps>`
  color: ${({ theme, type }) => type === 'warning' ? theme.colors.black : theme.colors.white};
  font-family: ${({ theme }) => theme.fonts[400]};
  font-size: 14px;
`;
