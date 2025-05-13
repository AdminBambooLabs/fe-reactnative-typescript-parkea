import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { useFetchProfile } from '@/hooks/useFetchProfile';
import { useSignUpNavigation } from '@/hooks/useSignUpNavigation';
import { ParkingInformation, parkingInformationSchema } from '@/schemas/signup/parkingInformations';
import { ParkingInformationsForm } from './Form';
import * as Styled from './styles';

const ParkingInformations = () => {
    const { createProfile, isLoading } = useFetchProfile();
    const { navigate } = useSignUpNavigation();

    const form = useForm<ParkingInformation>({
        resolver: zodResolver(parkingInformationSchema),
    });

    const { handleSubmit } = form;

    async function handleContinue(data: ParkingInformation) {
        const profile = await createProfile(data);

        if (profile) {
            navigate('ParkingBusinessHours');
        }
    }

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <Styled.TitleContainer>
                    <Styled.Title>Informação</Styled.Title>
                    <Styled.Description>Adicione as informações nos campos abaixo para a o cadastro do seu estácionamento.</Styled.Description>
                </Styled.TitleContainer>

                <Styled.Form>
                    <FormProvider {...form}>
                        <ParkingInformationsForm />
                    </FormProvider>
                </Styled.Form>
            </Styled.Content>

            <Styled.ButtonsContainer>
                <Button onPress={handleSubmit(handleContinue)} isLoading={isLoading} disabled={isLoading}>
                    Próximo
                </Button>
            </Styled.ButtonsContainer>
        </Styled.Wrapper>
    );
};

export default ParkingInformations;
