import { Mail, MessageSquare } from "lucide-react";

export const ContactSection = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-windhaven-primary to-windhaven-secondary bg-clip-text text-transparent">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="mailto:support@windhaven.com"
            className="p-8 rounded-xl border border-windhaven-primary/20 bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30 hover:border-windhaven-primary/40 transition-all duration-300 group"
          >
            <div className="rounded-lg bg-windhaven-primary/10 w-16 h-16 mx-auto flex items-center justify-center mb-6 group-hover:bg-windhaven-primary/20 transition-colors">
              <Mail className="w-8 h-8 text-windhaven-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Email Support</h3>
            <p className="text-gray-400">support@windhaven.com</p>
          </a>
          <a
            href="https://discord.gg/windhaven"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-xl border border-windhaven-primary/20 bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30 hover:border-windhaven-primary/40 transition-all duration-300 group"
          >
            <div className="rounded-lg bg-windhaven-primary/10 w-16 h-16 mx-auto flex items-center justify-center mb-6 group-hover:bg-windhaven-primary/20 transition-colors">
              <MessageSquare className="w-8 h-8 text-windhaven-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Discord Community</h3>
            <p className="text-gray-400">Join our Discord server</p>
          </a>
        </div>
      </div>
    </div>
  );
};