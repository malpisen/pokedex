import Hero from "@/components/hero";
import FeaturedList from "@/components/featured-list";
import SearchForm from "@/components/search-form";

export default function Home() {
  return (
    <main>
      <Hero />
      <SearchForm />
      <FeaturedList />
    </main>
  );
}
