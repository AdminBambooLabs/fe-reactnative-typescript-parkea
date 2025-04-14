import * as Styled from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNavigationParamList } from '@/../App';
import { Label } from '@/components/Label';

function Cashier({ route }: NativeStackScreenProps<RootNavigationParamList, "ParkingResume">) {

  return (
    <Styled.Wrapper>
      <Label size='lg'>em desenvolvimento...</Label>
    </Styled.Wrapper>
  );
}

export default Cashier;
