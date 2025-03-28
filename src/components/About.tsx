
import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="luxury-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <h2 className="section-title">About Our Studio</h2>
            <div className="w-16 h-[1px] bg-luxury-gold mb-6"></div>
            
            <p className="text-luxury-charcoal/80 mb-6 leading-relaxed">
              Founded on the principles of exceptional craftsmanship and meticulous attention to detail, Elite Interior 
              transforms spaces into timeless expressions of sophistication and style.
            </p>
            
            <p className="text-luxury-charcoal/80 mb-6 leading-relaxed">
              With over 15 years of experience in luxury interior design, our team brings an unparalleled level of 
              expertise to every project. We believe in creating spaces that not only captivate visually but also 
              function seamlessly for those who inhabit them.
            </p>
            
            <p className="text-luxury-charcoal/80 mb-8 leading-relaxed">
              Each design journey begins with understanding our clients' unique vision and lifestyle, allowing us to 
              craft bespoke interiors that truly reflect their individuality while maintaining the highest standards 
              of design excellence.
            </p>
            
            <div className="flex items-center gap-6">
              <img 
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80" 
                alt="Designer portrait"
                className="w-20 h-20 rounded-full object-cover border-2 border-luxury-gold"
              />
              <div>
                <h3 className="font-serif text-xl text-luxury-charcoal">Victoria Reynolds</h3>
                <p className="text-luxury-taupe text-sm">Principal Designer & Founder</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4 h-max animate-fade-in">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1602872030219-ad2b9a54315c?auto=format&fit=crop&w=800&q=80" 
                alt="Design inspiration"
                className="w-full aspect-square object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" 
                alt="Material selection"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80" 
                alt="Design process"
                className="w-full aspect-[3/4] object-cover mb-4"
              />
              <img 
                src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80" 
                alt="Finished interior"
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
