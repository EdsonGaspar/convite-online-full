import Convidado from "./Convidado";

export interface Evento {
  id: string; //UUID
  alias: string; //aniversario-edson-2025
  senha: string;
  nome: string;
  data: Date;
  local: string;
  descricao: string;
  imagem: string;
  imagemBackground: string;
  publicoEsperado: number;
  convidados: Convidado[];
}
