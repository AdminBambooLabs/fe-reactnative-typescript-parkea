import { useCallback, useRef } from 'react';

function useDebounce<T extends (...args: any[]) => void>(fn: T, delay: number) {
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

  return useCallback((...args: Parameters<T>) => {
    if (timer.current) {clearTimeout(timer.current);}
    timer.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }, [fn, delay]);
}

export default useDebounce;
