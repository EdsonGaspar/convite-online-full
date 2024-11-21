import Image from "next/image";

export interface EstatisticasProps {
  text: string;
  value: any;
  imgan: string;
}

export function Estatisticas(props: EstatisticasProps) {
  return (
    <div>
      <div className="flex items-center bg-zinc-900 rounded-lg px-6 py-2.5 gap-5">
        <div className="flex-1 flex flex-col ">
          <span className="font-light text-zinc-400">
            {props.text}
            {": "}
          </span>

          <span className="text-2xl font-black">{props.value}</span>
        </div>
        <Image
          src={props.imgan}
          alt="Imagen do evento"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}
