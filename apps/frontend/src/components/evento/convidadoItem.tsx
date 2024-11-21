import { Convidado } from "@/core";

export interface ConvidadoItem {
  convidado: Convidado;
}

export function ConvidadoItem(props: ConvidadoItem) {
  return (
    <li className="flex justify-between items-center border border-zinc-800 px-6 py-2 bg-black/40 rounded-md">
      <div className="flex flex-col">
        <span className="text-xl font-bold">{props.convidado.nome}</span>
        <span className="text-sm font-light text-zinc-400">
          {props.convidado.email}
        </span>
      </div>
      <div className="flex flex-col items-end">
        <span className="text-sm font-light text-zinc-400">Acompanhantes</span>
        <span className="text-xl font-bold">
          {props.convidado.qtdAcompanhantes}
        </span>
      </div>
    </li>
  );
}
