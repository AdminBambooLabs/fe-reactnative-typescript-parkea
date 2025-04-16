import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNavigationParamList } from '@/../App';
import { Label } from '@/components/Label';
import * as Styled from './styles';

function Cashier({ }: NativeStackScreenProps<RootNavigationParamList, 'ParkingResume'>) {

  return (
    <Styled.Wrapper>
      <Label size="lg">em desenvolvimento...</Label>
    </Styled.Wrapper>
  );
}

export default Cashier;
