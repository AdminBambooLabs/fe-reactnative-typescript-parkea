import { useEffect, useState } from 'react';
import { useLocalNavigation } from '@/hooks/useLocalNavigation';
import { colors } from '@/theme/colors';
import * as Styled from './styles';
import { BigLoadingProps } from './types';

const BigLoading = ({ shiftTime = 2000, titles = [], descriptions = [] }: BigLoadingProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const { setOptions } = useLocalNavigation();

  useEffect(() => {
    setOptions({ headerShown: false });

    return () => setOptions({ headerShown: true });
  });

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
        {titles.length && (
          <Styled.Title>{titles?.[currentStepIndex] || titles?.[0]}</Styled.Title>
        )}
        {descriptions.length && (
          <Styled.Description>{descriptions?.[currentStepIndex] || descriptions?.[0]}</Styled.Description>
        )}
      </Styled.InfoContainer>
    </Styled.Wrapper>
  );
};

export default BigLoading;
