import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <nav className="breakout flex items-center justify-between">
            <Link href={"/"}>
                <Image
                    src="/Logo.png"
                    width={50}
                    height={50}
                    alt="Logo"
                />
                <h1 className="text-center text-3xl text-white">Pokédex</h1>
            </Link>
            <ul className="flex gap-4">

            </ul>
        </nav>
    );
}