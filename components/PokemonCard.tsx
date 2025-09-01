import { Pokemon } from "@/lib/interfaces/pokemon";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    const { id, name, sprites, types, stats } = pokemon;
    const formattedId = String(id).padStart(3, "0");

    return (
        <article className="border-5 border-indigo-400 rounded-xl shadow-lg bg-blue-50 p-4 gap-0.5 w-52 mx-auto flex flex-col items-center text-center text-xs font-bold capitalize">
            <img
                src={sprites.front_default}
                alt={name}
                className={`border-3 rounded-full border-${types[0].type.name} bg-white mx-auto mt-4 mb-1`}
            />

            <p className={`rounded-xl badge-${types[0].type.name} px-1.5`}>#{formattedId}</p>

            <h3 className="text-2xl font-normal">{name}</h3>

            <ul className="flex gap-1">
                {types.map((i: { slot: number; type: { name: string } }) => {
                    return <li key={i.slot} className={`rounded-xl badge-${i.type.name} text-white px-2 py-0.5 capitalize`}>
                        {i.type.name}</li>;
                })}
            </ul>

            {/* ingen map pga HP ska vara stora bokstäver*/}
            <ul className="w-full">
                <li className="flex justify-between mt-1">
                    <span>HP</span>
                    <span>{stats[0].base_stat}</span>
                </li>
                <li className="flex justify-between mt-1">
                    <span>Attack</span>
                    <span>{stats[1].base_stat}</span>
                </li>
                <li className="flex justify-between mt-1">
                    <span>Defense</span>
                    <span>{stats[2].base_stat}</span>
                </li>
            </ul>
        </article >
    );
}