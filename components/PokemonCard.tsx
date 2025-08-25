type PokemonCardProps = {
    pokemon: any;
};

export default function PokemonCard({ pokemon }: PokemonCardProps) {
    return (
        <div className="border rounded-lg shadow p-4 text-center">
            <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="mx-auto"
            />
            <h3 className="text-lg font-bold">{pokemon.name}</h3>
            <p>HP: {pokemon.stats[0].base_stat}</p>
            <p>Attack: {pokemon.stats[1].base_stat}</p>
            <p>Defense: {pokemon.stats[2].base_stat}</p>
        </div>
    );
}