import { useFormContext } from 'react-hook-form';
import { InputCurrencyWithController } from '@/components/InputCurrency/InputCurrency';
import { HourlySchema } from '@/schemas/signup/editPriceTables';

export const HourlyPriceTableForm = () => {
    const { formState, control } = useFormContext<HourlySchema>();
    console.log('[formState]', formState);

    return (
        <>
            <InputCurrencyWithController
                label="Até 15 minutos"
                placeholder="R$ 00,00"
                status={formState.errors.pricePer15 ? 'error' : undefined}
                helperText={formState.errors.pricePer15 ? formState.errors.pricePer15.message : undefined}
                controllerProps={{
                    control,
                    name: 'pricePer15',
                }}
            />

            <InputCurrencyWithController
                label="Até 30 minutos"
                placeholder="R$ 00,00"
                status={formState.errors.pricePer30 ? 'error' : undefined}
                helperText={formState.errors.pricePer30 ? formState.errors.pricePer30.message : undefined}
                controllerProps={{
                    control,
                    name: 'pricePer30',
                }}
            />

            <InputCurrencyWithController
                label="Até 1 hora"
                placeholder="R$ 00,00"
                status={formState.errors.pricePer60 ? 'error' : undefined}
                helperText={formState.errors.pricePer60 ? formState.errors.pricePer60.message : undefined}
                controllerProps={{
                    control,
                    name: 'pricePer60',
                }}
            />

            <InputCurrencyWithController
                label="Hora adicional"
                placeholder="R$ 00,00"
                status={formState.errors.pricePerAdditional ? 'error' : undefined}
                helperText={formState.errors.pricePerAdditional ? formState.errors.pricePerAdditional.message : undefined}
                controllerProps={{
                    control,
                    name: 'pricePerAdditional',
                }}
            />
        </>
    );
};
