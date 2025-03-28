
import React, { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Luxury living room with minimal design"
  },
  {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    alt: "Modern kitchen with marble countertops"
  },
  {
    url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80",
    alt: "Elegant bedroom with custom lighting"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-luxury-softblack/30 z-10" />
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Text Content */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl max-w-4xl animate-fade-in">
          Crafting Exceptional Interior Experiences
        </h1>
        <div className="gold-divider animate-fade-in" style={{ animationDelay: '0.3s' }}></div>
        <p className="mt-6 max-w-2xl text-lg md:text-xl text-white/90 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          Where timeless elegance meets contemporary design
        </p>
        <a 
          href="#portfolio" 
          className="mt-12 inline-flex items-center gap-2 bg-luxury-gold text-luxury-charcoal px-8 py-4 uppercase text-sm tracking-wider font-medium hover:bg-white transition-colors animate-fade-in" 
          style={{ animationDelay: '0.9s' }}
        >
          Explore Our Work
          <ChevronRight size={16} />
        </a>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-luxury-gold' : 'bg-white/50'
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
