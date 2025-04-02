import { useLocalNavigation } from "@/hooks/useFetchTickets/useLocalNavigation";
import { useFetchTickets } from "@/hooks/useFetchTickets";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootNavigationParamList } from "@/../App";
import * as Styled from "./styles"

const TicketDetailsDeleteButton = () => {
    const { goBack } = useLocalNavigation()
    const { cancelTicket } = useFetchTickets()
    const { params } = useRoute<RouteProp<{ ticket: RootNavigationParamList['TicketDetails'] }>>()

    async function handleCancelTicket() {
        const canceledTicket = await cancelTicket(params.ticket.id)
        if (canceledTicket) goBack();
    }

    return (
        <Styled.CustomHeaderButton onPress={handleCancelTicket}>
            <Styled.CustomHeaderButtonText>Delete</Styled.CustomHeaderButtonText>
        </Styled.CustomHeaderButton>
    )
}

export default TicketDetailsDeleteButton
