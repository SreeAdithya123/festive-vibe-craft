import { Button } from "@/components/ui/button";
import sareesImage from "@/assets/sarees-category.jpg";
import jewelryImage from "@/assets/jewelry-category.jpg";
import homeDecorImage from "@/assets/home-decor-category.jpg";
import weddingCoupleImage from "@/assets/wedding-couple-traditional.jpg";

const categories = [
  {
    id: 1,
    title: "Handwoven Pattu Sarees",
    subtitle: "For holy celebrations",
    image: sareesImage,
    description: "Authentic Kanchipuram and temple border silks"
  },
  {
    id: 2,
    title: "Traditional Jewelry",
    subtitle: "Temple & bridal collections",
    image: jewelryImage,
    description: "Exquisite gold ornaments and temple jewelry"
  },
  {
    id: 3,
    title: "Festive Home Decor",
    subtitle: "Transform your space",
    image: homeDecorImage,
    description: "Brass artifacts, lamps and spiritual decor"
  },
  {
    id: 4,
    title: "Ethnic Kids Wear",
    subtitle: "Age 8-9 traditional styles",
    image: `https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop`,
    description: "Adorable traditional outfits for little ones"
  },
  {
    id: 5,
    title: "Ethnic Men's Wear",
    subtitle: "Kurtas & traditional sets",
    image: `https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=400&h=300&fit=crop`,
    description: "Handsome ethnic wear for modern gentlemen"
  },
  {
    id: 6,
    title: "Women's Casuals",
    subtitle: "Comfortable daily wear",
    image: `https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop`,
    description: "Stylish and comfortable everyday outfits"
  },
  {
    id: 7,
    title: "Wedding Collections",
    subtitle: "Bridal & groom specials",
    image: weddingCoupleImage,
    description: "Complete wedding ensembles for your special day"
  },
  {
    id: 8,
    title: "Fancy Sarees",
    subtitle: "Designer collections",
    image: `https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&h=300&fit=crop`,
    description: "Contemporary designs with traditional elegance"
  },
  {
    id: 9,
    title: "Casual Ladies Wear",
    subtitle: "Modern comfort",
    image: `https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=300&fit=crop`,
    description: "Trendy and comfortable ladies fashion"
  }
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-lotus-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-temple-maroon mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-kolam-bronze max-w-2xl mx-auto">
            Discover authentic South-Indian treasures curated with love and tradition
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="group peacock-ripple cursor-pointer bg-white rounded-2xl overflow-hidden shadow-temple hover:shadow-gold transition-all duration-500 namaskaram-hover"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image}
                  alt={`${category.title} - ${category.description}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-temple-maroon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <Button 
                    variant="gold" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open('https://maps.app.goo.gl/DgEygyK5Eap4axRw6', '_blank')}
                  >
                    Shop {category.title}
                  </Button>
                </div>
              </div>
              
              <div className="p-6 temple-border border-t-4">
                <h3 className="font-playfair text-xl font-bold text-temple-maroon mb-2">
                  {category.title}
                </h3>
                <p className="text-pattu-gold font-semibold text-sm mb-2">
                  {category.subtitle}
                </p>
                <p className="text-kolam-bronze text-sm">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;