
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Jonathan & Sarah Thompson",
    location: "Manhattan Penthouse",
    quote: "Working with Elite Interior was truly transformative. Their ability to understand our lifestyle and translate it into a sophisticated design exceeded our expectations. Every detail was considered, resulting in a space that feels both luxurious and deeply personal.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 2,
    name: "Alexandra Chen",
    location: "Malibu Beach House",
    quote: "Elite Interior brought an unparalleled level of creativity and precision to our beach house project. Their team seamlessly blended coastal elements with modern luxury, creating a retreat that balances sophistication with relaxed comfort. Truly exceptional work.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    name: "Marcus Williams",
    location: "Chicago Executive Office",
    quote: "The transformation of our corporate headquarters by Elite Interior has redefined our company culture. The thoughtful integration of our brand identity into a functional, inspiring workspace demonstrates their understanding of how environment impacts business success.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="luxury-container">
        <h2 className="section-title text-center">Client Testimonials</h2>
        <p className="section-subtitle text-center">WHAT OUR CLIENTS SAY</p>
        <div className="gold-divider"></div>
        
        <div className="mt-12 relative">
          <div className="overflow-hidden rounded-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-luxury-cream p-8 md:p-12 flex flex-col justify-between h-full">
                      <div>
                        <Quote className="text-luxury-gold mb-6" size={40} />
                        <p className="text-luxury-charcoal/80 italic mb-8 leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl text-luxury-charcoal">{testimonial.name}</h3>
                        <p className="text-luxury-taupe">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="h-full min-h-[300px] md:min-h-[400px]">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 border border-luxury-taupe/30 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-luxury-gold' : 'bg-luxury-taupe/30'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 border border-luxury-taupe/30 flex items-center justify-center hover:border-luxury-gold hover:text-luxury-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
