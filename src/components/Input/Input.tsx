import { colors } from '@/theme/colors';
import * as Styled from './styles';
import { InputProps } from './types';
import { useState } from 'react';

const Input = ({ icon, ...rest }: InputProps) => {
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

export default Input;
