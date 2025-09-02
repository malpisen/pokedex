import Link from "next/link";
import Image from "next/image";
import { getRandomId } from "@/lib/utils";

export default function Hero() {
    return (
        <section className="flex flex-col items-center gap-4 p-14 bg-gradient-to-br from-blue-200 to-purple-400">
            <h1 className="text-center mt-14 text-8xl text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
            <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. <br />Find your favourite and learn about their stats.</p>
            <Link
                className="btn-primary" href={`/pokemon/${getRandomId()}`}>
                <Image
                    src="/Dice.svg"
                    width={25}
                    height={25}
                    alt="Dice"
                />
                Random Pokémon</Link>
        </section>
    );
}