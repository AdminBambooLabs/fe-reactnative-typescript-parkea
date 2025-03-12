import { ITicket } from '@/types/tickets';
import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  padding: 16px;
  height: 100%;
`;

export const List = styled(FlatList<ITicket>)`
`;

export const Text = styled.Text`
  color: black;
`;
