import { useState } from 'react';
import * as Styled from './styles';
import { ResendCodeProps, ResendCodeStatus } from './types';
import { Button } from '@/components/Button';
import { ButtonText } from '@/components/ButtonText';
import { InputCode } from '@/components/InputCode';
import { useCountdown } from '@/hooks/useCountdown';
import { formatTime } from '@/hooks/useCountdown/useCountdown';

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

    const { currentTime, reset } = useCountdown({ countdown: 10, onEnd: () => setResendStatus('timeout') });

    function handleContinue() {

    }

    function handleResend() {
        reset();
        setResendStatus('counting');
    }

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <Styled.TitleContainer>
                    <Styled.Title>Digite o código enviado para rot******gmail.com</Styled.Title>
                    <Styled.Description>O código enviado por e-mail deve ser adicionado para prosseguir com seu cadastro</Styled.Description>
                </Styled.TitleContainer>

                <InputCode status={errorMessage ? 'error' : undefined} helperText={errorMessage} value={inputCode} onChangeText={setInputCode} />
                <Styled.ResendCodeContainer>
                    <ResendCode status={resendStatus} time={currentTime} onPressResend={handleResend} />
                </Styled.ResendCodeContainer>

            </Styled.Content>

            <Styled.ButtonsContainer>
                <Button onPress={handleContinue}>
                    Continuar
                </Button>
            </Styled.ButtonsContainer>
        </Styled.Wrapper>
    );
};

export default RegisterCode;
