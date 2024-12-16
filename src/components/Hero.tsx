import { Button } from "@/components/ui/button";
import { Server, Shield, Zap, Globe, Users, Cpu } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-windhaven-dark overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-windhaven-primary/20 rounded-full filter blur-3xl animate-float" />
          <div className="absolute top-1/3 right-1/4 w-[32rem] h-[32rem] bg-windhaven-secondary/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
          <div className="absolute bottom-1/4 left-1/3 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full filter blur-3xl animate-float" style={{ animationDelay: "-6s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-windhaven-primary/30 bg-windhaven-primary/10 text-windhaven-primary text-sm font-medium">
            Now with global server locations 🌍
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Fast. Reliable.{" "}
            <span className="bg-gradient-to-r from-windhaven-primary to-windhaven-secondary bg-clip-text text-transparent animate-glow">
              Game Hosting
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience lightning-fast game servers with enterprise-grade
            infrastructure. Built for gamers, by gamers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button size="lg" className="bg-windhaven-primary hover:bg-windhaven-primary/90 text-white min-w-[200px] h-12 text-base">
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-windhaven-primary text-windhaven-primary hover:bg-windhaven-primary/10 min-w-[200px] h-12 text-base"
            >
              View Plans
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: Globe,
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
                icon: Users,
                title: "24/7 Support",
                description:
                  "Our expert team is available around the clock to help you",
              },
              {
                icon: Zap,
                title: "Instant Setup",
                description:
                  "Get your server up and running in less than 55 seconds",
              },
              {
                icon: Cpu,
                title: "High Performance",
                description:
                  "Powered by latest gen processors and NVMe storage",
              },
              {
                icon: Server,
                title: "Full Control",
                description:
                  "Complete access to configure and customize your server",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl border border-windhaven-primary/20 bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30 backdrop-blur-lg hover:border-windhaven-primary/40 transition-all duration-300 hover:translate-y-[-2px] group"
              >
                <div className="rounded-lg bg-windhaven-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-windhaven-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-windhaven-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};