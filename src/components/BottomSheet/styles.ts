import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { BottomSheetStylesProps } from './types';

export const Backdrop = styled.Pressable`
  flex: 1;
  background-color: #00000088;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const Wrapper = styled(Animated.View) <BottomSheetStylesProps>`
  position: absolute;
  bottom: 0;
  height: ${({ height }) => height}px;
`;

export const Content = styled.View`
  padding: 16px 16px 30px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  align-items: center;
  justify-content: space-between;
  border-top-right-radius: 24px;
  border-top-left-radius: 24px;
  gap: 16px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 6px;
`;

export const TextContainer = styled.View`
  gap: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts[700]};
  font-size: 24px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: ${({ theme }) => theme.fonts[500]};
  color: ${({ theme }) => theme.colors.grayText};
  font-size: 16px;
  text-align: center;
`;
