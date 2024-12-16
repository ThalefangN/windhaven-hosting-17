import { Button } from "@/components/ui/button";
import { Server, Shield, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-windhaven-dark overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-windhaven-primary/30 rounded-full filter blur-3xl animate-float" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-windhaven-secondary/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "-2s" }} />
          <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "-4s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Fast. Reliable.{" "}
            <span className="text-windhaven-primary animate-glow">
              Game Hosting
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience lightning-fast game servers with enterprise-grade
            infrastructure. Built for gamers, by gamers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button className="bg-windhaven-primary hover:bg-windhaven-primary/90 text-white min-w-[200px]">
              Get Started
            </Button>
            <Button
              variant="outline"
              className="border-windhaven-primary text-windhaven-primary hover:bg-windhaven-primary/10 min-w-[200px]"
            >
              View Plans
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Server,
                title: "Global Network",
                description:
                  "Servers in multiple locations for the lowest possible latency",
              },
              {
                icon: Shield,
                title: "DDoS Protection",
                description:
                  "Enterprise-grade protection against attacks, included free",
              },
              {
                icon: Zap,
                title: "Instant Setup",
                description:
                  "Get your server up and running in less than 55 seconds",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-lg border border-windhaven-primary/20 bg-windhaven-dark/50 backdrop-blur-lg hover:border-windhaven-primary/40 transition-colors"
              >
                <feature.icon className="w-12 h-12 text-windhaven-primary mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};