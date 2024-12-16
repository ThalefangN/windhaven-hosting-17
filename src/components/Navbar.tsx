import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

export const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Documentation", href: "/documentation" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-windhaven-dark/80 backdrop-blur-xl border-b border-windhaven-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-white tracking-tight">
              Wind<span className="bg-gradient-to-r from-windhaven-primary to-windhaven-secondary bg-clip-text text-transparent">Haven</span>
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
                Get Started
              </Button>
            </div>
          )}
        </div>

        {isMobile && (
          <div
            className={`transform transition-all duration-300 ease-in-out ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-4 pointer-events-none"
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
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};