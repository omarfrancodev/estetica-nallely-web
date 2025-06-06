import { Header } from "../components/header";
import Hero from "./sections/hero";
import Services from "./sections/services";

export default function Home() {
  return (
    <main className="min-h-screen scroll-smooth">
      <Header />
      <Hero />
      <Services />
    </main>
  );
}
