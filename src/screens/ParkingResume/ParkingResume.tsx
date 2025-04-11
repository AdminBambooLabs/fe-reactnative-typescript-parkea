import { TicketCard } from '@/components/TicketCard';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import * as Styled from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNavigationParamList } from '@/../App';
import { useLocalNavigation } from '@/hooks/useLocalNavigation';
import { View } from 'react-native';
import { Label } from '@/components/Label';
import { Toast } from '@/components/Toast';
import { useParkingResumeContext } from '@/context/ParkingResumeContext/ParkingResumeContext';
import { useCallback, useState } from 'react';
import { IToastQueue } from '@/context/ParkingResumeContext';
import { useFocusEffect } from '@react-navigation/native';

function ParkingResume({ route }: NativeStackScreenProps<RootNavigationParamList, "ParkingResume">) {
  const [currentToast, setCurrentToast] = useState<IToastQueue | null>(null);
  const { tickets, fetchTickets, isLoading } = useFetchTickets();
  const { navigate } = useLocalNavigation()
  const { toastQueue, resetQueue } = useParkingResumeContext();

  async function handleShowToastFromQueue() {
    for (const toast of toastQueue) {
      setCurrentToast(toast);

      await new Promise(resolve =>
        setTimeout(() => {
          setCurrentToast(null);
          resolve(true);
        }, toast.timeout)
      );
    }

    resetQueue();
  }

  useFocusEffect(
    useCallback(() => {
      if (toastQueue.length) handleShowToastFromQueue();
    }, [toastQueue])
  );

  return (
    <Styled.Wrapper>
      {currentToast ? <Styled.ToastContainer><Toast {...currentToast} /></Styled.ToastContainer> : null}
      <Label size='lg'>{tickets.length} veículos no pátio</Label>
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
