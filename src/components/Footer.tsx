import { Github } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-windhaven-primary/10 bg-windhaven-dark/80 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">WindHaven</h3>
            <p className="text-gray-400 text-sm">
              Premium game hosting solutions for every player and community.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="/features" className="text-gray-400 hover:text-white text-sm">Features</a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-400 hover:text-white text-sm">Pricing</a>
              </li>
              <li>
                <a href="/documentation" className="text-gray-400 hover:text-white text-sm">Documentation</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-400 hover:text-white text-sm">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white text-sm">Contact</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Blog</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-windhaven-primary/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} WindHaven. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a
              href="https://github.com/windhaven"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};