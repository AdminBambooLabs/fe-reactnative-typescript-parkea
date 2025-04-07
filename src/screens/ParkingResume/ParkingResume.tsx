import { TicketCard } from '@/components/TicketCard';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import * as Styled from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNavigationParamList } from '@/../App';
import { useLocalNavigation } from '@/hooks/useFetchTickets/useLocalNavigation';
import { View } from 'react-native';
import { Label } from '@/components/Label';
import { Toast } from '@/components/Toast';

function ParkingResume({ route }: NativeStackScreenProps<RootNavigationParamList, "ParkingResume">) {
  const { tickets, fetchTickets, isLoading } = useFetchTickets();
  const { navigate } = useLocalNavigation()

  return (
    <Styled.Wrapper>
      <Toast title="Tabela salva com sucesso" />
      <Label size='lg'>{tickets.length} veículos no pátio: </Label>
      <Styled.List
        data={tickets}
        refreshing={isLoading}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        onRefresh={fetchTickets}
        renderItem={({ item }) => {
          return (
            <TicketCard
              ticket={item}
              onPress={() => navigate('TicketDetails', { ticket: item })}
            />
          );
        }}
      />
    </Styled.Wrapper>
  );
}

export default ParkingResume;
