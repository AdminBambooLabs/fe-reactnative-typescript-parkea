import { useFormContext } from 'react-hook-form';
import { InputCurrencyWithController } from '@/components/InputCurrency/InputCurrency';
import { DiaristSchema } from '@/schemas/signup/editPriceTables';

export const DiaristPriceTableForm = () => {
    const { formState, control } = useFormContext<DiaristSchema>();
    console.log('[formState]', formState);

    return (
        <>
            <InputCurrencyWithController
                label="Meia diária"
                placeholder="R$ 00,00"
                status={formState.errors.pricePerHalfDay ? 'error' : undefined}
                helperText={formState.errors.pricePerHalfDay ? formState.errors.pricePerHalfDay.message : undefined}
                controllerProps={{
                    control,
                    name: 'pricePerHalfDay',
                }}
            />

            <InputCurrencyWithController
                label="Diária completa"
                placeholder="R$ 00,00"
                status={formState.errors.pricePerFullDay ? 'error' : undefined}
                helperText={formState.errors.pricePerFullDay ? formState.errors.pricePerFullDay.message : undefined}
                controllerProps={{
                    control,
                    name: 'pricePerFullDay',
                }}
            />
        </>
    );
};
