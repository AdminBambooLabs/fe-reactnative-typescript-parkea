import { useEffect, useState } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import * as Styled from './styles';
import { InputMaskProps, InputStatusStyles, InputWithControllerProps } from './types';
import { colors } from '@/theme/colors';

const InputMasked = ({ icon, status, helperText, label, ...rest }: InputMaskProps) => {
  const [localStatus, setLocalStatus] = useState<InputStatusStyles>(status || 'idle');

  useEffect(() => {
    setLocalStatus(status as InputStatusStyles || 'idle');
  }, [status]);

  function handleFocus() {
    if (localStatus as InputStatusStyles === 'idle') {
      setLocalStatus('focused');
    }
  }

  function handleBlur() {
    if (localStatus as InputStatusStyles === 'focused') {
      setLocalStatus(status || 'idle');
    }
  }

  return (
    <Styled.Wrapper fullWidth={rest.fullWidth}>
      {label ? <Styled.InputLabel size="sm">{label}</Styled.InputLabel> : null}

      <Styled.InputContainer>
        <Styled.CustomInput
          status={localStatus}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={colors.grayDark}
          {...rest}
        />
        {icon ? (
          <Styled.IconContainer>
            {icon}
          </Styled.IconContainer>
        ) : null}
      </Styled.InputContainer>

      {helperText ? <Styled.HelperText status={localStatus}>{helperText}</Styled.HelperText> : null}
    </Styled.Wrapper>
  );
};

export function InputMaskedWithController<T extends FieldValues>({ controllerProps, useRawValue = false, ...rest }: InputWithControllerProps<T>) {
  return (
    <Controller
      {...controllerProps}
      render={({ field }) => {
        const { value, onChange } = field;
        return (
          <InputMasked  {...rest} value={value} onChangeText={(text, rawValue) => {
            onChange(useRawValue ? rawValue : text)
          }} />
        );
      }}
    />
  );
};

export default InputMasked;
