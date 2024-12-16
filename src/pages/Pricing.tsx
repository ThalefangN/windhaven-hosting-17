import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$9.99",
      description: "Perfect for small gaming communities",
      features: [
        "2GB RAM",
        "10GB NVMe Storage",
        "Basic DDoS Protection",
        "24/7 Support",
        "1 Game Server",
        "Automated Backups",
      ],
    },
    {
      name: "Pro",
      price: "$24.99",
      description: "Ideal for growing communities",
      features: [
        "8GB RAM",
        "25GB NVMe Storage",
        "Advanced DDoS Protection",
        "Priority Support",
        "3 Game Servers",
        "Daily Backups",
        "Custom Domain",
        "Mod Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$49.99",
      description: "For serious gaming organizations",
      features: [
        "16GB RAM",
        "50GB NVMe Storage",
        "Enterprise DDoS Protection",
        "24/7 Premium Support",
        "Unlimited Game Servers",
        "Hourly Backups",
        "Custom Domain",
        "Advanced Monitoring",
        "API Access",
        "Custom Solutions",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-windhaven-dark via-windhaven-dark/95 to-windhaven-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Simple, Transparent
            <span className="block bg-gradient-to-r from-windhaven-primary to-windhaven-secondary bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Choose the perfect plan for your gaming needs. All plans include our
            core features and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-xl border ${
                plan.popular
                  ? "border-windhaven-primary"
                  : "border-windhaven-primary/20"
              } bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30 backdrop-blur-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-windhaven-primary text-white text-sm font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-white mb-2">
                  {plan.price}
                  <span className="text-lg text-gray-400">/month</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 text-windhaven-primary mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-windhaven-primary hover:bg-windhaven-primary/90"
                    : "bg-windhaven-primary/10 hover:bg-windhaven-primary/20"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;