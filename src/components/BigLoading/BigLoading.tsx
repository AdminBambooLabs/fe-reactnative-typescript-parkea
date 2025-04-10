import { useEffect, useState } from 'react';
import * as Styled from './styles';
import { BigLoadingProps } from './types';
import { colors } from '@/theme/colors';

const BigLoading = ({ shiftTime = 2000, titles = [], descriptions = [] }: BigLoadingProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    if (currentStepIndex < titles.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentStepIndex(prev => prev + 1);
      }, shiftTime);

      return () => clearTimeout(timeout);
    }
  }, [currentStepIndex]);

  return (
    <Styled.Wrapper>
      <Styled.CircularLoader color={colors.white} size={62} />

      <Styled.InfoContainer>
        <Styled.Title>{titles[currentStepIndex]}</Styled.Title>
        <Styled.Description>{descriptions[currentStepIndex]}</Styled.Description>
      </Styled.InfoContainer>
    </Styled.Wrapper>
  );
};

export default BigLoading;
