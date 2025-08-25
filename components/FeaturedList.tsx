import PokemonCard from "./PokemonCard";

async function getRandomPokemon(ids: number[]) {
    const responses = await Promise.all(
        ids.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json()))
    );
    return responses;
}

export default async function FeaturedList() {
    // Slumpa 4 Pokémon mellan 1–151
    const randomIds = Array.from({ length: 4 }, () => Math.floor(Math.random() * 151) + 1);
    const pokemons = await getRandomPokemon(randomIds);

    return (
        <section className="bg-gradient-to-br [background-image:linear-gradient(-10deg,_#F2E9FC,_#F5F8FF)] pt-10 px-20 pb-15">
            <h2 className="text-center text-4xl mb-10">Featured Pokémon</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {pokemons.map((pokemon: any) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
            </div>
        </section>
    );
}