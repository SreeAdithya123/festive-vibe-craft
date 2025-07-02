import { Button } from "@/components/ui/button";

const Footer = () => {
  const quickLinks = [
    "About Us", "Shop Categories", "Store Locations", "Size Guide"
  ];
  
  const customerCare = [
    "Contact Support", "Return Policy", "Shipping Info", "FAQ"
  ];

  return (
    <footer className="bg-temple-maroon text-white kolam-pattern">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-3xl font-bold text-pattu-gold mb-4">
              G.L.R Shopping Mall
            </h3>
            <p className="text-lg text-lotus-cream mb-6 italic">
              "Celebrating tradition, embracing style"
            </p>
            <p className="text-lotus-cream/80 leading-relaxed mb-6">
              For over 25 years, we've been the trusted destination for authentic South-Indian fashion, jewelry, and home decor. Every piece tells a story of heritage, craftsmanship, and celebration.
            </p>
            <div className="flex gap-4">
              <Button variant="gold" size="sm">
                <span className="text-lg mr-2">🔔</span>
                Subscribe
              </Button>
              <Button variant="outline-gold" size="sm">
                Share Story
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-pattu-gold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-lotus-cream/80 hover:text-pattu-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-xs">🪷</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-playfair text-xl font-bold text-pattu-gold mb-6">
              Customer Care
            </h4>
            <ul className="space-y-3">
              {customerCare.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-lotus-cream/80 hover:text-pattu-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-xs">🪷</span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="border-t border-pattu-gold/20 pt-8 mb-8">
          <div className="flex justify-center gap-6">
            {['Facebook', 'Instagram', 'Youtube'].map((social, index) => (
              <a 
                key={index}
                href="#" 
                className="w-12 h-12 bg-pattu-gold/10 hover:bg-pattu-gold hover:text-temple-maroon rounded-full flex items-center justify-center transition-all duration-300 group"
              >
                <span className="text-lg group-hover:scale-110 transition-transform">
                  {social === 'Facebook' && '📘'}
                  {social === 'Instagram' && '📷'}
                  {social === 'Youtube' && '📺'}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Legal Links */}
        <div className="text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm">
            <a href="#" className="text-lotus-cream/60 hover:text-pattu-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-lotus-cream/60 hover:text-pattu-gold transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-lotus-cream/60 hover:text-pattu-gold transition-colors">
              Refund Policy
            </a>
            <a href="#" className="text-lotus-cream/60 hover:text-pattu-gold transition-colors">
              Sitemap
            </a>
          </div>
          <p className="text-lotus-cream/60 text-sm">
            © 2024 G.L.R Shopping Mall. All rights reserved. | Made with ❤️ for tradition.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;