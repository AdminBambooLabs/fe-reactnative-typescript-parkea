import * as Styled from './styles';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootNavigationParamList } from '@/../App';

function Confirmation({ route }: NativeStackScreenProps<RootNavigationParamList, "Confirmation">) {
  const { params } = route;

  return (
    <Styled.Wrapper>
      <Styled.InfoContainer>
        {params?.icon || null}
        <Styled.Text>{params?.text || ""}</Styled.Text>
      </Styled.InfoContainer>
      <Styled.Button fullWidth onPress={params?.callBack}>{params?.buttonText || ""}</Styled.Button>
    </Styled.Wrapper>
  );
}

export default Confirmation;
