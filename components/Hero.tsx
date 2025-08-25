import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    const randomId = Math.floor(Math.random() * 151) + 1;

    return (
        <section className="flex flex-col items-center gap-4 bg-gradient-to-br [background-image:linear-gradient(-10deg,_#C97FE4,_#AECDF6)] p-14">
            <h1 className="text-center mt-14 text-8xl font-extrabold text-transparent bg-gradient-to-r from-purple-800 to-blue-800 [background-clip:text]">Gotta catch 'em all!</h1>
            <p className="text-center text-white text-xl">Discover, search and explore the amazing world of Pokémon. <br />Find your favourite and learn about their stats.</p>
            <Link
                className="btn-primary" href={`/pokemon/${randomId}`}>
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