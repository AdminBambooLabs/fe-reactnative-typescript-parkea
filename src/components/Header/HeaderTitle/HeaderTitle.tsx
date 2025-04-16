import * as Styled from './styles';
import { HeaderTitleProps } from './types';

const HeaderTitle = ({ children }: HeaderTitleProps) => {

    return (
        <Styled.Title>{children}</Styled.Title>
    );
};

export default HeaderTitle;
