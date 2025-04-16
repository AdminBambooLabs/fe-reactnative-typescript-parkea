import { useState } from 'react';
import { colors } from '@/theme/colors';
import * as Styled from './styles';
import { InputMaskProps } from './types';

const InputMask = ({ icon, ...rest }: InputMaskProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Styled.Wrapper>
      <Styled.CustomInput
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={colors.grayDark}
        {...rest}
      />
      {icon ? (
        <Styled.IconContainer>
          {icon}
        </Styled.IconContainer>
      ) : null}
    </Styled.Wrapper>
  );
};

export default InputMask;
