import { Pokemon } from "../interfaces/pokemon";

export async function getPokemonById(id: string) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon: Pokemon = await response.json();
    return pokemon;
}

export async function getMultiplePokemons(ids: number[]) {
    const responses = await Promise.all(
        ids.map(id => fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json()))
    );
    return responses;
}