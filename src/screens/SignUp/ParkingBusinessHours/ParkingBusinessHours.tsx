import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { useCustomAsyncStorage } from '@/hooks/useCustomAsyncStorage';
import { useFetchProfile } from '@/hooks/useFetchProfile';
import { useSignUpNavigation } from '@/hooks/useSignUpNavigation';
import { IParkingBusinessHours, parkingBusinessHoursSchema } from '@/schemas/signup/parkingBusinessHours';
import { PROFILE_STORAGE_KEY } from '@/types/profile';
import { ParkingBusinessHoursForm } from './Form';
import * as Styled from './styles';

const ParkingBusinessHours = () => {
    const { updateProfile, isLoading } = useFetchProfile();
    const { value } = useCustomAsyncStorage(PROFILE_STORAGE_KEY);
    const { navigate } = useSignUpNavigation();

    const form = useForm<IParkingBusinessHours>({
        resolver: zodResolver(parkingBusinessHoursSchema),
    });

    const { handleSubmit } = form;

    async function handleContinue(data: IParkingBusinessHours) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { vacancies, ...rest } = data;
        const updatedProfile = await updateProfile({ profileData: rest, profileId: value });

        if (updatedProfile) {
            navigate('PriceTables');
        }
    }

    return (
        <Styled.Wrapper>
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
