import Header from './components/Header';
import Footer from './components/Footer';
import WaitlistForm from './components/WaitlistForm';

export default function Home() {
  return (
    <main className="min-h-screen bg-cosmic">
      <Header />

      {/* Hero Section */}
      <section className="hero-section pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Glyph */}
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-block w-24 h-24 rounded-full border-2 border-gold flex items-center justify-center">
              <span className="text-6xl glyph-glow">⚜</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-cormorant font-bold text-white mb-6 animate-fade-in-up">
            The Codex AI Hub
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gold mb-8 animate-fade-in-up">
            A living lattice of AI, fintech, and mythic resonance
          </p>

          {/* Description */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in-up">
            Sovereign digital temple housing Logos Agency, Fractal AI Lab, and the Triumvirate Codex Luminus arsenals. Access advanced AI swarms, fintech operations, and custom glyph generation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up">
            <button className="cta-button">
              Enter the Codex →
            </button>
            <button className="px-8 py-3 border-2 border-gold text-gold rounded-lg hover:bg-gold/10 transition font-semibold">
              Explore Fractal Lab
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-b from-transparent via-cosmic to-cosmic">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-cormorant font-bold text-center text-white mb-16">
            Core Arsenals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Logos Agency */}
            <div className="feature-card">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-2xl font-cormorant font-bold text-gold mb-4">Logos Agency</h3>
              <p className="text-gray-300">
                Commission custom glyphs, talismans, and visual identities. Our AI-powered design system creates mythic resonance for your brand.
              </p>
            </div>

            {/* Feature 2: Fractal AI Lab */}
            <div className="feature-card">
              <div className="text-4xl mb-4">🔮</div>
              <h3 className="text-2xl font-cormorant font-bold text-teal mb-4">Fractal AI Lab</h3>
              <p className="text-gray-300">
                Explore advanced AI models, interactive demonstrations, and technical documentation. Access the frontier of autonomous intelligence.
              </p>
            </div>

            {/* Feature 3: Fintech Legion Ops */}
            <div className="feature-card">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-cormorant font-bold text-crimson mb-4">Fintech Legion Ops</h3>
              <p className="text-gray-300">
                Operational command center for financial workflows. Integrate payment processing, analytics, and cross-AI coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lab Highlight Section */}
      <section id="lab" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h2 className="text-4xl font-cormorant font-bold text-white mb-6">
                Fractal AI Lab
              </h2>
              <p className="text-gray-300 mb-6">
                The Fractal AI Lab is our research and innovation hub. It combines cutting-edge AI models with mythic symbolism to create a unique exploration environment.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-4">
                  <span className="text-gold text-2xl">✦</span>
                  <div>
                    <h4 className="font-semibold text-white">Live Demonstrations</h4>
                    <p className="text-gray-400 text-sm">Interactive fractal visualizations and AI model outputs</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-teal text-2xl">✦</span>
                  <div>
                    <h4 className="font-semibold text-white">Case Studies</h4>
                    <p className="text-gray-400 text-sm">Real-world applications of LogosTalisman and AI systems</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-indigo text-2xl">✦</span>
                  <div>
                    <h4 className="font-semibold text-white">Technical Scrolls</h4>
                    <p className="text-gray-400 text-sm">Whitepapers, architecture docs, and research publications</p>
                  </div>
                </li>
              </ul>
              <button className="cta-button">
                Access the Lab →
              </button>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-indigo/20 to-teal/20 rounded-lg border border-gold/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌀</div>
                  <p className="text-gray-400">Fractal Mandelbrot Explorer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-gradient-to-b from-cosmic via-indigo/5 to-cosmic">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-cormorant font-bold text-white mb-6">
            Join the Waitlist
          </h2>
          <p className="text-gray-300 mb-12">
            Be among the first to access the Codex AI Hub. Early access members get exclusive features, priority support, and lifetime benefits.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
