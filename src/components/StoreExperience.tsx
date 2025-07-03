import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const StoreExperience = () => {
  return (
    <section className="py-20 bg-lotus-cream kolam-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-temple-maroon mb-4">
              Drop In and Say Hi—Namaskaram! 🙏
            </h2>
            <p className="text-xl text-kolam-bronze max-w-3xl mx-auto leading-relaxed">
              Experience the warmth of authentic South-Indian hospitality. Our store is more than a shopping destination—it's where tradition meets family, and every visit feels like coming home.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Store Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-temple">
                <h3 className="font-playfair text-2xl font-bold text-temple-maroon mb-6 flex items-center gap-3">
                  <span className="text-3xl">🏛️</span>
                  Visit Our Store
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-festive rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-temple-maroon mb-1">Address</h4>
                      <p className="text-kolam-bronze">
                        G.L.R Shopping Mall<br />
                        Main Rd, Nidadavole<br />
                        Andhra Pradesh 534301, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-festive rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-temple-maroon mb-1">Store Hours</h4>
                      <p className="text-kolam-bronze">
                        Monday - Saturday: 10:00 AM - 9:00 PM<br />
                        Sunday: 11:00 AM - 8:00 PM<br />
                        <span className="text-rangoli-coral font-medium">Extended hours during festivals</span>
                      </p>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pattu-gold rounded-full flex items-center justify-center">
                        <Phone className="w-4 h-4 text-temple-maroon" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-temple-maroon">Phone</p>
                        <p className="text-kolam-bronze">+91 9876543210</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pattu-gold rounded-full flex items-center justify-center">
                        <Mail className="w-4 h-4 text-temple-maroon" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-temple-maroon">Email</p>
                        <p className="text-kolam-bronze">hello@glrmall.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <Button 
                    variant="festival" 
                    size="lg" 
                    className="w-full text-lg py-4 h-auto"
                    onClick={() => window.open('https://maps.app.goo.gl/DgEygyK5Eap4axRw6', '_blank')}
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>

            {/* Interactive Map Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-temple-maroon to-pattu-gold rounded-2xl overflow-hidden shadow-gold relative">
                <div className="absolute inset-0 kolam-pattern opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 mx-auto">
                      <MapPin className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                    <p className="text-lotus-cream mb-6">Find us easily in Nidadavole, Andhra Pradesh</p>
                    <Button 
                      variant="gold" 
                      size="lg"
                      onClick={() => window.open('https://maps.app.goo.gl/DgEygyK5Eap4axRw6', '_blank')}
                    >
                      View Full Map
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Decorative Map Pins */}
              <div className="absolute top-4 right-4 w-6 h-6 bg-rangoli-coral rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 left-6 w-4 h-4 bg-pattu-gold rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreExperience;