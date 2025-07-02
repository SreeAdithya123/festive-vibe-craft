import { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Hyderabad, Telangana",
    quote: "The Kanchipuram saree I bought for my daughter's wedding was absolutely divine! The quality and craftsmanship are unmatched.",
    rating: 5,
    avatar: "👩🏽‍💼"
  },
  {
    id: 2,
    name: "Lakshmi Reddy",
    location: "Bangalore, Karnataka",
    quote: "G.L.R has been our family's go-to for all festive shopping for over 15 years. The temple jewelry collection is exquisite!",
    rating: 5,
    avatar: "👩🏽"
  },
  {
    id: 3,
    name: "Meera Iyer",
    location: "Chennai, Tamil Nadu",
    quote: "Outstanding service and authentic traditional wear. The staff understands our cultural needs perfectly. Highly recommended!",
    rating: 5,
    avatar: "👵🏽"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white kolam-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-temple-maroon mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-kolam-bronze max-w-2xl mx-auto">
            Stories of joy, tradition, and celebration from our beloved customers
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-lotus-cream to-white shadow-temple">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-12 text-center">
                  <div className="relative inline-block mb-8">
                    <div className="w-20 h-20 bg-gradient-festive rounded-full flex items-center justify-center text-3xl shadow-gold">
                      {testimonial.avatar}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-pattu-gold rounded-full flex items-center justify-center">
                      <span className="text-temple-maroon text-xs">🪷</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-pattu-gold text-pattu-gold" />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-temple-maroon font-medium mb-8 leading-relaxed max-w-3xl">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div>
                    <h4 className="font-playfair text-xl font-bold text-temple-maroon mb-1">
                      {testimonial.name}
                    </h4>
                    <p className="text-kolam-bronze">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-pattu-gold scale-125' 
                    : 'bg-kolam-bronze/30 hover:bg-kolam-bronze/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;