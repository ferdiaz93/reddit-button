import { useCallback, useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T) => {
  const initialize = (key: string) => {
    try {
      const item = localStorage.getItem(key);
      if (item && item !== "undefined") {
        return JSON.parse(item);
      }

      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } catch {
      return initialValue;
    }
  };

  const [state, setState] = useState<T | null>(null);

  useEffect(() => {
    setState(initialize(key));
  }, [key]);

  const setValue = useCallback(
    (value: T | ((storedValue: T) => T)) => {
      try {
        const valueToStore = value instanceof Function ? (value as Function)(state!) : value;
        setState(valueToStore);
        localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    },
    [key, state]
  );

  const remove = useCallback(() => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }, [key]);

  return [state, setValue, remove] as const;
};
