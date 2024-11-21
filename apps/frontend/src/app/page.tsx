import { Logo } from "@/components/template/logo";
import { LogoGrannde } from "@/components/template/logoGrande";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[url('/background-elementos.svg')] bg-cover h-screen flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <LogoGrannde />
        <p className="text-zinc-500 font-light w-96 leading-6  text-center select-none">
          Crie e gerencie o convite do seu evento de forma rápida e facíl, sem
          complicações!
        </p>
      </div>
      <Link href="/evento" className="botao azul text-lg uppercase">
        Criar seu Evento
      </Link>
    </div>
  );
}
