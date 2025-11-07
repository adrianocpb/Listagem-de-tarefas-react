import { useMemo, useState } from "react";
import { useTarefas } from "../context/TarefasContext.jsx";
import Tarefa from "./Tarefa.jsx";
import "./ListaTarefas.css";

export default function ListaTarefas() {
  const { tarefas } = useTarefas();
  const [filtro, setFiltro] = useState("todas");

  const filtradas = useMemo(() => {
    if (filtro === "concluidas") return tarefas.filter(t => t.concluida);
    if (filtro === "pendentes") return tarefas.filter(t => !t.concluida);
    return tarefas;
  }, [tarefas, filtro]);

  return (
    <>
      <div className="filtros">
        <button className={filtro === "todas" ? "ativo" : ""} onClick={() => setFiltro("todas")}>Todas</button>
        <button className={filtro === "concluidas" ? "ativo" : ""} onClick={() => setFiltro("concluidas")}>Concluídas</button>
        <button className={filtro === "pendentes" ? "ativo" : ""} onClick={() => setFiltro("pendentes")}>Pendentes</button>
      </div>

      <ul className="lista-tarefas">
        {filtradas.map(t => <Tarefa key={t.id} tarefa={t} />)}
      </ul>
    </>
  );
}
