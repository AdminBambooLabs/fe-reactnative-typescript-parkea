import { useState } from 'react';
import { Icon } from '../Icon';
import * as Styled from './styles';
import { CheckBoxProps } from './types';

const CheckBox = ({ children, checked = false, ...rest }: CheckBoxProps) => {
  return (
    <Styled.Wrapper checked={checked} {...rest}>
      {checked ? <Icon name='check' /> : null}
    </Styled.Wrapper>
  );
};

export default CheckBox;
