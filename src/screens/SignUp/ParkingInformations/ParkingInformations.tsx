import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from '@/components/Button';
import { useAppContext } from '@/context/AppContext';
import { useFetchProfile } from '@/hooks/useFetchProfile';
import { useSignUpNavigation } from '@/hooks/useSignUpNavigation';
import { ParkingInformation, parkingInformationSchema } from '@/schemas/signup/parkingInformations';
import { ParkingInformationsForm } from './Form';
import * as Styled from './styles';

const ParkingInformations = () => {
    const { profile, setProfile } = useAppContext();
    console.log('[profile]', profile);
    const { updateProfile, isLoading } = useFetchProfile();
    const { navigate } = useSignUpNavigation();

    const form = useForm<ParkingInformation>({
        resolver: zodResolver(parkingInformationSchema),
        defaultValues: profile!,
    });

    const { handleSubmit } = form;

    async function handleContinue(data: ParkingInformation) {
        const updatedProfile = await updateProfile({ profileData: data, profileId: profile?.id });
        console.log('[handleContinue updatedProfile]', updatedProfile);
        console.log('[data]', data);

        if (updatedProfile) {
            setProfile(updatedProfile);
            navigate('ParkingBusinessHours');
        }
    }

    return (
        <Styled.Wrapper contentContainerStyle={{ padding: 16 }}>
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
