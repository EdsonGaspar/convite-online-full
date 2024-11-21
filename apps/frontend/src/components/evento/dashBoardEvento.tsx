import { Convidado, Evento } from "@/core";
import InformacoesEvento from "./informacoesEventos";
import { AcessarViaQrCode } from "./acessarViaQrCode";
import { Estatisticas } from "../shared/estatisticas";
import { ListarConvidado } from "./listaConvidado";

export interface DashBoardEventoProps {
  evento: Evento;
  presentes: Convidado[];
  ausentes: Convidado[];
  totalGeral: number;
}

export default function DashBoardEvento(props: DashBoardEventoProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 self-stretch">
        <InformacoesEvento evento={props.evento} className="flex-1" />
        <AcessarViaQrCode evento={props.evento} />
      </div>
      <div className="grid grid-cols-3 gap-6 mt-4">
        <Estatisticas
          text="Espectativa de convidado"
          value={props.evento.publicoEsperado}
          imgan="/icones/convidados.svg"
        />
        <Estatisticas
          text="Confirmações"
          value={props.presentes.length}
          imgan="/icones/confirmados.svg"
        />
        <Estatisticas
          text="Total de pessoas confirmadas"
          value={props.totalGeral}
          imgan="/icones/acompanhantes.svg"
        />
      </div>

      <button className="botao azul self-end mt-12">
        <span>Actualizar lista de Convidados</span>
      </button>

      <span className="flex py-2 text-xl font-bold text-white/80 ">
        Convidados que confirmaram a PRESENÇA
      </span>
      <ListarConvidado convidados={props.presentes} />
      <span className="flex py-2 text-xl font-bold text-white/80 ">
        Convidados que confirmaram a AUSÊNCIA
      </span>
      <ListarConvidado convidados={props.ausentes} />
    </div>
  );
}
