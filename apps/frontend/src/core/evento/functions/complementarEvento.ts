import { Id, Senha } from "@/core/shared";
import { Evento } from "../model/Evento";
import { ValidarEvento } from "./validarEvento";

export function ComplementarEvento(eventoParcial: Partial<Evento>): Evento {
  const erros = ValidarEvento(eventoParcial);

  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }

  const evento: Evento = {
    ...eventoParcial,
    id: eventoParcial.id ?? Id.novo(),
    senha: eventoParcial.senha ?? Senha.nova(10),
    publicoEsperado: +(eventoParcial.publicoEsperado ?? 1),
  } as Evento;

  return evento;
}
