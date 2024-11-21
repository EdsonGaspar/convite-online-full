import { Evento, Id, Senha } from "@/core";
import QRCode from "react-qr-code";

export interface AcessarViaQrCodeProps {
  evento: Evento;
}

export function AcessarViaQrCode(props: AcessarViaQrCodeProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 border border-zinc-800 px-10">
      <span className="text-sm font-light text-zinc-400">
        Acesse via Mobile
      </span>
      <QRCode
        value={JSON.stringify({
          Id: props.evento.id,
          Senha: props.evento.senha,
        })}
        className="w-40 h-40"
      />
    </div>
  );
}
