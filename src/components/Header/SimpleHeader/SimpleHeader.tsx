import { SimpleHeaderProps } from "./types";
import * as Styled from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SimpleHeader = (props: SimpleHeaderProps) => {
    const { options, navigation } = props;
    const insets = useSafeAreaInsets();

    return (
        <Styled.Wrapper safePaddingTop={insets.top + 12}>
            <Styled.Container>
                {navigation.canGoBack() ? <Styled.BackButton onPress={() => navigation.goBack()} /> : null}
                <Styled.Title>{options.title}</Styled.Title>
                <Styled.RightElementContainer>
                    {!!options.headerRight ? options.headerRight({ canGoBack: false, tintColor: '' }) : null}
                </Styled.RightElementContainer>
            </Styled.Container>
        </Styled.Wrapper>
    )
};

export default SimpleHeader;
