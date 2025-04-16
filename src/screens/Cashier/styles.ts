import { FlatList, View } from 'react-native';
import styled from 'styled-components/native';
import { ITicket } from '@/types/tickets';

export const Wrapper = styled(View)`
  padding: 16px;
  height: 100%;
`;

export const List = styled(FlatList<ITicket>)`
  margin-top: 16px;
`;

export const Text = styled.Text`
  color: black;
`;
