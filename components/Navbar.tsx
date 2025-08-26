import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between my-5">
            <Link className="flex items-center gap-3" href={"/"}>
                <Image
                    src="/Logo.png"
                    width={50}
                    height={50}
                    alt="Logo"
                />
                <h1 className="text-center text-3xl text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Pokédex</h1>
            </Link>
            <ul className="flex gap-6 text-xl">
                <li>Home</li>
                <li>Pokédex</li>
                <li>Types</li>
                <li>Favourites</li>
            </ul>
        </nav>
    );
}