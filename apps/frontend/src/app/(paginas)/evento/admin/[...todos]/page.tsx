"use client";
import DashBoardEvento from "@/components/evento/dashBoardEvento";
import FormSenhaEvento from "@/components/evento/formSenhaEvento";
import { Convidado, Evento, eventos } from "@/core";
import { use, useEffect, useState } from "react";

export default function PaginaAdminEvento(props: any) {
  const params: any = use(props.params);
  const id = params.todos[0];
  const [evento, setEvento] = useState<Evento | null>(null);
  const [senha, setSenha] = useState<String | null>(params.todos[1] ?? null);

  const convidadosPresentes =
    evento?.convidados.filter((c) => c.confirmado) ?? [];

  const convidadosAusentes =
    evento?.convidados.filter((c) => !c.confirmado) ?? [];

  const convidadosTotal = convidadosPresentes.reduce(
    (total: number, convidado: Convidado) => {
      return total + convidado.qtdAcompanhantes + 1;
    },
    0
  );

  function carregarEvento() {
    const evento = eventos.find((ev) => ev.id === id && ev.senha === senha);
    setEvento(evento ?? null);
  }

  // Carregar o evento quando
  useEffect(() => {
    carregarEvento();
  }, [id]);

  return (
    <div className="flex flex-col items-center">
      {evento ? (
        <DashBoardEvento
          evento={evento}
          presentes={convidadosPresentes}
          ausentes={convidadosAusentes}
          totalGeral={convidadosTotal ?? 0}
        />
      ) : (
        <FormSenhaEvento />
      )}
    </div>
  );

  // return evento ? (
  //   <div className="flex flex-col">
  //     {/* <span>Id: {id}</span>
  //     <span>Senha: {senha}</span> */}
  //     <span>Nome: {evento.nome}</span>
  //   </div>
  // ) : null;
}
