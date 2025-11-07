import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue) {
  const [valor, setValor] = useState(() => {
    const salvo = localStorage.getItem(key);
    return salvo ? JSON.parse(salvo) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(valor));
  }, [valor]);

  return [valor, setValor];
}
