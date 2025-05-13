import { useFormContext } from 'react-hook-form'
import { TwoInputs } from '@/components/Form';
import { InputWithController } from '@/components/Input'
import { InputMaskedWithController } from '@/components/InputMasked/InputMasked';
import { IParkingBusinessHours } from '@/schemas/signup/parkingBusinessHours';
import { TIME_MASK } from '@/schemas/signup/parkingBusinessHours/utils';
import * as Styled from './styles';

export const ParkingBusinessHoursForm = () => {
    const { control, formState } = useFormContext<IParkingBusinessHours>();

    return (
        <>
            <Styled.RowWithTitle>
                <Styled.SectionTitle>Segunda à Sexta</Styled.SectionTitle>
                <TwoInputs>
                    <InputMaskedWithController
                        fullWidth
                        label="Abertura"
                        placeholder="00:00"
                        status={formState.errors.weekdayOpen ? 'error' : undefined}
                        helperText={formState.errors.weekdayOpen ? formState.errors.weekdayOpen.message : undefined}
                        mask={TIME_MASK}
                        controllerProps={{
                            control,
                            name: 'weekdayOpen',
                        }}
                    />

                    <InputMaskedWithController
                        fullWidth
                        label="Fechamento"
                        placeholder="00:00"
                        status={formState.errors.weekdayClose ? 'error' : undefined}
                        helperText={formState.errors.weekdayClose ? formState.errors.weekdayClose.message : undefined}
                        mask={TIME_MASK}
                        controllerProps={{
                            control,
                            name: 'weekdayClose',
                        }}
                    />
                </TwoInputs>
            </Styled.RowWithTitle>

            <Styled.RowWithTitle>
                <Styled.SectionTitle>Fim de semana</Styled.SectionTitle>
                <TwoInputs>
                    <InputMaskedWithController
                        fullWidth
                        label="Abertura"
                        placeholder="00:00"
                        status={formState.errors.weekendOpen ? 'error' : undefined}
                        helperText={formState.errors.weekendOpen ? formState.errors.weekendOpen.message : undefined}
                        mask={TIME_MASK}
                        controllerProps={{
                            control,
                            name: 'weekendOpen',
                        }}
                    />

                    <InputMaskedWithController
                        fullWidth
                        label="Fechamento"
                        placeholder="00:00"
                        status={formState.errors.weekendClose ? 'error' : undefined}
                        helperText={formState.errors.weekendClose ? formState.errors.weekendClose.message : undefined}
                        mask={TIME_MASK}
                        controllerProps={{
                            control,
                            name: 'weekendClose',
                        }}
                    />
                </TwoInputs>
            </Styled.RowWithTitle>

            <Styled.RowWithTitle>
                <Styled.SectionTitle>Vagas</Styled.SectionTitle>
                <InputWithController
                    fullWidth
                    label="Vagas"
                    placeholder="00"
                    status={formState.errors.vacancies ? 'error' : undefined}
                    helperText={formState.errors.vacancies ? 'Digite a quantidade de vagas do estacionamento' : undefined}
                    controllerProps={{
                        control,
                        name: 'vacancies',
                    }}
                />
            </Styled.RowWithTitle>
        </>
    );
};
