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
{/* Features Section */}
<section className="max-w-4xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 text-center">
  <div>
    <h3 className="font-bold text-lg mb-2">Built for Entry-Level IT Pros</h3>
    <p>Uses language employers look for based on CompTIA certs.</p>
  </div>
  <div>
    <h3 className="font-bold text-lg mb-2">One-Click Bullet Points</h3>
    <p>AI auto-generates content that passes ATS filters.</p>
  </div>
  <div>
    <h3 className="font-bold text-lg mb-2">PDF Export Ready</h3>
    <p>Download your resume instantly—no design needed.</p>
  </div>
</section>

{/* How It Works Section */}
<section className="max-w-4xl mx-auto px-4 py-12 text-center">
  <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
  <ul className="space-y-4">
    <li>Choose Your Certs & Goal Job Title</li>
    <li>Let AI Generate Your Summary & Experience</li>
    <li>Download a Ready-to-Use Resume</li>
  </ul>
</section>

{/* CTA Section */}
<section className="bg-gray-100 py-12 text-center">
  <h3 className="text-xl font-semibold mb-4">
    Be the First to Try the Cert-Focused Resume Builder
  </h3>
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition">
    Get Started
  </button>
</section>
