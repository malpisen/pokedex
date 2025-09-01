import PokemonCard from "./pokemon-card";
import { getRandomId } from "@/lib/utils";
import { getMultiplePokemons } from "@/lib/data/pokemon";

export default async function FeaturedList() {
    const randomIds = Array.from({ length: 4 }, () => getRandomId());
    const pokemons = await getMultiplePokemons(randomIds);

    return (
        <section className="bg-gradient-to-br [background-image:linear-gradient(-10deg,_#F2E9FC,_#F5F8FF)] pt-10 px-25 pb-20">
            <h2 className="text-center text-4xl mb-10">Featured Pokémon</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {pokemons.map((pokemon: any) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </section>
    );
}