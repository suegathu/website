import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Palette, Zap } from 'lucide-react';

const Hero = ({ scrollToSection }) => {
    return (
      <section id="hero" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 relative">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                <span className="text-4xl font-bold">SG</span>
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            Susan Gathu
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Full-Stack Developer & UI/UX Designer
          </p>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
            I craft beautiful, functional digital experiences that solve real-world problems. 
            Passionate about clean code, intuitive design, and cutting-edge technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-blue-500 rounded-full font-semibold hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-slate-400" />
        </div>
      </section>
    );
  };
  export default Hero