import { RouteProp, useRoute } from '@react-navigation/native';
import { RootNavigationParamList } from '@/../App';
import { Icon } from '@/components/Icon';
import { useBottomSheetContext } from '@/context/BottomSheetContext/BottomSheetContext';
import { useParkingResumeContext } from '@/context/ParkingResumeContext/ParkingResumeContext';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import { useLocalNavigation } from '@/hooks/useLocalNavigation';
import * as Styled from './styles';

const TicketDetailsDeleteButton = () => {
    const { params } = useRoute<RouteProp<{ ticket: RootNavigationParamList['TicketDetails'] }>>();

    const { reset } = useLocalNavigation();
    const { cancelTicket, isLoading } = useFetchTickets();
    const { handleOpenBottomSheet } = useBottomSheetContext();
    const { pushToastToQueue } = useParkingResumeContext();

    async function handleCancelTicket() {
        try {
            const canceledTicket = await cancelTicket(params.ticket.id);

            if (canceledTicket) {
                pushToastToQueue({ title: 'Registro excluido com sucesso', type: 'success' });
            }
        } catch (err) {
            pushToastToQueue({ title: 'Não foi possível excluir o registro', type: 'error' });
        } finally {
            reset({
                index: 0,
                routes: [{ name: 'BottomTabs', params: { screen: 'Parking Resume' } }],
            });
        }
    }

    function handlePress() {
        handleOpenBottomSheet({
            title: 'Excluir registro?',
            description: 'Houve algum problema e precisar excluir o registro do veiculo?',
            buttonProps: {
                children: 'Sim, quero excluir.',
                onPress: handleCancelTicket,
                color: 'error',
                isLoading,
            },
        });
    }

    return (
        <Styled.CustomHeaderButton onPress={handlePress}>
            <Icon name="trash" />
        </Styled.CustomHeaderButton>
    );
};

export default TicketDetailsDeleteButton;
