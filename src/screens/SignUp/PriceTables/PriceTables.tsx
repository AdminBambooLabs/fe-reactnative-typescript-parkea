import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useEffect } from 'react';
import { Button } from '@/components/Button';
import { PriceTableCard } from '@/components/Card/PriceTableCard';
import * as SPriceTable from '@/components/Card/PriceTableCard/styles';
import { useAppContext } from '@/context/AppContext';
import { useBottomSheetContext } from '@/context/BottomSheetContext/BottomSheetContext';
import { useFetchProfile } from '@/hooks/useFetchProfile';
import { useSignUpNavigation } from '@/hooks/useSignUpNavigation';
import { formatCurrencyBRL } from '@/utils/currency';
import * as Styled from './styles';

const PriceTables = () => {
    const { profile, setProfile } = useAppContext();
    console.log('[profile]', profile);
    const { profile: profileData, fetchProfile } = useFetchProfile();
    const { navigate } = useSignUpNavigation();
    const { handleOpenBottomSheet } = useBottomSheetContext();

    function handleContinue() {
        handleOpenBottomSheet({
            title: 'Editar tabela',
            description: 'Você pode editar as suas tabelas quando quiser acessando Perfil > Tabelas de preço',
            buttonProps: {
                children: 'Próximo',
                onPress: () => '',
            },
        });
    }

    useFocusEffect(
        useCallback(() => {
            if (!profile) {
                fetchProfile();
            };
        }, []),
    );

    useEffect(() => {
        setProfile(profileData);
    }, [profileData]);

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <Styled.TitleContainer>
                    <Styled.Title>Tabela de preços</Styled.Title>
                    <Styled.Description>Adicione aqui as tabelas de preços de seu estacionamento.</Styled.Description>
                </Styled.TitleContainer>

                <Styled.Form>
                    <PriceTableCard
                        gap="sm"
                        title="Horista"
                        onPress={() => navigate('EditPriceTables', { priceTable: 'hourly' })}
                        content={
                            <>
                                <SPriceTable.Description>Até 15 minutos: {formatCurrencyBRL(profile?.hourlyPrices?.pricePer15 || 0)}</SPriceTable.Description>
                                <SPriceTable.Description>Até 30 minutos: {formatCurrencyBRL(profile?.hourlyPrices?.pricePer30 || 0)}</SPriceTable.Description>
                                <SPriceTable.Description>Até 1 hora: {formatCurrencyBRL(profile?.hourlyPrices?.pricePer60 || 0)}</SPriceTable.Description>
                                <SPriceTable.Description>Hora adicional: {formatCurrencyBRL(profile?.hourlyPrices?.pricePerAdditional || 0)}</SPriceTable.Description>
                            </>
                        }
                    />
                    <PriceTableCard
                        gap="sm"
                        title="Diarista"
                        onPress={() => navigate('EditPriceTables', { priceTable: 'diarist' })}
                        content={
                            <>
                                <SPriceTable.Description>Meia diária: {formatCurrencyBRL(profile?.diaristPrices?.pricePerHalfDay || 0)}</SPriceTable.Description>
                                <SPriceTable.Description>Diária completa: {formatCurrencyBRL(profile?.diaristPrices?.pricePerFullDay || 0)}</SPriceTable.Description>
                            </>
                        }
                    />
                    <PriceTableCard
                        gap="sm"
                        title="Mensalista"
                        onPress={() => navigate('EditPriceTables', { priceTable: 'monthly' })}
                        content={
                            <>
                                <SPriceTable.Description>Valor: {formatCurrencyBRL(profile?.monthlyPrices?.price || 0)}</SPriceTable.Description>
                            </>
                        }
                    />
                </Styled.Form>
            </Styled.Content>

            <Styled.ButtonsContainer>
                <Button onPress={handleContinue}>
                    Próximo
                </Button>
            </Styled.ButtonsContainer>
        </Styled.Wrapper>
    );
};

export default PriceTables;
