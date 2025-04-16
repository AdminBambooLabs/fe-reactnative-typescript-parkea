import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchIcon from '@/assets/icons/search.svg';
import { Avatar } from '@/components/Avatar';
import { Input } from '@/components/Input';
import { useParkingResumeContext } from '@/context/ParkingResumeContext/ParkingResumeContext';
import * as Styled from './styles';
import { ParkingResumeHeaderProps } from './types';

const ParkingResumeHeader = ({ }: ParkingResumeHeaderProps) => {
    const insets = useSafeAreaInsets();
    const { search, setSearch } = useParkingResumeContext();

    return (
        <Styled.Wrapper safePaddingTop={insets.top + 24}>
            <Styled.InfoContainer>
                <Avatar name="RE" />
                <Styled.Title>Olá, Rotativo Epaminondas</Styled.Title>
            </Styled.InfoContainer>
            <Input value={search} onChangeText={(value) => setSearch(value)} placeholder="Busca placa/ticket" icon={<SearchIcon />} />
        </Styled.Wrapper>
    );
};

export default ParkingResumeHeader;
