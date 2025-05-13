import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState, useEffect, useCallback } from 'react';

function useCustomAsyncStorage<T = any>(key: string, initialValue?: T) {
  const [storedValue, setStoredValue] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const item = await AsyncStorage.getItem(key);
        setStoredValue(item ? JSON.parse(item) : initialValue);
      } catch (error) {
        console.error(`Erro ao carregar chave ${key}`, error);
      } finally {
        setLoading(false);
      }
    })();
  }, [key]);

  const setValue = useCallback(
    async (value: T | ((val: T | undefined) => T)) => {
      try {
        const valueToStore = typeof value === 'function' ? (value as Function)(storedValue) : value;
        setStoredValue(valueToStore);
        await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.error(`Erro ao salvar chave ${key}`, error);
      }
    },
    [key, storedValue],
  );

  const remove = useCallback(async () => {
    try {
      await AsyncStorage.removeItem(key);
      setStoredValue(undefined);
    } catch (error) {
      console.error(`Erro ao remover chave ${key}`, error);
    }
  }, [key]);

  return { value: storedValue, setValue, remove, loading };
}

export default useCustomAsyncStorage;
