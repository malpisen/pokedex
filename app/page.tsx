import Hero from "@/components/hero";
import FeaturedList from "@/components/featured-list";
import SearchForm from "@/components/search-form";

export default function Page() {
  return (
    <main>
      <Hero />
      <SearchForm />
      <FeaturedList />
    </main>
  );
}
