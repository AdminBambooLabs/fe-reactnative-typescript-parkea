import * as Styled from './styles';
import { ToastProps } from './types';

const Toast = ({ title = '', type = 'success' }: ToastProps) => {

  return (
    <Styled.Wrapper type={type}>
      <Styled.Text>{title}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default Toast;
