import { Righteous } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const fontRighteous = Righteous({
  weight: "400",
  subsets: ["latin"],
});

export function Logo() {
  return (
    <Link
      href="/"
      className={`${fontRighteous.className} flex items-center gap-2`}
    >
      <Image
        src="/logo.svg"
        alt="Logo do Convite Online"
        width={50}
        height={50}
      />
      <h1 className="flex flex-col items-center text-lg leading-5">
        <div className="uppercase">
          Convit<span className="text-blue-500">3</span>
        </div>
        <div className="uppercase">Digital</div>
      </h1>
    </Link>
  );
}
