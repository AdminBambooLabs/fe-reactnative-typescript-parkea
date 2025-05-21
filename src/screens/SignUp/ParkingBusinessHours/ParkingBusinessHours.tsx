import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { useAppContext } from '@/context/AppContext';
import { useFetchProfile } from '@/hooks/useFetchProfile';
import { useSignUpNavigation } from '@/hooks/useSignUpNavigation';
import { IParkingBusinessHours, parkingBusinessHoursSchema } from '@/schemas/signup/parkingBusinessHours';
import { ParkingBusinessHoursForm } from './Form';
import * as Styled from './styles';

const ParkingBusinessHours = () => {
    const { profile, setProfile } = useAppContext();
    const { updateProfile, isLoading } = useFetchProfile();
    const { navigate } = useSignUpNavigation();

    const form = useForm<IParkingBusinessHours>({
        resolver: zodResolver(parkingBusinessHoursSchema),
    });

    const { handleSubmit } = form;

    async function handleContinue(data: IParkingBusinessHours) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { vacancies, ...rest } = data;
        const updatedProfile = await updateProfile({ profileData: rest, profileId: profile?.id });

        if (updatedProfile) {
            navigate('PriceTables');
            setProfile(updatedProfile);
        }
    }

    return (
        <Styled.Wrapper contentContainerStyle={Styled.contentContainerStyle}>
            <Styled.Content>
                <Styled.TitleContainer>
                    <Styled.Title>Horários de funcionamento</Styled.Title>
                    <Styled.Description>Indique quais os horários de funcionamento do seu estacionamento e a quantidade de vagas.</Styled.Description>
                </Styled.TitleContainer>

                <Styled.Form>
                    <FormProvider {...form}>
                        <ParkingBusinessHoursForm />
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

export default ParkingBusinessHours;
