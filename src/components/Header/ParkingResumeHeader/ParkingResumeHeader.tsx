import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Input } from "@/components/Input";
import { Avatar } from "@/components/Avatar";
import { ParkingResumeHeaderProps } from "./types";
import * as Styled from "./styles";
import SearchIcon from "@/assets/icons/search.svg";

const ParkingResumeHeader = (props: ParkingResumeHeaderProps) => {
    const insets = useSafeAreaInsets();

    return (
        <Styled.Wrapper safePaddingTop={insets.top + 24}>
            <Styled.InfoContainer>
                <Avatar name="RE" />
                <Styled.Title>Olá, Rotativo Epaminondas</Styled.Title>
            </Styled.InfoContainer>
            <Input placeholder="Busca placa/ticket" icon={<SearchIcon />} />
        </Styled.Wrapper>
    )
};

export default ParkingResumeHeader;
