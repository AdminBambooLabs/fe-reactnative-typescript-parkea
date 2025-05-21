import * as Styled from './styles';
import { NavigationDotsProps } from './types';

const NavigationDots = ({ dots, activeDot }: NavigationDotsProps) => {

    return (
        <Styled.Wrapper>
            {[...Array(dots)].map((_, index) => {
                return (
                    <Styled.Dot
                        isActive={index === activeDot}
                        key={index}
                    />
                );
            })}
        </Styled.Wrapper>
    );
};

export default NavigationDots;
