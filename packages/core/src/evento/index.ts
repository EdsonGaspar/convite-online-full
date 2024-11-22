import { Evento } from "./model/Evento";
import Convidado from "./model/Convidado";
import { ComplementarConvidado } from "./functions/complementarConvidado";
import { ComplementarEvento } from "./functions/complementarEvento";
import { CriarConvidadoVazio } from "./functions/criarConvidadoVazio";
import { CriarEventoVazio } from "./functions/criarEventoVazio";

export type { Evento, Convidado };
export {
  ComplementarConvidado,
  ComplementarEvento,
  CriarEventoVazio,
  CriarConvidadoVazio,
};
