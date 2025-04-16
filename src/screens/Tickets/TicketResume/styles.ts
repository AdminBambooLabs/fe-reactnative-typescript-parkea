import styled from 'styled-components/native';
import { Label as CustomLabel } from '@/components/Label';

export const Wrapper = styled.View`
  padding: 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Container = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const InputContainer = styled.View`
  width: 100%;
`;

export const HoursContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const Hour = styled.View`
  display: flex;
  flex: 1;
`;

export const Label = styled(CustomLabel)`
  margin-bottom: 8px;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export const TotalText = styled.Text`
  font-size: 32px;
  font-family: ${({ theme }) => theme.fonts[700]};
  padding: 24px 0;
`;
