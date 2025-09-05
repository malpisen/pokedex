import { getPokemonByIdOrName } from "@/lib/data/pokemon";
import { formatId } from "@/lib/utils";
import PokemonCard from "@/components/pokemon-card";
import { Suspense } from "react";
import Loading from "../loading";

export default async function Page({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const pokemon = await getPokemonByIdOrName(slug);

    return (
        <section>
            <h1 className="text-center text-8xl p-5 uppercase bg-gradient-to-br from-blue-200 to-purple-400">
                #{formatId(pokemon.id)} {pokemon.name}
            </h1>
            <div className="p-10 bg-gradient-to-br from-indigo-50 to-pink-100">
                <Suspense fallback={<Loading />}>
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                </Suspense>
            </div>
        </section>
    )
}