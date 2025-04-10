import { HeaderTitleProps } from "./types";
import * as Styled from "./styles";

const HeaderTitle = ({ children }: HeaderTitleProps) => {

    return (
        <Styled.Title>{children}</Styled.Title>
    )
};

export default HeaderTitle;
