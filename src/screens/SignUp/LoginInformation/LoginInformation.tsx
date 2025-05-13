import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { CheckBox } from '@/components/CheckBox';
import { InputWithController } from '@/components/Input';
import { Label } from '@/components/Label';
import { LoginInformationSchema, loginInformationSchema } from '@/schemas/signup/loginInformation';
import * as Styled from './styles';

const LoginInformation = () => {
    const [termsAccepted, setTermsAccepted] = useState(false);

    const { control, formState, watch, handleSubmit } = useForm<LoginInformationSchema>({
        resolver: zodResolver(loginInformationSchema),
    });

    const isButtonDisabled = Object.values(watch()).some(value => value === undefined || !value) || !!Object.keys(formState.errors).length || !termsAccepted;

    function handleContinue(data: LoginInformationSchema) {
        console.log('[data', data);
    }

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <Styled.TitleContainer>
                    <Styled.Title>Criação de conta</Styled.Title>
                    <Styled.Description>Adicione as informações nos campos abaixo para a criação de sua conta.</Styled.Description>
                </Styled.TitleContainer>

                <Styled.Form>
                    <InputWithController
                        label="E-mail"
                        placeholder="email@email.com"
                        status={formState.errors.email ? 'error' : undefined}
                        helperText={formState.errors.email ? formState.errors.email.message : undefined}
                        controllerProps={{
                            control,
                            name: 'email',
                        }}
                    />

                    <InputWithController
                        label="Senha"
                        placeholder="Digite sua senha"
                        status={formState.errors.password ? 'error' : undefined}
                        helperText={formState.errors.password ? formState.errors.password.message : undefined}
                        secureTextEntry
                        controllerProps={{
                            control,
                            name: 'password',
                        }}
                    />

                    <InputWithController
                        label="Confirme sua senha"
                        placeholder="Digite novamente sua senha"
                        status={formState.errors.confirmPassword ? 'error' : undefined}
                        helperText={formState.errors.confirmPassword ? formState.errors.confirmPassword.message : undefined}
                        secureTextEntry
                        controllerProps={{
                            control,
                            name: 'confirmPassword',
                        }}
                    />
                </Styled.Form>
            </Styled.Content>

            <Styled.ButtonsContainer>
                <Styled.CheckBoxContainer>
                    <CheckBox checked={termsAccepted} onPress={() => setTermsAccepted(!termsAccepted)} />
                    <Label size="sm">Eu aceito os Termos e Condições</Label>
                </Styled.CheckBoxContainer>
                <Button
                    disabled={isButtonDisabled}
                    onPress={handleSubmit(handleContinue)}
                >
                    Continuar
                </Button>
            </Styled.ButtonsContainer>
        </Styled.Wrapper>
    );
};

export default LoginInformation;
