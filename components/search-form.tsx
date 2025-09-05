import Image from "next/image";

export default function SearchForm() {
    return (
        <form action="/pokemon/search" method="GET" className="flex justify-center my-10">
            <div 
                className="flex justify-between shadow-lg rounded-lg bg-white 
                px-5 py-3 w-130 text-lg focus:outline-none">
            <input
                type="text"
                name="name"
                placeholder="Search for a Pokémon..."
                className="focus:outline-none text-lg"
            />
            <button
                type="submit"
                className="bg-indigo-400 px-3 py-1 rounded-lg cursor-pointer"
            >
                <Image
                    src="/Search.svg"
                    width={15}
                    height={15}
                    alt="Search"
                />
            </button>
            </div>
        </form>
    );
}