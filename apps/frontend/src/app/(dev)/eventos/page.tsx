import { eventos, Senha } from "@/core";
import Image from "next/image";
import Link from "next/link";
import { json } from "node:stream/consumers";
import QRCode from "react-qr-code";

export default function PaginaEvento() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className="flex flex-col text-center bg-slate-800 rounded-md overflow-hidden w-full"
        >
          <div className="relative w-full h-52">
            <Image
              src={evento.imagem}
              fill
              alt={evento.nome}
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col items-center gap-5 p-7">
            <span className="text-lg font-black">{evento.nome}</span>
            <p className="flex-1 text-sm text-zinc-400">{evento.descricao}</p>

            {/* Implementação do Qr-Code */}
            <QRCode
              value={JSON.stringify({ id: evento.id, senha: evento.senha })}
              className="w-44 h-44"
            />

            <div className="flex gap-5">
              <Link
                href={`/evento/admin/${evento.id}/${evento.senha}`}
                className="flex-1 botao vermelho"
              >
                Admin
              </Link>
              <Link
                href={`/convite/${evento.alias}`}
                className="flex-1 botao verde"
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
