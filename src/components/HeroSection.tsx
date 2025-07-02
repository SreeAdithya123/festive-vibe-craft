import { Button } from "@/components/ui/button";
import { Star, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-couple.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center kolam-pattern overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful South Indian couple in traditional Kanchipuram silk saree and dhoti"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-temple-maroon/40 via-transparent to-pattu-gold/20"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl">
          {/* Festival Tag */}
          <div className="inline-flex items-center gap-2 bg-rangoli-coral text-white px-6 py-2 rounded-full mb-6 animate-float">
            <span className="text-lg">🏛️</span>
            <span className="font-semibold">Festival Ready!</span>
          </div>
          
          {/* Trust Badge */}
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-temple">
              <div className="flex text-pattu-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-temple-maroon font-semibold">4.8★ Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-temple">
              <span className="text-temple-maroon font-semibold">1M+ Happy Customers</span>
            </div>
          </div>
          
          {/* Main Headline */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Celebrate Every Moment at{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              G.L.R Shopping Mall
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-lotus-cream mb-10 max-w-2xl leading-relaxed">
            Where South-Indian tradition meets modern style—fashion, furnishings & fun.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="festival" 
              size="lg"
              className="text-lg px-8 py-4 h-auto namaskaram-hover"
              onClick={() => window.open('https://maps.app.goo.gl/DgEygyK5Eap4axRw6', '_blank')}
            >
              Shop Now
            </Button>
            <Button 
              variant="outline-gold" 
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-white/10 backdrop-blur-sm namaskaram-hover"
              onClick={() => window.open('https://maps.app.goo.gl/DgEygyK5Eap4axRw6', '_blank')}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Visit Store
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;