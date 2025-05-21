import { FunctionComponent } from 'react';
import * as Styled from './styles';

import ChartIcon from '@/assets/icons/chart-dynamic-color.svg';
import CopyIcon from '@/assets/icons/copy-dynamic-color.svg';
import DollarIcon from '@/assets/icons/dollar-dollar-color.svg';
import { Button } from '@/components/Button';
import { Carousel } from '@/components/Carousel';
import { useLocalNavigation } from '@/hooks/useLocalNavigation';

type StepConfig = {
    title: string;
    description: string;
    icon?: FunctionComponent;
}

const stepConfig: StepConfig[] = [
    {
        title: 'Gestão simplificada de estacionamentos.',
        description: 'Tenha controle total sobre seu estacionamento na palma da sua mão, de um jeito rápido, pratico e barato.',
        icon: ChartIcon,
    },
    {
        title: 'Emissão de tickets automatizada.',
        description: 'Esqueça tickets preenchidos a mão e anotações ilegíveis. Agora é só digitar a placa que nós fazemos o resto.',
        icon: CopyIcon,
    },
    {
        title: 'Controle financeiroe de vagas.',
        description: 'Saiba exatamente quanto você está faturando, quais os melhores horários de fluxo e quais vagas você tem disponível.',
        icon: DollarIcon,
    },
];

const LoginOrSignup = () => {
    const { navigate } = useLocalNavigation();

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <Carousel
                    data={stepConfig}
                    showDots
                    renderItem={({ item }) => {
                        const Icon = item.icon;

                        return (
                            <Styled.Slide>
                                {Icon ? <Icon /> : undefined}
                                <Styled.Tittle>{item.title}</Styled.Tittle>
                                <Styled.Description>{item.description}</Styled.Description>
                            </Styled.Slide>
                        );
                    }}
                />
            </Styled.Content>

            <Styled.ButtonsContainer>
                <Button onPress={() => navigate('SignUp')}>Começar cadastro</Button>
                <Button onPress={() => navigate('Login')} variant="ghost">Já tenho cadastro</Button>
            </Styled.ButtonsContainer>
        </Styled.Wrapper>
    );
};

export default LoginOrSignup;
