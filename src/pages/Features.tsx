import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Zap, Globe, Users, Cpu, Server, Wrench, Clock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "DDoS Protection",
      description: "Enterprise-grade protection against attacks, included free with every server.",
    },
    {
      icon: Zap,
      title: "Instant Setup",
      description: "Get your server up and running in less than 55 seconds.",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Multiple locations worldwide for the lowest possible latency.",
    },
    {
      icon: Users,
      title: "24/7 Support",
      description: "Our expert team is available around the clock to help you.",
    },
    {
      icon: Cpu,
      title: "High Performance",
      description: "Powered by latest gen processors and NVMe storage.",
    },
    {
      icon: Server,
      title: "Full Control",
      description: "Complete access to configure and customize your server.",
    },
    {
      icon: Wrench,
      title: "Mod Support",
      description: "Easy installation and management of game mods.",
    },
    {
      icon: Clock,
      title: "Auto Backups",
      description: "Regular automated backups to keep your data safe.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-windhaven-dark via-windhaven-dark/95 to-windhaven-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful Features for
            <span className="block bg-gradient-to-r from-windhaven-primary to-windhaven-secondary bg-clip-text text-transparent">
              Serious Gaming
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Everything you need to run high-performance game servers, backed by
            enterprise-grade infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl border border-windhaven-primary/20 bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30 backdrop-blur-lg hover:border-windhaven-primary/40 transition-all duration-300 group"
            >
              <div className="rounded-lg bg-windhaven-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-windhaven-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-windhaven-primary" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;