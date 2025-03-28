
import React, { useState } from 'react';
import { ArrowRight, Plus } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const portfolioItems = [
  {
    id: 1,
    title: "Modern Penthouse",
    category: "Residential",
    location: "Manhattan, NY",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80"
  },
  {
    id: 2,
    title: "Coastal Villa",
    category: "Residential",
    location: "Malibu, CA",
    imageUrl: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 3,
    title: "Executive Office",
    category: "Commercial",
    location: "Chicago, IL",
    imageUrl: "https://images.unsplash.com/photo-1600494603989-9650cf6dad51?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 4,
    title: "Boutique Hotel",
    category: "Hospitality",
    location: "Miami, FL",
    imageUrl: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  },
  {
    id: 5,
    title: "Mountain Retreat",
    category: "Residential",
    location: "Aspen, CO",
    imageUrl: "https://images.unsplash.com/photo-1617104678098-de229db51175?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
  },
  {
    id: 6,
    title: "Urban Loft",
    category: "Residential",
    location: "Seattle, WA",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  }
];

const categories = ["All", "Residential", "Commercial", "Hospitality"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof portfolioItems[0] | null>(null);

  const filteredItems = portfolioItems.filter(item => 
    activeCategory === "All" || item.category === activeCategory
  );

  return (
    <section id="portfolio" className="section-padding bg-luxury-cream">
      <div className="luxury-container">
        <h2 className="section-title text-center">Our Portfolio</h2>
        <p className="section-subtitle text-center">CURATED SPACES</p>
        <div className="gold-divider"></div>
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 text-sm uppercase tracking-wider font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-luxury-gold text-white'
                  : 'bg-white text-luxury-charcoal hover:bg-luxury-taupe/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden cursor-pointer animate-fade-in"
              onClick={() => setSelectedProject(item)}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/80 via-transparent to-transparent flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-serif text-xl">{item.title}</h3>
                <p className="text-white/80 text-sm mt-1">{item.location}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-luxury-gold text-xs uppercase tracking-wider">{item.category}</span>
                  <span className="w-8 h-8 rounded-full bg-luxury-gold flex items-center justify-center">
                    <Plus size={18} className="text-white" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-luxury-charcoal hover:text-luxury-gold transition-colors uppercase tracking-wider text-sm font-medium"
          >
            View All Projects
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
      
      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl bg-white p-0 overflow-hidden">
          {selectedProject && (
            <div className="grid md:grid-cols-2">
              <div className="h-full">
                <img 
                  src={selectedProject.imageUrl} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col">
                <div className="mb-auto">
                  <h3 className="font-serif text-2xl text-luxury-charcoal">{selectedProject.title}</h3>
                  <p className="text-luxury-gold text-sm uppercase tracking-wider mt-2">{selectedProject.category}</p>
                  <div className="w-16 h-[1px] bg-luxury-gold my-4"></div>
                  
                  <div className="mt-6 space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-luxury-charcoal">Location</h4>
                      <p className="text-luxury-taupe">{selectedProject.location}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-luxury-charcoal">Project Description</h4>
                      <p className="text-luxury-taupe">
                        A bespoke design that harmonizes contemporary aesthetics with timeless elegance. 
                        Every detail in this space was meticulously curated to reflect the client's lifestyle 
                        and create a seamless blend of comfort and sophistication.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 bg-luxury-gold text-white px-6 py-3 uppercase text-sm tracking-wider font-medium hover:bg-luxury-charcoal transition-colors"
                    onClick={() => setSelectedProject(null)}
                  >
                    Inquire About This Style
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;
