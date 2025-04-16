import { useFocusEffect } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useCallback, useEffect, useState } from 'react';
import { RootNavigationParamList } from '@/../App';
import { Label } from '@/components/Label';
import { TicketCard } from '@/components/TicketCard';
import { Toast } from '@/components/Toast';
import { IToastQueue } from '@/context/ParkingResumeContext';
import { useParkingResumeContext } from '@/context/ParkingResumeContext/ParkingResumeContext';
import { useDebounce } from '@/hooks/useDebounce';
import { useFetchTickets } from '@/hooks/useFetchTickets';
import { useLocalNavigation } from '@/hooks/useLocalNavigation';
import * as Styled from './styles';

function ParkingResume({ }: NativeStackScreenProps<RootNavigationParamList, 'ParkingResume'>) {
  const [currentToast, setCurrentToast] = useState<IToastQueue | null>(null);

  const { tickets, fetchTickets, isLoading } = useFetchTickets();
  const { navigate } = useLocalNavigation();
  const { toastQueue, resetQueue, search } = useParkingResumeContext();

  async function handleShowToastFromQueue() {
    for (const toast of toastQueue) {
      setCurrentToast(toast);

      await new Promise(resolve =>
        setTimeout(() => {
          setCurrentToast(null);
          resolve(true);
        }, toast.timeout),
      );
    }

    resetQueue();
  }

  function handleFetchTickets(isSearch?: boolean) {
    fetchTickets(isSearch && Boolean(search) ? { plate: search } : undefined);
  }

  const debouncedSearch = useDebounce(() => handleFetchTickets(true), 1000);

  useFocusEffect(
    useCallback(() => {
      if (toastQueue.length) { handleShowToastFromQueue(); }
    }, [toastQueue]),
  );


  useEffect(() => {
    debouncedSearch();
  }, [search]);

  return (
    <Styled.Wrapper>
      {currentToast ? <Styled.ToastContainer><Toast {...currentToast} /></Styled.ToastContainer> : null}
      <Label size="lg">{tickets.length} veículos no pátio</Label>
      <Styled.List
        data={tickets}
        refreshing={isLoading}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={Styled.Separator}
        onRefresh={handleFetchTickets}
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
