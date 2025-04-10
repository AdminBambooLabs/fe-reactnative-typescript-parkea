import { Icons } from '@/assets/icons/types';
import * as Styled from './styles';
import { ToastProps, ToastTypes } from './types';
import { Icon } from '../Icon';

const iconByType: Record<ToastTypes, Icons> = {
  success: "check-square-broken",
  warning: "alert-triangle",
  error: "alert-circle"
}

const Toast = ({ title = '', type = 'success' }: ToastProps) => {
  return (
    <Styled.Wrapper type={type}>
      <Icon name={iconByType[type]} />
      <Styled.Text type={type}>{title}</Styled.Text>
    </Styled.Wrapper>
  );
};

export default Toast;
