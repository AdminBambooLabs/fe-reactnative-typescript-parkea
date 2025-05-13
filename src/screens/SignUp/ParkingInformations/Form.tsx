import { useFormContext } from 'react-hook-form';
import { TwoInputs } from '@/components/Form';
import { InputWithController } from '@/components/Input';
import { InputMaskedWithController } from '@/components/InputMasked/InputMasked';
import { ParkingInformation } from '@/schemas/signup/parkingInformations';
import { CNPJ_MASK, CONTACT_MASK, ZIP_CODE_MASK } from '@/schemas/signup/parkingInformations/utils';

export const ParkingInformationsForm = () => {
    const { control, formState } = useFormContext<ParkingInformation>();

    return (
        <>
            <InputWithController
                label="Nome do Estacionamento"
                placeholder="Qual o nome do estacionamento?"
                status={formState.errors.name ? 'error' : undefined}
                helperText={formState.errors.name ? 'Digite o nome do estacionamento' : undefined}
                controllerProps={{
                    control,
                    name: 'name',
                }}
            />

            <InputMaskedWithController
                label="CNPJ"
                placeholder="Qual o CNPJ do estacionamento?"
                status={formState.errors.document ? 'error' : undefined}
                helperText={formState.errors.document ? formState.errors.document.message : undefined}
                mask={CNPJ_MASK}
                keyboardType="numeric"
                controllerProps={{
                    control,
                    name: 'document',
                }}
            />

            <InputMaskedWithController
                label="Telefone do estacionamento"
                placeholder="Qual o telefone?"
                status={formState.errors.contact ? 'error' : undefined}
                helperText={formState.errors.contact ? 'Digite o telefone do estacionamento' : undefined}
                mask={CONTACT_MASK}
                keyboardType="numeric"
                controllerProps={{
                    control,
                    name: 'contact',
                }}
            />

            <InputMaskedWithController
                label="CEP"
                placeholder="Qual o seu CEP?"
                status={formState.errors.zipCode ? 'error' : undefined}
                helperText={formState.errors.zipCode ? 'Digite o CEP do estacionamento' : undefined}
                mask={ZIP_CODE_MASK}
                keyboardType="numeric"
                controllerProps={{
                    control,
                    name: 'zipCode',
                }}
            />

            <InputWithController
                label="Rua"
                placeholder="Qual o sua Rua?"
                status={formState.errors.street ? 'error' : undefined}
                helperText={formState.errors.street ? 'Digite o endereço do estacionamento' : undefined}
                controllerProps={{
                    control,
                    name: 'street',
                }}
            />
            <TwoInputs>
                <InputWithController
                    fullWidth
                    label="Número"
                    placeholder="000"
                    keyboardType="numeric"
                    status={formState.errors.streetNumber ? 'error' : undefined}
                    helperText={formState.errors.streetNumber ? 'Digite o número do estacionamento' : undefined}
                    controllerProps={{
                        control,
                        name: 'streetNumber',
                    }}
                />

                <InputWithController
                    fullWidth
                    label="Estado"
                    placeholder="Qual o seu Estado?"
                    status={formState.errors.state ? 'error' : undefined}
                    helperText={formState.errors.state ? 'Digite o estado do estacionamento' : undefined}
                    controllerProps={{
                        control,
                        name: 'state',
                    }}
                />
            </TwoInputs>

            <InputWithController
                label="Cidade"
                placeholder="Qual a sua Cidade?"
                status={formState.errors.city ? 'error' : undefined}
                helperText={formState.errors.city ? 'Digite a cidade do estacionamento' : undefined}
                controllerProps={{
                    control,
                    name: 'city',
                }}
            />
        </>
    );
};
