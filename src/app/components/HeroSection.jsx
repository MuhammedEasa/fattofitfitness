"use client";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    document.getElementById("location")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-110 contrast-125"
        >
          <source src="/hero_section_video.mp4" type="video/mp4" />
        </video>

        {/* Strong dark overlay for bright morning video */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          {/* Clean Typography with smooth animations */}
          <div className="mb-12">
            <div
              className={`text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-6 transition-all duration-1200 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Transform • Elevate • Dominate
            </div>

            <h1
              className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.85] tracking-tight transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent animate-pulse">
                FAT TO FIT
              </span>
              <span className="block text-white/95 mt-2">POWERED BY</span>
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                PURE DISCIPLINE
              </span>
            </h1>
          </div>

          {/* Clean Subtitle with stagger animation */}
          <div
            className={`space-y-3 mb-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto leading-relaxed">
              Stop dreaming about a better body.
            </p>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-white">
              Start{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent font-bold">
                building it today
              </span>
              .
            </p>
          </div>

          {/* Improved CTA Button */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-6 py-2.5 rounded-lg font-bold text-base uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 border border-red-400/20 backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Transformation
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  strokeWidth={2.5}
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur"></div>
            </button>

            <div className="text-sm text-gray-400 uppercase tracking-wide font-medium">
              No commitment required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}