import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <nav className="bg-neutral-800 breakout flex items-center justify-between">
            <ul className="flex gap-4">
                <li>
                    <Link href={"/"}>
                        <Image
                            src="/Logo.png"
                            width={50}
                            height={50}
                            alt="Logo"
                        />
                        <h1 className="text-center text-3xl text-white">Pokédex</h1>
                    </Link>
                </li>
                <li>
                    <p className="text-white">Explore the world of Pokémon</p>
                </li>
                <li>
                    <Image
                        src="/Facebook.svg"
                        width={40}
                        height={40}
                        alt="Facebook"
                    />
                    <Image
                        src="/Instagram.svg"
                        width={40}
                        height={40}
                        alt="Instagram"
                    />
                </li>
            </ul>
        </nav>
    );
}