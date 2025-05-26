export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen font-sans">
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Land Your First IT Job—With a Resume Built for Your Certs
        </h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          AI-powered resume builder tailored for A+, Network+, and Security+ certified job seekers.
          Get hired faster with keyword-optimized bullet points and instant formatting.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition">
          Build My Resume
        </button>
      </section>
    </main>
  );
}