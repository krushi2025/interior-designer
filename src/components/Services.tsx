
import React from 'react';
import { 
  Home, 
  Building2, 
  ShoppingBag, 
  Pencil, 
  ScanLine, 
  Flower
} from 'lucide-react';

const services = [
  {
    title: "Residential Design",
    description: "Complete interior design solutions for luxury homes, apartments, and private residences tailored to your lifestyle.",
    icon: Home
  },
  {
    title: "Commercial Spaces",
    description: "Creating distinctive environments for offices, retail spaces, and hospitality venues that enhance brand identity.",
    icon: Building2
  },
  {
    title: "Custom Furniture",
    description: "Bespoke furniture pieces designed and crafted to complement your space with unmatched quality and style.",
    icon: ShoppingBag
  },
  {
    title: "Concept Development",
    description: "Comprehensive design concepts that translate your vision into cohesive, sophisticated interior narratives.",
    icon: Pencil
  },
  {
    title: "Space Planning",
    description: "Strategic layout optimization that balances functionality and aesthetic appeal for any interior environment.",
    icon: ScanLine
  },
  {
    title: "Styling & Decoration",
    description: "Curated selection of art, accessories, and finishing touches that bring personality and warmth to your space.",
    icon: Flower
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-luxury-charcoal text-white">
      <div className="luxury-container">
        <h2 className="section-title text-center text-white">Our Services</h2>
        <p className="section-subtitle text-center text-luxury-gold">WHAT WE OFFER</p>
        <div className="gold-divider"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-luxury-charcoal/60 p-8 border border-luxury-gold/20 hover:border-luxury-gold/40 transition-colors group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/20 transition-colors">
                <service.icon className="text-luxury-gold" size={24} />
              </div>
              
              <h3 className="font-serif text-xl text-white mb-4">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-luxury-gold/10 border border-luxury-gold/20 p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">Our Design Process</h3>
              <p className="text-white/70 mb-6">
                We follow a collaborative and transparent approach that ensures your vision is realized with precision and excellence.
              </p>
              
              <ul className="space-y-4">
                {["Consultation", "Concept Development", "Design Refinement", "Implementation", "Styling & Reveal"].map((step, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-luxury-gold text-luxury-charcoal flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="text-white font-medium">{step}</h4>
                      <p className="text-white/70 text-sm">
                        {index === 0 && "Understanding your vision, preferences, and requirements."}
                        {index === 1 && "Creating preliminary designs and material selections."}
                        {index === 2 && "Perfecting the design through detailed feedback and adjustments."}
                        {index === 3 && "Bringing the design to life with expert craftsmanship."}
                        {index === 4 && "Adding final touches and revealing your transformed space."}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1632829882891-5047ccc421bc?auto=format&fit=crop&w=1200&q=80" 
                alt="Design process"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-charcoal/80 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
