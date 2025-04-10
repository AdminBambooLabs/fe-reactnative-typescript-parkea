import { Pressable, Text } from 'react-native';
import styled from 'styled-components/native';
import { ToggleButtonStyleProps, ToggleButtonTextStyleProps } from './types';

export const CustomToggleButton = styled(Pressable) <ToggleButtonStyleProps>`
${({ fullWidth }) => (fullWidth ? `
    width: 100%;
    flex: 1;
  ` : '')}
  background-color: ${({ theme, pressed }) => theme.colors[pressed ? 'primary' : 'primaryAlpha']};
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const CustomToggleButtonText = styled(Text) <ToggleButtonTextStyleProps>`
  color: ${({ theme, pressed }) => theme.colors[pressed ? 'white' : 'black']};
  font-family: ${({ theme }) => theme.fonts[500]};
  font-size: 16px;
`;