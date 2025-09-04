import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between my-5">
            <Link className="flex items-center gap-3" href="/">
                <Image
                    src="/Logo.png"
                    width={50}
                    height={50}
                    alt="Logo"
                />
                <h1 className="text-3xl text-transparent [background-clip:text]
                bg-gradient-to-r from-purple-800 to-blue-800 ">
                    Pokédex</h1>
            </Link>
            <ul className="flex gap-6 text-xl">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/pokemon">Pokédex</Link></li>
                <li><Link href="/">Types</Link></li>
                <li><Link href="/">Favourites</Link></li>
            </ul>
        </nav>
    );
}