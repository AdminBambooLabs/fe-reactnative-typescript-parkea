import { useFormContext } from 'react-hook-form'
import * as Styled from './styles';
import { TwoInputs } from '@/components/Form';
import { InputWithController } from '@/components/Input'
import { IParkingBusinessHours } from '@/schemas/signup/parkingBusinessHours';

export const ParkingBusinessHoursForm = () => {
    const { control, formState } = useFormContext<IParkingBusinessHours>();

    return (
        <>
            <Styled.RowWithTitle>
                <Styled.SectionTitle>Segunda à Sexta</Styled.SectionTitle>
                <TwoInputs>
                    <InputWithController
                        fullWidth
                        label="Abertura"
                        placeholder="00:00"
                        status={formState.errors.weekdayOpen ? 'error' : undefined}
                        helperText={formState.errors.weekdayOpen ? 'Digite o horário de abertura do estacionamento' : undefined}
                        controllerProps={{
                            control,
                            name: 'weekDaysOpenHour',
                        }}
                    />

                    <InputWithController
                        fullWidth
                        label="Fechamento"
                        placeholder="00:00"
                        status={formState.errors.weekdayClose ? 'error' : undefined}
                        helperText={formState.errors.weekdayClose ? 'Digite o horário de fechamento do estacionamento' : undefined}
                        controllerProps={{
                            control,
                            name: 'weekDaysCloseHour',
                        }}
                    />
                </TwoInputs>
            </Styled.RowWithTitle>

            <Styled.RowWithTitle>
                <Styled.SectionTitle>Fim de semana</Styled.SectionTitle>
                <TwoInputs>
                    <InputWithController
                        fullWidth
                        label="Abertura"
                        placeholder="00:00"
                        status={formState.errors.weekdayOpen ? 'error' : undefined}
                        helperText={formState.errors.weekdayOpen ? 'Digite o horário de abertura do estacionamento' : undefined}
                        controllerProps={{
                            control,
                            name: 'weekDaysOpenHour',
                        }}
                    />

                    <InputWithController
                        fullWidth
                        label="Fechamento"
                        placeholder="00:00"
                        status={formState.errors.weekdayClose ? 'error' : undefined}
                        helperText={formState.errors.weekdayClose ? 'Digite o horário de fechamento do estacionamento' : undefined}
                        controllerProps={{
                            control,
                            name: 'weekDaysCloseHour',
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
