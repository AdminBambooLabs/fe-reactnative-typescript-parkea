import { View } from 'react-native';
import styled from 'styled-components/native';
import { ToastStyleProps } from './types';

export const Wrapper = styled(View) <ToastStyleProps>`
  width: 100%;
  padding: 14px 16px;
  border-radius: 24px;
  background-color: ${({ theme, type }) => theme.colors[type]};
  gap: 6px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;
