import { TicketCard } from '@/components/TicketCard';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import * as Styled from './styles';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNavigationParamList } from '@/../App';
import { useNavigation } from '@react-navigation/native';

function ParkingResume(props: NativeStackScreenProps<RootNavigationParamList, "ParkingResume">) {
  const { tickets, fetchTickets, isLoading } = useFetchTickets();
  const { navigate } = useNavigation<NativeStackNavigationProp<RootNavigationParamList, "ParkingResume">>()
  console.log('[props', props)

  return (
    <Styled.Wrapper>
      <Styled.Text>Carros no pátio: </Styled.Text>
      <Styled.List
        data={tickets}
        refreshing={isLoading}
        keyExtractor={({ id }) => id}
        onRefresh={fetchTickets} renderItem={({ item }) => {
          return (
            <TicketCard
              ticket={item}
              onPress={() => navigate('TicketDetails', { ticket: item })}
            />
          );
        }} />
    </Styled.Wrapper>
  );
}

export default ParkingResume;
