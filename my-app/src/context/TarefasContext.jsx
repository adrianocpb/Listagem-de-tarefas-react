import { createContext, useContext, useEffect, useState } from "react";

const TarefasContext = createContext();

export function TarefasProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const salvas = localStorage.getItem("tarefas");
    if (salvas) setTarefas(JSON.parse(salvas));
  }, []);

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionar = (texto) => {
    const nova = { id: crypto.randomUUID(), texto, concluida: false };
    setTarefas((prev) => [...prev, nova]);
  };

  const alternar = (id) => {
    setTarefas((prev) => prev.map(t => t.id === id ? { ...t, concluida: !t.concluida } : t));
  };

  const remover = (id) => {
    setTarefas((prev) => prev.filter(t => t.id !== id));
  };

  return (
    <TarefasContext.Provider value={{ tarefas, adicionar, alternar, remover }}>
      {children}
    </TarefasContext.Provider>
  );
}

export function useTarefas() {
  const ctx = useContext(TarefasContext);
  if (!ctx) throw new Error("useTarefas must be used within TarefasProvider");
  return ctx;
}
