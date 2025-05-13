export type ResendCodeStatus = 'timeout' | 'counting';

export interface ResendCodeProps {
  status: ResendCodeStatus;
  time: number;
  onPressResend: () => void;
}
