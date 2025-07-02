import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoShowcase = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    "Premium temple-border silks & fabrics",
    "Expert 'Atithi Devo Bhava' styling assistance", 
    "Traditional craftsmanship meets modern cuts"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-temple-maroon to-rangoli-coral">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
              See Celebrations Come to Life
            </h2>
            <p className="text-xl text-lotus-cream max-w-2xl mx-auto">
              Experience the warmth of our heritage and the joy of our traditions
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Video Player */}
            <div className="relative">
              <div className="relative aspect-video bg-temple-maroon/20 rounded-2xl overflow-hidden shadow-gold">
                {!isVideoPlaying ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-temple-maroon/80 to-rangoli-coral/60 flex items-center justify-center cursor-pointer kolam-pattern"
                       onClick={() => setIsVideoPlaying(true)}>
                    <div className="text-center">
                      <div className="w-20 h-20 bg-pattu-gold rounded-full flex items-center justify-center mb-4 mx-auto diya-glow hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-temple-maroon ml-1" />
                      </div>
                      <p className="text-white font-semibold text-lg">Watch Our Story</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-temple-maroon/90 flex items-center justify-center">
                    <p className="text-pattu-gold text-lg">Video Player Would Load Here</p>
                  </div>
                )}
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pattu-gold rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-rangoli-coral rounded-full opacity-40 animate-float"></div>
            </div>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl namaskaram-hover"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-8 h-8 bg-pattu-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-temple-maroon text-lg">✨</span>
                  </div>
                  <div>
                    <p className="text-white text-lg font-medium leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
              
              <div className="pt-6">
                <Button 
                  variant="gold" 
                  size="lg"
                  className="text-lg px-8 py-4 h-auto w-full sm:w-auto"
                  onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                >
                  {isVideoPlaying ? 'Close Video' : 'Watch Our Story'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;