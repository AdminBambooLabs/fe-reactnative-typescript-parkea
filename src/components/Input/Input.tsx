import { useEffect, useState } from 'react';
import { Controller, FieldValues } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import { colors } from '@/theme/colors';
import * as Styled from './styles';
import { InputProps, InputStatusStyles, InputWithControllerProps } from './types';
import { Icon } from '../Icon';

const Input = ({ icon, status, helperText, label, ...rest }: InputProps) => {
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

export const InputSecureText = (props: Omit<InputProps, 'secureTextEntry'>) => {
  const [showSecureText, setShowSecureText] = useState(false);

  return (
    <Input
      {...props}
      secureTextEntry={!showSecureText}
      icon={<TouchableOpacity onPress={() => setShowSecureText(!showSecureText)}><Icon name={showSecureText ? 'eye-open' : 'eye-close'} /></TouchableOpacity>}
    />
  );
};

export function InputWithController<T extends FieldValues>({ controllerProps, secureTextEntry, ...rest }: InputWithControllerProps<T>) {
  const InputComp = secureTextEntry ? InputSecureText : Input;

  return (
    <Controller
      {...controllerProps}
      render={({ field }) => {
        const { value, onChange } = field;
        return (
          <InputComp value={value} onChangeText={onChange} {...rest} />
        );
      }}
    />
  );
};

export default Input;
