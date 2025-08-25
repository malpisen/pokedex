import Image from "next/image";

export default function SearchForm() {
    return (
        <form action="/search" method="GET" className="flex justify-center my-6 px-4">
            <input
                type="text"
                name="name"
                placeholder="Search for a Pokémon..."
                className="shadow-lg p-2 w-64 rounded-l-lg focus:outline-none"
            />
            <button
                type="submit"
                className="shadow-lg bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
            >
                <Image
                    src="/Search.svg"
                    width={25}
                    height={25}
                    alt="Search"
                />
            </button>
        </form>
    );
}