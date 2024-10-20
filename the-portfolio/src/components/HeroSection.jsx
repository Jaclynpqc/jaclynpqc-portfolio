/* eslint-disable no-unused-vars */
import React from 'react';
import {Circle} from 'lucide-react';

export default function HeroSection() {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Decorative elements */}
          <div className="absolute -top-16 right-[15%] w-32 h-32 bg-[url('/api/placeholder/320/320')] rounded-sm rotate-3 opacity-80" />
          
          {/* Main text */}
          <p className="text-3xl md:text-4xl lg:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed relative">
            <span className="font-['Inter'] font-light">Jaclyn is an</span>{' '}
            <span className="font-['Ballet'] text-5xl md:text-5xl lg:text-7xl">interactive</span>{' '}
            <span className="font-['Inter'] font-light">designer from</span>{' '}
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl">Vietnam,</span>
            <br />
            <span className="font-['Inter'] font-light">based in</span>{' '}
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl">United States</span>{' '}
            <span className="font-['Inter'] font-light">with a</span>{' '}
            <br />
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl">strong love</span>{' '}
            <span className="font-['Inter'] font-light">for travelling. Her works lie in the</span>
            <br />
            <span className="font-['Inter'] font-light">intersection of</span>{' '}
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl">design,</span>{' '}
            <span className="font-['Inter'] font-light">technology, and</span>{' '}
            <br />
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl">marketing.</span>{' '}
            <span className="font-['Inter'] font-light">She believes that a</span>{' '}
            <br />
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl">touch</span>{' '}
            <span className="font-['Inter'] font-light">can go a long way in telling</span>
            <br />
            <span className="font-['Ballet'] text-4xl md:text-5xl lg:text-6xl tracking-wider">unspoken stories.</span>
          </p>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-20 left-[10%] w-32 h-32 bg-[url('/api/placeholder/320/320')] rounded-sm -rotate-6 opacity-80" />
        </div>
      </div>
    );
  }