import Explore from "@/components/ui/Explore";
import Hero from "@/components/ui/Hero";

export default async function Home() {

  return (
    <main className="overflow-hidden">
      <Hero />
      <Explore />
    </main>
  );
}
