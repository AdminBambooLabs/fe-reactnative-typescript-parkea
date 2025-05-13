import { useEffect, useRef, useState } from 'react';

type UseCountdownProps = {
  countdown: number;
  onEnd: () => void;
};

export function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const paddedMinutes = String(minutes).padStart(2, '0');
  const paddedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${paddedMinutes}:${paddedSeconds}`;
}

function useCountdown({ countdown, onEnd }: UseCountdownProps) {
  const [currentTime, setCurrentTime] = useState(countdown);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    startCountdown();

    return () => {
      stop(); // limpa no unmount
    };
  }, []);

  const startCountdown = () => {
    stop();
    setCurrentTime(countdown);
    intervalRef.current = setInterval(() => {
      setCurrentTime(prev => {
        if (prev <= 1) {
          stop();
          onEnd();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const stop = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const reset = () => {
    startCountdown();
  };

  return { currentTime, stop, reset };
}

export default useCountdown;
