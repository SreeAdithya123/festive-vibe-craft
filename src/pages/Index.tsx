import NotificationBar from "@/components/NotificationBar";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import SocialProofStrip from "@/components/SocialProofStrip";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import VideoShowcase from "@/components/VideoShowcase";
import StoreExperience from "@/components/StoreExperience";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NotificationBar />
      <HeroSection />
      <CategoryGrid />
      <SocialProofStrip />
      <TestimonialsCarousel />
      <VideoShowcase />
      <StoreExperience />
      <Footer />
    </div>
  );
};

export default Index;
