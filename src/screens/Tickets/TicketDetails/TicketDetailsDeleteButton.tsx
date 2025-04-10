import { useLocalNavigation } from "@/hooks/useFetchTickets/useLocalNavigation";
import { useFetchTickets } from "@/hooks/useFetchTickets";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootNavigationParamList } from "@/../App";
import * as Styled from "./styles"
import { Icon } from "@/components/Icon";

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
            <Icon name="trash" />
        </Styled.CustomHeaderButton>
    )
}

export default TicketDetailsDeleteButton
