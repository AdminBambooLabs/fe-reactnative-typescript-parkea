import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TouchableOpacity } from 'react-native';
import { RootNavigationParamList } from '@/../App';
import { Icon } from '@/components/Icon';
import { InputWithController } from '@/components/Input';
import { useAmplifyAuth } from '@/hooks/useAmplifyAuth';
import { useLocalNavigation } from '@/hooks/useLocalNavigation';
import { loginSchema } from '@/schemas/login';
import { LoginSchema } from '@/schemas/login/schema';
import * as Styled from './styles';

function Login({ }: NativeStackScreenProps<RootNavigationParamList, 'ParkingResume'>) {
  const { reset } = useLocalNavigation();
  const { signIn } = useAmplifyAuth();

  const { control, handleSubmit: formHandleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  async function handleSubmit(data: LoginSchema) {
    const signInResult = await signIn(data.email, data.password);

    if (signInResult) {
      reset({
        index: 0,
        routes: [{ name: 'BottomTabs', params: { screen: 'Parking Resume' } }],
      });
    }
  }

  return (
    <Styled.Wrapper>
      <Styled.Content>
        <Styled.TitlesContainer>
          <Styled.LogoText />
          <Styled.Title>Login</Styled.Title>
        </Styled.TitlesContainer>
        <Styled.InputsContainer>
          <InputWithController
            label="E-mail"
            placeholder="email@email.com"
            status={formState.errors.email ? 'error' : undefined}
            helperText={formState.errors.email ? 'Digite um email válido' : undefined}
            controllerProps={{
              control: control,
              name: 'email',
            }}
          />

          <InputWithController
            label="Senha"
            placeholder="Digite sua senha"
            textContentType="password"
            secureTextEntry
            status={formState.errors.password ? 'error' : undefined}
            helperText={formState.errors.password ? 'Digite uma senha válida' : undefined}
            controllerProps={{
              control: control,
              name: 'password',
            }}
          />

        </Styled.InputsContainer>

      </Styled.Content>
      <Styled.Button
        onPress={formHandleSubmit(handleSubmit)}
      >
        Login
      </Styled.Button>
    </Styled.Wrapper >
  );
}

export default Login;
