import styled from 'styled-components/native';
import { DotsStyles } from './types';

export const Wrapper = styled.View`
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-direction: row;
`;

export const Dot = styled.View<DotsStyles>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme, isActive }) => theme.colors[isActive ? 'primary' : 'grayLight']};
`;
