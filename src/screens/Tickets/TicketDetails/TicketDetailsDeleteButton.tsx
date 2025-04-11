import { useLocalNavigation } from "@/hooks/useFetchTickets/useLocalNavigation";
import { useFetchTickets } from "@/hooks/useFetchTickets";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootNavigationParamList } from "@/../App";
import * as Styled from "./styles"
import { Icon } from "@/components/Icon";
import { useBottomSheetContext } from "@/context/BottomSheetProvider/BottomSheetProvider";
import TrashIcon from "@/assets/icons/trash-can-dynamic-color.svg";

const TicketDetailsDeleteButton = () => {
    const { params } = useRoute<RouteProp<{ ticket: RootNavigationParamList['TicketDetails'] }>>()

    const { navigate, reset } = useLocalNavigation()
    const { cancelTicket, isLoading } = useFetchTickets()
    const { handleOpenBottomSheet } = useBottomSheetContext();

    async function handleCancelTicket() {
        const canceledTicket = await cancelTicket(params.ticket.id);

        if (canceledTicket) {
            navigate('Confirmation', {
                buttonText: 'Finalizar',
                text: 'Registro excluído com sucesso',
                callBack: () => reset({
                    index: 0,
                    routes: [{ name: 'BottomTabs', params: { screen: 'Parking Resume' } }],
                }),
                icon: <TrashIcon />
            });
        }
    }

    function handlePress() {
        handleOpenBottomSheet({
            title: "Excluir registro?",
            description: "Houve algum problema e precisar excluir o registro do veiculo?",
            buttonProps: {
                children: "Sim, quero excluir.",
                onPress: handleCancelTicket,
                color: 'error',
                isLoading,
            }
        });
    }

    return (
        <Styled.CustomHeaderButton onPress={handlePress}>
            <Icon name="trash" />
        </Styled.CustomHeaderButton>
    )
}

export default TicketDetailsDeleteButton
