import { Convidado } from "@/core";
import { ConvidadoItem } from "./convidadoItem";

export interface ListaConvidadoProps {
  convidados: Convidado[];
}

export function ListarConvidado(props: ListaConvidadoProps) {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {props.convidados.map((convidado) => (
          <ConvidadoItem key={convidado.id} convidado={convidado} />
        ))}
      </ul>
    </div>
  );
}
