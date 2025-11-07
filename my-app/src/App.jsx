import { useState } from "react";
import { useTarefas } from "./context/TarefasContext.jsx";
import ListaTarefas from "./components/ListaTarefas.jsx";
import "./App.css";

export default function App() {
  const [texto, setTexto] = useState("");
  const { adicionar } = useTarefas();

  const handleSubmit = e => {
    e.preventDefault();
    if (!texto.trim()) return;
    adicionar(texto.trim());
    setTexto("");
  };

  return (
    <main>
      <h1>To-Do List Avançada</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={texto}
          onChange={e => setTexto(e.target.value)}
          placeholder="Digite uma tarefa..."
        />
        <button type="submit">Adicionar</button>
      </form>

      <ListaTarefas />
    </main>
  );
}
