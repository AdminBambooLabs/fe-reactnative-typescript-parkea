import { useEffect, useState } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { BlinkingCursor } from './BlinkCursor';
import * as Styled from './styles';
import { InputCodeProps, InputStatusStyles, InputWithControllerProps } from './types';

const InputCode = ({ status, helperText, onChangeText, value = '', codeLength = 6 }: InputCodeProps) => {
  const [localStatus, setLocalStatus] = useState<InputStatusStyles>(status || 'idle');
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    setLocalStatus(status as InputStatusStyles || 'idle');
  }, [status]);

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);

  }

  return (
    <Styled.Wrapper>
      <Styled.CustomInput
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType="number-pad"
        autoFocus
        value={value}
        onChangeText={onChangeText}
        caretHidden={true}
        maxLength={codeLength}
      />

      <Styled.CodeInputContainer>
        {[...Array(codeLength)].map((_, index) => (
          <Styled.CodeInput status={localStatus} key={index}>
            <Styled.CodeText>{value[index]}</Styled.CodeText>
            {index === value.length && isFocused ? <BlinkingCursor /> : undefined}
          </Styled.CodeInput>
        ))}
      </Styled.CodeInputContainer>

      {helperText ? <Styled.HelperText status={localStatus}>{helperText}</Styled.HelperText> : null}
    </Styled.Wrapper>
  );
};

export function InputCodeWithController<T extends FieldValues>({ controllerProps, ...rest }: InputWithControllerProps<T>) {
  return (
    <Controller
      {...controllerProps}
      render={({ field }) => {
        const { value, onChange } = field;
        return (
          <InputCode value={value} onChangeText={onChange} {...rest} />
        );
      }}
    />
  );
}

export default InputCode;
