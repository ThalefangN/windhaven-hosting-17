export const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-windhaven-primary to-windhaven-secondary bg-clip-text text-transparent">
          About WindHaven
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          WindHaven is your premier destination for high-performance game hosting. Built by gamers, for gamers, we understand
          the importance of reliability, speed, and exceptional support in creating the perfect gaming experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-6 rounded-xl border border-windhaven-primary/20 bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To provide gamers with the most reliable, high-performance hosting solution that enhances their gaming experience.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-windhaven-primary/20 bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To become the world's most trusted game hosting platform, setting new standards in performance and reliability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};