import Convidado from "../model/Convidado";
import { ValidarConvidado } from "./validarConvidado";

export function ComplementarConvidado(
  convidado: Partial<Convidado>
): Convidado {
  const erros = ValidarConvidado(convidado);
  if (erros.length > 0) {
    throw new Error(erros.join("\n"));
  }

  const qtdeAcompanhantes = convidado.qtdAcompanhantes ?? 0;
  const temAcompanhantes =
    convidado.possuiAcompanhante &&
    convidado.confirmado &&
    qtdeAcompanhantes > 0;

  const convidadadoActualizado = {
    ...convidado,
    qtdAcompanhantes: temAcompanhantes ? qtdeAcompanhantes : 0,
    possuiAcompanhante: temAcompanhantes,
  };

  return convidadadoActualizado as Convidado;
}
