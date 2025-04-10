import { PlatformPressable, Text as RNText } from '@react-navigation/elements';
import styled from 'styled-components/native';
import { TabBarTextStyles } from './types';

export const Wrapper = styled.View`
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 24px;
`;

export const Pressable = styled(PlatformPressable) <Pick<TabBarTextStyles, "focused">>`
  padding: 12px;
  ${({ focused, theme }) => focused ? `
  border-bottom-color: ${theme.colors.primary};
  border-bottom-width: 1px;
  ` : ''}
  flex: 1;
  display: flex;
  gap: 4px;
  align-items: center;
  justify-content: center;
`

export const Text = styled(RNText) <TabBarTextStyles>`
  color: ${({ focused, theme }) => theme.colors[focused ? 'primary' : 'grayMedium']};
  font-family: ${({ focused, theme }) => theme.fonts[focused ? 700 : 500]};
`