import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <nav className="bg-neutral-800 flex-col items-center justify-between pt-10 pb-15">
            <ul className="flex flex-col items-center gap-5">
                <li>
                    <Link className="flex items-center gap-3" href={"/"}>
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
                    <p className="text-white text-lg">Explore the world of Pokémon</p>
                </li>
                <li className="flex gap-8">
                    <Image
                        src="/Facebook.svg"
                        width={35}
                        height={35}
                        alt="Facebook"
                    />
                    <Image
                        src="/Instagram.svg"
                        width={35}
                        height={35}
                        alt="Instagram"
                    />
                </li>
            </ul>
        </nav>
    );
}