import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Shield, Zap, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-windhaven-dark via-windhaven-dark/95 to-windhaven-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About
            <span className="block bg-gradient-to-r from-windhaven-primary to-windhaven-secondary bg-clip-text text-transparent">
              WindHaven
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            We're on a mission to provide the best game hosting experience for
            players and communities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <p className="text-gray-400">
              Founded by passionate gamers, WindHaven was born from the frustration
              of dealing with unreliable game servers. We set out to create a
              hosting solution that we would want to use ourselves.
            </p>
            <p className="text-gray-400">
              Today, we're proud to serve thousands of gaming communities worldwide,
              providing them with the performance and reliability they deserve.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Our Values</h2>
            <div className="space-y-4">
              {[
                {
                  icon: Users,
                  title: "Community First",
                  description:
                    "We put our users first in everything we do.",
                },
                {
                  icon: Shield,
                  title: "Reliability",
                  description:
                    "We're committed to providing stable and secure hosting.",
                },
                {
                  icon: Zap,
                  title: "Performance",
                  description:
                    "We never compromise on speed and efficiency.",
                },
                {
                  icon: Heart,
                  title: "Passion",
                  description:
                    "We're gamers too, and we love what we do.",
                },
              ].map((value) => (
                <div key={value.title} className="flex items-start">
                  <div className="rounded-lg bg-windhaven-primary/10 w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <value.icon className="w-6 h-6 text-windhaven-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {value.title}
                    </h3>
                    <p className="text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Join Our Team</h2>
          <p className="text-gray-400 mb-8">
            We're always looking for talented individuals who share our passion for
            gaming and technology. Check out our open positions or send us your
            resume.
          </p>
          <a
            href="/contact"
            className="inline-block bg-windhaven-primary hover:bg-windhaven-primary/90 text-white px-8 py-3 rounded-lg transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;