import { Pokemon } from "../interfaces/pokemon";
import { notFound } from "next/navigation";

async function fetchPokemon(url: string): Promise<Pokemon> {
    const response = await fetch(url);

    if (!response.ok) {
        if (response.status === 404 || response.status === 400) {
            notFound(); // Skickar användaren till din /not-found.tsx
        }
        throw new Error(`Failed to fetch Pokémon: ${response.status}`);
    }

    return response.json();
}

export async function getPokemonByIdOrName(idOrName: string): Promise<Pokemon> {
    const normalized = isNaN(Number(idOrName))
        ? idOrName.toLowerCase().trim()
        : String(Number(idOrName));
    return fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${normalized}`);
}

export async function getMultiplePokemons(ids: number[]): Promise<Pokemon[]> {
    return Promise.all(
        ids.map((id) => fetchPokemon(`https://pokeapi.co/api/v2/pokemon/${id}`))
    );
}