import Hero from "@/components/Hero";
import FeaturedList from "@/components/FeaturedList";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <main>
      <Hero />
      <SearchForm />
      <FeaturedList />
    </main>
  );
}
