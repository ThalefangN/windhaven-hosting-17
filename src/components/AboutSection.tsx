export const AboutSection = () => {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-windhaven-primary to-windhaven-secondary bg-clip-text text-transparent">
          About Botsedu Learn
        </h2>
        <p className="text-xl text-gray-400 mb-8">
          Botsedu Learn is Botswana's premier digital learning platform, designed to make quality education accessible to all citizens. We bridge the gap between traditional classroom learning and modern digital education, ensuring every Motswana has the opportunity to excel.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-6 rounded-xl border border-windhaven-primary/20 bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To democratize education in Botswana by providing accessible, high-quality digital learning resources that align with national curriculum standards and promote lifelong learning.
            </p>
          </div>
          <div className="p-6 rounded-xl border border-windhaven-primary/20 bg-gradient-to-b from-windhaven-dark/50 to-windhaven-dark/30">
            <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To become Botswana's leading educational technology platform, empowering students and professionals with the knowledge and skills needed for success in the digital age.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};