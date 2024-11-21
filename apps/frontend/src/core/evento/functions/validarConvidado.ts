import Convidado from "../model/Convidado";

export function ValidarConvidado(convidado: Partial<Convidado>): string[] {
  const erros: string[] = [];

  if (!convidado.nome) {
    erros.push("O nome do convidado é obrigatório.");
  }
  if (!convidado.email) {
    erros.push("O email do convidado é obrigatório.");
  }
  return erros;
}
