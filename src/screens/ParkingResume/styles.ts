import { ITicket } from '@/api/services/tickets';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper: typeof View = styled(View)`
  padding: 16px;
  height: 100%;
`;

export const List: typeof FlatList<ITicket> = styled(FlatList<ITicket>)`
`;

export const Text = styled.Text`
  color: black;
`;
