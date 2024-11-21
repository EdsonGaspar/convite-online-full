import { Data, Evento } from "@/core";
import Informacao from "../shared/informacao";

export interface InformacoesEventoProps {
  evento: Evento;
  className?: string;
}

export default function InformacoesEvento(props: InformacoesEventoProps) {
  const { evento } = props;
  return (
    <div className={`flex flex-col gap-2 ${props.className ?? ""}`}>
      <div className="flex-1 flex gap-4 items-center border border-zinc-800 px-6 py-3 rounded-md">
        <span className="text-2xl font-black">{evento.alias}</span>
        <span className="text-xl text-zinc-300">{evento.nome}</span>
      </div>
      <div className="flex gap-2 ">
        <Informacao label="Data:">
          <span>{new Date(evento.data!).toLocaleDateString()}</span>
          <span>{new Date(evento.data!).toLocaleTimeString()}</span>
        </Informacao>
        <Informacao label="Local:">{evento.local}</Informacao>
      </div>
      <div>
        <Informacao label="Descricao:">{evento.descricao}</Informacao>
      </div>
    </div>
  );
}
