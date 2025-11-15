'use client';

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6 inline-block">
          <div className="px-4 py-2 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
            ✨ Welcome to my portfolio
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Akhilesh Patil</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 leading-relaxed">
          Full Stack Developer crafting modern, scalable web applications with Next.js, React, and beautiful UIs
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 justify-center mb-12">
          <a
            href="https://github.com/AkhileshP19"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-full hover:bg-secondary/80 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/akhileshp19"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-secondary rounded-full hover:bg-secondary/80 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:akhileshpatil69@gmail.com"
            className="p-3 bg-secondary rounded-full hover:bg-secondary/80 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ArrowDown size={24} className="mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}
