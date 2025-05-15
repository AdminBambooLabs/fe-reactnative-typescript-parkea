import { useState } from 'react';
import { Button } from '@/components/Button';
import { ButtonText } from '@/components/ButtonText';
import { InputCode } from '@/components/InputCode';
import { useAppContext } from '@/context/AppContext';
import { useAmplifyAuth } from '@/hooks/useAmplifyAuth';
import { useCountdown } from '@/hooks/useCountdown';
import { formatTime } from '@/hooks/useCountdown/useCountdown';
import { useSignUpNavigation } from '@/hooks/useSignUpNavigation';
import * as Styled from './styles';
import { ResendCodeProps, ResendCodeStatus } from './types';

const ResendCode = ({ status, time = 0, onPressResend: onClickResend }: ResendCodeProps) => {
    if (status === 'counting') {
        return (
            <Styled.ResendCodeWrapper>
                <Styled.ResendCodeText>Reenviar o código em {formatTime(time)}</Styled.ResendCodeText>
            </Styled.ResendCodeWrapper>
        );
    }

    return (
        <Styled.ResendCodeWrapper>
            <Styled.ResendCodeText>Tempo expirado, </Styled.ResendCodeText>
            <ButtonText lined onPress={onClickResend}>receber novo código</ButtonText>
        </Styled.ResendCodeWrapper>
    );
};

const RegisterCode = () => {
    const [inputCode, setInputCode] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [resendStatus, setResendStatus] = useState<ResendCodeStatus>('counting');
    const [loading, setLoading] = useState(false);

    const { currentTime, reset } = useCountdown({ countdown: 10, onEnd: () => setResendStatus('timeout') });
    const { navigate } = useSignUpNavigation();
    const { confirmSignUp, resendCode } = useAmplifyAuth();
    const { profile } = useAppContext();

    async function handleContinue() {
        if (inputCode.length < 6 || !inputCode) {
            setErrorMessage('Digite o código de confirmação');
        }

        setLoading(true);
        const confirm = await confirmSignUp(profile?.email!, inputCode);

        if (confirm === 'SUCCESS') {
            navigate('ParkingInformations');
        } else {
            setErrorMessage('Código de confirmação inválido');
        }
        setLoading(false);
    }

    function handleResend() {
        reset();
        setResendStatus('counting');
        resendCode(profile?.email!);
    }

    function handleChangeText(text: string) {
        setErrorMessage('');
        setInputCode(text);
    }

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <Styled.TitleContainer>
                    <Styled.Title>Digite o código enviado para rot******gmail.com</Styled.Title>
                    <Styled.Description>O código enviado por e-mail deve ser adicionado para prosseguir com seu cadastro</Styled.Description>
                </Styled.TitleContainer>

                <InputCode status={errorMessage ? 'error' : undefined} helperText={errorMessage} value={inputCode} onChangeText={handleChangeText} />
                <Styled.ResendCodeContainer>
                    <ResendCode status={resendStatus} time={currentTime} onPressResend={handleResend} />
                </Styled.ResendCodeContainer>

            </Styled.Content>

            <Styled.ButtonsContainer>
                <Button onPress={handleContinue} isLoading={loading} disabled={!!errorMessage || inputCode.length < 6}>
                    Continuar
                </Button>
            </Styled.ButtonsContainer>
        </Styled.Wrapper>
    );
};

export default RegisterCode;
