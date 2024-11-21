import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fontRighteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export function LogoGrannde() {
  return (
    <Link
      href="/"
      className={`${fontRighteous.className} flex flex-col items-center gap-2`}
    >
      <Image
        src="/logo.svg"
        alt="Logo do Convite Online"
        width={100}
        height={100}
      />
      <h1 className=" text-5xl leading-10">
        <div className="uppercase">
          Convit<span className="text-blue-500">3</span> Digital
        </div>
      </h1>
    </Link>
  );
}
