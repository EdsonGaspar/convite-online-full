import { Alias } from "@/core/shared";
import { Evento } from "../model/Evento";

export function ValidarEvento(evento: Partial<Evento>): string[] {
  const erros: string[] = [];

  if (!evento.alias) {
    erros.push("O alias do evento é obrigatório.");
  }
  if (!evento.nome) {
    erros.push("O nome do evento é obrigatório.");
  }
  if (!evento.descricao) {
    erros.push("A descrição do evento é obrigatória.");
  }
  if (!evento.data) {
    erros.push("A data do evento é obrigatória.");
  }
  if (!evento.local) {
    erros.push("O local do evento é obrigatório.");
  }
  if (!evento.publicoEsperado || evento.publicoEsperado < 1) {
    erros.push(
      "O público esperado do evento é obrigatório, não pode ser menor que 1."
    );
  }
  if (!evento.imagem) {
    erros.push("A imagem do evento é obrigatória.");
  }
  if (!evento.imagemBackground) {
    erros.push("A imagem de background do evento é obrigatória.");
  }
  if (!evento.senha) {
    erros.push("A senha do evento é obrigatória.");
  }

  return erros;
}
