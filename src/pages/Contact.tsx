import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Mail, MessageSquare } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-windhaven-dark via-windhaven-dark/95 to-windhaven-dark text-white">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get in
            <span className="block bg-gradient-to-r from-windhaven-primary to-windhaven-secondary bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Have questions? Our team is here to help you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <a
            href="mailto:support@windhaven.com"
            className="p-8 rounded-xl border border-windhaven-primary/20 bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30 hover:border-windhaven-primary/40 transition-all duration-300 group text-center"
          >
            <div className="rounded-lg bg-windhaven-primary/10 w-20 h-20 mx-auto flex items-center justify-center mb-6 group-hover:bg-windhaven-primary/20 transition-colors">
              <Mail className="w-10 h-10 text-windhaven-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Email Support</h3>
            <p className="text-gray-400 mb-4">
              Get in touch with our support team via email
            </p>
            <p className="text-windhaven-primary text-lg">support@windhaven.com</p>
          </a>

          <a
            href="https://discord.gg/windhaven"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-xl border border-windhaven-primary/20 bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30 hover:border-windhaven-primary/40 transition-all duration-300 group text-center"
          >
            <div className="rounded-lg bg-windhaven-primary/10 w-20 h-20 mx-auto flex items-center justify-center mb-6 group-hover:bg-windhaven-primary/20 transition-colors">
              <MessageSquare className="w-10 h-10 text-windhaven-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">Discord Community</h3>
            <p className="text-gray-400 mb-4">
              Join our Discord server for instant support
            </p>
            <p className="text-windhaven-primary text-lg">discord.gg/windhaven</p>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;