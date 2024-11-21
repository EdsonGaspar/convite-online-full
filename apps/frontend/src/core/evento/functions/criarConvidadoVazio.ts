import { Id } from "@/core/shared";
import Convidado from "../model/Convidado";

export function CriarConvidadoVazio(): Partial<Convidado> {
  return {
    id: Id.novo(),
    nome: "",
    email: "",
    confirmado: true,
    possuiAcompanhante: false,
    qtdAcompanhantes: 0,
  };
}
