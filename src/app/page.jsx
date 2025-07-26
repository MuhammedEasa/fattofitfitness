import AboutSection from "./components/About";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import LocationSection from "./components/LocationSection";
import Navbar from "./components/Navbar";
import ReviewsSection from "./components/ReviewSection";
import ServicesSection from "./components/Services";

export default function Home() {
  return (
    <>
      <main className="bg-black">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection/>
        <ReviewsSection/>
        <GallerySection/>
        <LocationSection/>
      </main>
    </>
  );
}
