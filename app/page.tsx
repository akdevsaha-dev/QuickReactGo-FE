import { Community } from "./components/Community";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Howitwork } from "./components/Howitworks";
import { Navbar } from "./components/Navbar";
import { Structure } from "./components/Structure";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Howitwork />
      <Structure />
      <Community />
      <Footer />
      <div className="h-5 w-full flex-center text-sm text-neutral-500">© {new Date().getFullYear()} create-reactgo-app. All rights reserved.</div>
    </div>
  );
}
