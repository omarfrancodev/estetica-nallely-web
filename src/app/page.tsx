import Header from "./sections/header";
import Hero from "./sections/hero";
import Services from "./sections/services";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
    </main>
  );
}
