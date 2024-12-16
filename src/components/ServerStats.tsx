import { Activity, Globe2, Cpu, Users } from "lucide-react";

export const ServerStats = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: Globe2,
            stat: "99.9%",
            label: "Uptime Guarantee",
            description: "Enterprise-grade reliability",
          },
          {
            icon: Activity,
            stat: "<20ms",
            label: "Average Latency",
            description: "Lightning-fast response times",
          },
          {
            icon: Cpu,
            stat: "12TB",
            label: "Network Capacity",
            description: "High-performance infrastructure",
          },
          {
            icon: Users,
            stat: "50K+",
            label: "Active Players",
            description: "Growing gaming community",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="relative group p-6 rounded-xl border border-windhaven-primary/20 bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30 backdrop-blur-lg hover:border-windhaven-primary/40 transition-all duration-300"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-windhaven-primary/10 to-windhaven-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="rounded-lg bg-windhaven-primary/10 w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-windhaven-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-windhaven-primary" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{item.stat}</div>
              <div className="text-lg font-semibold text-white mb-2">{item.label}</div>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};