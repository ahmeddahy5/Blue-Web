import React from 'react';
import { useChatBot } from '../contexts/ChatBotContext';

const Hero = () => {
  const { openChat } = useChatBot();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 pb-32">
      {/* Dynamic breathing background effect like the provided image */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0052D4]/15 via-black/50 to-[#6FB1FC]/15 animate-breathe"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(67,100,247,0.3)_0%,rgba(0,82,212,0.1)_40%,transparent_70%)] animate-breathe-slow"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(111,177,252,0.2)_0%,transparent_50%)] animate-breathe-reverse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_80%,rgba(0,82,212,0.15)_0%,transparent_60%)]"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-on-scroll opacity-0 translate-y-8 blur-sm">
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
            <span className="text-xs font-light text-blue-400 tracking-wide">2025</span>
            <span className="mx-2 text-gray-500">•</span>
            <span className="text-xs font-light text-gray-300 tracking-wide">Next-Gen Ai Integrations</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-white">AI-Driven Success</span>
            <span className="block dynamic-gradient-text">
              Redefining the Future.
            </span>
          </h1>

          <p className="text-lg md:text-xl font-light text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
            Creating latest solutions that redefine innovation.
            <br />
            Stay ahead with AI-powered technology for the future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => openChat()} className="glass-button px-8 py-4 bg-gradient-to-r from-[#0052D4]/20 via-[#4364F7]/20 to-[#6FB1FC]/20 border border-[#4364F7]/30 rounded-lg backdrop-blur-sm font-light tracking-wide hover:from-[#0052D4]/30 hover:via-[#4364F7]/30 hover:to-[#6FB1FC]/30 transition-all duration-300">
              Connect With Us
            </button>
            <button className="glass-button px-8 py-4 bg-white/10 border border-white/20 rounded-lg backdrop-blur-sm font-light tracking-wide hover:bg-white/20 transition-all duration-300">
              What is NileByte?
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
