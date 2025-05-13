import { useFormContext } from 'react-hook-form';
import { InputCurrencyWithController } from '@/components/InputCurrency/InputCurrency';
import { MonthlySchema } from '@/schemas/signup/editPriceTables';

export const MonthlyPriceTableForm = () => {
    const { formState, control } = useFormContext<MonthlySchema>();

    return (
        <>
            <InputCurrencyWithController
                label="Valor"
                placeholder="R$ 00,00"
                status={formState.errors.price ? 'error' : undefined}
                helperText={formState.errors.price ? 'Preencha o valor de minutagem' : undefined}
                controllerProps={{
                    control,
                    name: 'price',
                }}
            />
        </>
    );
};
