import { getRandomId } from "@/lib/utils";
import { getMultiplePokemons } from "@/lib/data/pokemon";
import { Pokemon } from "@/lib/interfaces/pokemon";
import PokemonCard from "./pokemon-card";

export default async function FeaturedList() {
    {/*TODO inga likadana ids*/ }
    const randomIds = Array.from({ length: 4 }, () => getRandomId());
    const pokemons = await getMultiplePokemons(randomIds);

    return (
        <section className="pt-10 px-25 pb-20 bg-gradient-to-br from-indigo-50 to-pink-100">
            <h2 className="text-center text-4xl mb-10">Featured Pokémon</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {pokemons.map((pokemon: Pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </section>
    );
}