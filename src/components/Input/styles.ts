import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { InputStyleProps } from './types';

export const CustomInput = styled(TextInput) <InputStyleProps>`
  color: ${({ theme }) => theme.colors.black};
  font-weight: 500;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 24px;
  padding: 14px 16px;
  ${({ fullWidth }) => (fullWidth ? `
    width: 100%;
    flex: 1;
  ` : '')}
`;
