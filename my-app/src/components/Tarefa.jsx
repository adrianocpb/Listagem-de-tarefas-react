import React from "react";
import { useTarefas } from "../context/TarefasContext.jsx";
import "./Tarefa.css";

function Tarefa({ tarefa }) {
  const { alternar, remover } = useTarefas();

  return (
    <li className={`tarefa-item ${tarefa.concluida ? "concluida" : ""}`}>
      <div className="left">
        <input
          type="checkbox"
          checked={tarefa.concluida}
          onChange={() => alternar(tarefa.id)}
        />
        <span className="tarefa-texto">{tarefa.texto}</span>
      </div>
      <div className="right">
        <button className="remover" onClick={() => remover(tarefa.id)}>Remover</button>
      </div>
    </li>
  );
}

export default React.memo(Tarefa);
