
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll be in touch soon.",
    });
    // Reset form - would add actual form handling in a real app
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="section-padding bg-luxury-cream">
      <div className="luxury-container">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle text-center">START YOUR DESIGN JOURNEY</p>
        <div className="gold-divider"></div>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="bg-white p-8 shadow-sm animate-fade-in">
            <h3 className="font-serif text-2xl text-luxury-charcoal mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-luxury-gold" size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-luxury-charcoal">Visit Our Studio</h4>
                  <p className="text-luxury-taupe mt-1">123 Fifth Avenue, New York, NY 10010</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-luxury-gold" size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-luxury-charcoal">Email Us</h4>
                  <p className="text-luxury-taupe mt-1">info@eliteinterior.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-luxury-gold/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-luxury-gold" size={18} />
                </div>
                <div>
                  <h4 className="font-medium text-luxury-charcoal">Call Us</h4>
                  <p className="text-luxury-taupe mt-1">+1 (212) 555-1234</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h3 className="font-serif text-2xl text-luxury-charcoal mb-6">Studio Hours</h3>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-luxury-charcoal font-medium">Monday - Friday</span>
                  <span className="text-luxury-taupe">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-luxury-charcoal font-medium">Saturday</span>
                  <span className="text-luxury-taupe">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-luxury-charcoal font-medium">Sunday</span>
                  <span className="text-luxury-taupe">By Appointment Only</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-luxury-charcoal">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    required
                    className="border-luxury-taupe/30 focus:border-luxury-gold"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-luxury-charcoal">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    className="border-luxury-taupe/30 focus:border-luxury-gold"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-luxury-charcoal">
                  Phone
                </label>
                <Input
                  id="phone"
                  placeholder="Your Phone Number"
                  className="border-luxury-taupe/30 focus:border-luxury-gold"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-luxury-charcoal">
                  Project Type
                </label>
                <select 
                  id="subject" 
                  className="w-full rounded-md border border-luxury-taupe/30 p-3 focus:border-luxury-gold outline-none bg-white"
                >
                  <option value="">Select Project Type</option>
                  <option value="Residential">Residential Design</option>
                  <option value="Commercial">Commercial Design</option>
                  <option value="Consultation">Design Consultation</option>
                  <option value="Other">Other Services</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-luxury-charcoal">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project"
                  rows={5}
                  required
                  className="border-luxury-taupe/30 focus:border-luxury-gold"
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-luxury-gold hover:bg-luxury-charcoal text-white font-medium w-full flex items-center justify-center gap-2 h-12"
              >
                Send Message
                <Send size={16} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
