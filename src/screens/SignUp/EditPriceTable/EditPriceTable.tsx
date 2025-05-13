import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/Button';
import { convertToFloat } from '@/components/InputCurrency/utils';
import { useAppContext } from '@/context/AppContext';
import { useFetchProfile } from '@/hooks/useFetchProfile';
import { useSignUpNavigation } from '@/hooks/useSignUpNavigation';
import { SignUpStackParamList } from '@/navigation/SignUpNavigator/types';
import { diaristSchema, hourlySchema, monthlySchema } from '@/schemas/signup/editPriceTables';
import { IProfile } from '@/types/profile';
import { EPriceTableToLabel, TPriceTables } from '@/types/tickets';
import { capitalize } from '@/utils';
import { DiaristPriceTableForm } from './Forms/DiaristPriceTableForm';
import { HourlyPriceTableForm } from './Forms/HourlyPriceTableForm';
import { MonthlyPriceTableForm } from './Forms/MonthlyPriceTableForm';
import * as Styled from './styles';

const formByPriceTableType = {
    hourly: <HourlyPriceTableForm />,
    diarist: <DiaristPriceTableForm />,
    monthly: <MonthlyPriceTableForm />,
};

const schemaByPriceTableType: Record<TPriceTables, z.ZodObject<any>> = {
    hourly: hourlySchema,
    diarist: diaristSchema,
    monthly: monthlySchema,
};

const EditPriceTable = ({ route }: NativeStackScreenProps<SignUpStackParamList, 'EditPriceTables'>) => {
    const { profile } = useAppContext();
    const { params } = route;
    const { priceTable } = params;

    const { updateProfile, isLoading } = useFetchProfile();

    const valueByType: Record<TPriceTables, any> = useMemo(() => {
        return {
            diarist: profile?.diaristPrices,
            hourly: profile?.hourlyPrices,
            monthly: profile?.monthlyPrices,
        };
    }, [profile]);

    const form = useForm({
        resolver: zodResolver(schemaByPriceTableType[priceTable]),
        defaultValues: valueByType[priceTable],
    });

    const { handleSubmit } = form;

    const { goBack } = useSignUpNavigation();


    async function handleContinue(data: Partial<IProfile>) {
        const priceKey = `${priceTable}Prices`;

        Object.keys(data).forEach(key => {
            data[key] = convertToFloat(data[key]);
        });

        const payload = { profileData: { [priceKey]: data } };

        const updatedProfile = await updateProfile(payload);

        if (updatedProfile) {
            goBack();
        }
    }

    return (
        <Styled.Wrapper>
            <Styled.Content>
                <Styled.EditTitle>{capitalize(EPriceTableToLabel[priceTable])}</Styled.EditTitle>

                <Styled.Form>
                    <FormProvider {...form}>
                        {formByPriceTableType[priceTable]}
                    </FormProvider>
                </Styled.Form>
            </Styled.Content>

            <Button onPress={handleSubmit(handleContinue)} isLoading={isLoading} disabled={isLoading}>
                Próximo
            </Button>
        </Styled.Wrapper>
    );
};

export default EditPriceTable;
