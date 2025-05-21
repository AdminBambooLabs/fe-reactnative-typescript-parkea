import React, { useRef, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
import CloseButton from '@/assets/icons/x-close.svg';
import { colors } from '@/theme/colors';
import { Button } from '../Button';
import * as Styled from './styles';
import { BottomSheetProps } from './types';

const { height: WINDOW_HEIGHT } = Dimensions.get('window');
const { height: SCREEN_HEIGHT } = Dimensions.get('screen');
const navigationBarHeight = SCREEN_HEIGHT - WINDOW_HEIGHT;

const BottomSheet = ({ title, description, buttonProps, visible, onClose }: BottomSheetProps) => {
  const translateY = useRef(new Animated.Value(WINDOW_HEIGHT)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: visible ? 0 : WINDOW_HEIGHT,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <>
      {visible ? <Styled.Backdrop onPress={onClose} /> : null}

      <Styled.Wrapper
        height={WINDOW_HEIGHT * 0.3 + navigationBarHeight}
        style={{
          transform: [{ translateY }],
        }}
      >
        <Styled.Content>
          <Styled.CloseButton onPress={onClose}><CloseButton fill={colors.grayText} /></Styled.CloseButton>
          <Styled.TextContainer>
            <Styled.Title>{title}</Styled.Title>
            <Styled.Description>{description}</Styled.Description>
          </Styled.TextContainer>
          <Button
            {...buttonProps}
            onPress={(e) => {
              buttonProps?.onPress?.(e);
              onClose?.();
            }}
            fullWidth
          >
            {buttonProps?.children}
          </Button>
        </Styled.Content>
      </Styled.Wrapper>
    </>
  );
};

export default BottomSheet;
