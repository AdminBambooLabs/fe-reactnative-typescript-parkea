import { Pressable } from 'react-native';
import styled from 'styled-components/native';
import { CheckBoxProps } from './types';

export const Wrapper = styled(Pressable) <CheckBoxProps>`
  width: 24px;
  height: 24px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ checked, theme }) => !checked ? `border: 1px solid ${theme.colors.grayText}` : ''}
  ${({ checked, theme }) => checked ? `background-color: ${theme.colors.primary}` : ''}
  ;
`;