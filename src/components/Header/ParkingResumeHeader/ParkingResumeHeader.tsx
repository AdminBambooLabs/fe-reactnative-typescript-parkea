import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SearchIcon from '@/assets/icons/search.svg';
import { Avatar } from '@/components/Avatar';
import { getAvatarText } from '@/components/Avatar';
import { Input } from '@/components/Input';
import { useAppContext } from '@/context/AppContext';
import { useParkingResumeContext } from '@/context/ParkingResumeContext/ParkingResumeContext';
import * as Styled from './styles';
import { ParkingResumeHeaderProps } from './types';

const ParkingResumeHeader = ({ }: ParkingResumeHeaderProps) => {
    const insets = useSafeAreaInsets();
    const { search, setSearch } = useParkingResumeContext();
    const { profile } = useAppContext();

    return (
        <Styled.Wrapper safePaddingTop={insets.top + 24}>
            <Styled.InfoContainer>
                <Avatar name={getAvatarText(profile?.name!)} />
                <Styled.Title>Olá, {profile?.name}</Styled.Title>
            </Styled.InfoContainer>
            <Input value={search} onChangeText={(value) => setSearch(value)} placeholder="Busca placa/ticket" icon={<SearchIcon />} />
        </Styled.Wrapper>
    );
};

export default ParkingResumeHeader;
