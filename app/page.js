import { ArrowRight, CheckCircle2, Zap, Shield, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800 max-w-7xl mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-500 bg-clip-text text-transparent">
          BuildNaro
        </div>
        <div className="flex items-center gap-6">
          <a href="#features" className="text-slate-400 hover:text-white transition">Features</a>
          <a href="#about" className="text-slate-400 hover:text-white transition">About</a>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full font-medium transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-5xl mx-auto text-center py-24 px-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-sm text-blue-400 mb-8">
          <Sparkles className="w-4 h-4" /> Next-Generation Platform
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
          Build faster with <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
            Modern Architecture
          </span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Create high-performance web applications with clean design, maximum efficiency, and seamless user experience.
        </p>
        <div className="flex justify-center gap-4">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition">
            Start Building <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border border-slate-700 hover:bg-slate-900 text-slate-300 px-8 py-4 rounded-xl font-semibold transition">
            View Documentation
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="max-w-7xl mx-auto py-20 px-6 border-t border-slate-900">
        <h2 className="text-3xl font-bold text-center mb-16">Why Choose BuildNaro?</h2>
        <div className="grid md:grid-grid-cols-3 gap-8">
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition">
            <Zap className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Blazing Fast</h3>
            <p className="text-slate-400">Optimized performance out of the box ensuring instant page loads.</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition">
            <Shield className="w-10 h-10 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Secure & Reliable</h3>
            <p className="text-slate-400">Enterprise-grade security standards to keep your data protected.</p>
          </div>
          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-slate-700 transition">
            <CheckCircle2 className="w-10 h-10 text-pink-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Easy Integration</h3>
            <p className="text-slate-400">Seamlessly connect with your existing tools and modern tech stack.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-slate-500 text-sm">
        © 2026 BuildNaro. All rights reserved.
      </footer>
    </div>
  );
}
