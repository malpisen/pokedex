import { getPokemonByIdOrName } from "@/lib/data/pokemon";
import SearchForm from "@/components/search-form";
import PokemonCard from "@/components/pokemon-card";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "../loading";

export default async function Page({ searchParams }: { searchParams: { name?: string } }) {
  const params = await searchParams;
  const query = params.name?.trim();

  if (!query) {
    return (
      <section className="flex flex-col items-center justify-center min-h-[60vh]
      bg-gradient-to-br from-pink-200 to-indigo-200">
        <h1 className="text-5xl">Please enter a Pokémon name or ID to search</h1>
        <SearchForm />
      </section>
    );
  }

  try {
    const pokemon = await getPokemonByIdOrName(query);

    return (
      <section className="p-10 bg-gradient-to-br from-indigo-50 to-pink-100">
        <h1 className="text-center text-4xl mb-10">
          Search results for: <span className="font-bold">{query}</span>
        </h1>
        <div className="flex justify-center">
          <Suspense fallback={<Loading />}>
            <PokemonCard pokemon={pokemon} />
          </Suspense>
        </div>
      </section>
    );
  } catch (error) {
    notFound();
  }
}
