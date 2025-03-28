import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import { Instagram, Facebook, Twitter, ArrowUp } from 'lucide-react';

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-luxury-charcoal text-white py-16">
        <div className="luxury-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="font-serif text-xl text-white mb-6">Elite Interior</h3>
              <p className="text-white/70 leading-relaxed">
                Crafting exceptional interior experiences that transform spaces.
           </p>
              <div className="flex gap-4 mt-6">
                <a href="#" className="text-white/70 hover:text-luxury-gold" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-luxury-gold" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-luxury-gold" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-serif text-white text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Portfolio', 'Services', 'Contact'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-white/70 hover:text-luxury-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-white text-lg mb-6">Services</h3>
              <ul className="space-y-3">
                {['Residential Design', 'Commercial Spaces', 'Custom Furniture', 'Space Planning', 'Styling & Decoration'].map((item) => (
                  <li key={item}>
                    <a 
                      href="#services" 
                      className="text-white/70 hover:text-luxury-gold transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="font-serif text-white text-lg mb-6">Contact Us</h3>
              <address className="not-italic">
                <p className="text-white/70 mb-3">123 Fifth Avenue, New York, NY 10010</p>
                <p className="text-white/70 mb-3">info@eliteinterior.com</p>
                <p className="text-white/70">+1 (212) 555-1234</p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Elite Interior. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center hover:bg-luxury-gold/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} className="text-luxury-gold" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
