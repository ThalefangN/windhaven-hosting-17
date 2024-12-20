import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

export const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Courses", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Resources", href: "/documentation" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-windhaven-dark/80 backdrop-blur-xl border-b border-windhaven-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white tracking-tight">
              Botsedu<span className="bg-gradient-to-r from-windhaven-primary to-windhaven-secondary bg-clip-text text-transparent">Learn</span>
            </a>
          </div>

          {isMobile ? (
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" className="bg-windhaven-primary hover:bg-windhaven-primary/90 text-white">
                Start Learning
              </Button>
            </div>
          )}
        </div>

        <div
          className={`transform transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-windhaven-primary/10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <Button className="w-full mt-4 bg-windhaven-primary hover:bg-windhaven-primary/90 text-white">
              Start Learning
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};