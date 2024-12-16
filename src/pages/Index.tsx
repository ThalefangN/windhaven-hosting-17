import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-windhaven-dark via-windhaven-dark/95 to-windhaven-dark text-white">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Index;