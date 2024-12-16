import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-windhaven-dark via-windhaven-dark/95 to-windhaven-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Documentation &
            <span className="block bg-gradient-to-r from-windhaven-primary to-windhaven-secondary bg-clip-text text-transparent">
              Resources
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Everything you need to know about setting up and managing your game servers.
          </p>
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full h-12 pl-12 pr-4 rounded-lg bg-windhaven-dark/50 border border-windhaven-primary/20 text-white placeholder-gray-400 focus:outline-none focus:border-windhaven-primary/40"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Getting Started",
              description: "Learn the basics of setting up your first game server.",
              links: ["Quick Start Guide", "Server Requirements", "Basic Configuration"],
            },
            {
              title: "Game Guides",
              description: "Detailed guides for popular game servers.",
              links: ["Minecraft Server Setup", "CS:GO Configuration", "ARK Server Guide"],
            },
            {
              title: "Server Management",
              description: "Learn how to manage and optimize your servers.",
              links: ["Control Panel Guide", "Performance Tuning", "Backup Management"],
            },
            {
              title: "API Reference",
              description: "Complete API documentation for developers.",
              links: ["API Overview", "Authentication", "Endpoints"],
            },
            {
              title: "Troubleshooting",
              description: "Common issues and their solutions.",
              links: ["Common Problems", "Network Issues", "Error Codes"],
            },
            {
              title: "Best Practices",
              description: "Optimize your server's performance and security.",
              links: ["Security Guide", "Performance Tips", "Monitoring"],
            },
          ].map((section) => (
            <div
              key={section.title}
              className="p-6 rounded-xl border border-windhaven-primary/20 bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30 backdrop-blur-lg hover:border-windhaven-primary/40 transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-white mb-2">
                {section.title}
              </h2>
              <p className="text-gray-400 mb-4">{section.description}</p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-windhaven-primary hover:text-windhaven-primary/80 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;