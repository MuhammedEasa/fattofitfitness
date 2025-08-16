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
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Desktop Video Background  */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-125 contrast-110 saturate-110"
        >
          <source src="/hero_section_video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-black/25 rounded-full blur-3xl"></div>
      </div>

      {/* Mobile Layout - Video and Content Separated */}
      <div className="sm:hidden flex flex-col min-h-screen">
        {/* Mobile Video Section - Top Half */}
        <div className="relative h-1/2 w-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-contain bg-black brightness-125 contrast-110 saturate-110"
          >
            <source src="/hero_section_video.mp4" type="video/mp4" />
          </video>
          {/* Light overlay for mobile video */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Mobile Content Section - Bottom Half */}
        <div className="relative flex-1 bg-gradient-to-b from-black via-gray-900 to-black flex flex-col justify-center px-4 py-8">
          <div
            className={`transition-all duration-1000 ease-out transform text-center ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            {/* Mobile Header */}
            <div
              className={`text-xs uppercase tracking-[0.2em] text-red-400 font-semibold mb-4 transition-all duration-1200 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              Transform • Elevate • Dominate
            </div>

            {/* Mobile Typography */}
            <h1
              className={`text-4xl font-black text-white mb-6 leading-[0.9] tracking-tight transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
            >
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                FAT TO FIT
              </span>
              <span className="block text-white/95 mt-1 text-2xl">
                POWERED BY
              </span>
              <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                PURE DISCIPLINE
              </span>
            </h1>

            {/* Mobile Subtitle */}
            <div
              className={`space-y-2 mb-8 transition-all duration-1000 delay-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-base text-gray-100 font-light leading-relaxed">
                Stop dreaming about a better body.
              </p>
              <p className="text-base font-medium text-white">
                Start{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent font-bold">
                  building it today
                </span>
                .
              </p>
            </div>

            {/* Mobile CTA */}
            <div
              className={`flex flex-col gap-3 items-center transition-all duration-1000 delay-900 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 border border-red-400/20 shadow-2xl w-full max-w-xs"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start Transformation
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    strokeWidth={2.5}
                  />
                </span>
              </button>

              <div className="text-xs text-gray-300 uppercase tracking-wide font-medium bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                No commitment required
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Content - unchanged positioning */}
      <div className="relative z-10 w-full max-w-5xl px-6 text-center mx-auto hidden sm:flex items-center justify-center min-h-screen">
        <div
          className={`transition-all duration-1000 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
        >
          <div className="mb-12">
            <div
              className={`text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-6 transition-all duration-1200 delay-300 drop-shadow-lg ${
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

          <div
            className={`space-y-3 mb-16 transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <p 
              className="text-xl md:text-2xl text-gray-100 font-light max-w-3xl mx-auto leading-relaxed"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
            >
              Stop dreaming about a better body.
            </p>
            <p 
              className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-white"
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)' }}
            >
              Start{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent font-bold drop-shadow-lg">
                building it today
              </span>
              .
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-900 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <button
              onClick={scrollToContact}
              className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-lg font-bold text-base uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/25 border border-red-400/20 backdrop-blur-md shadow-2xl"
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

            <div 
              className="text-sm text-gray-200 uppercase tracking-wide font-medium backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full"
              style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.8)' }}
            >
              No commitment required
            </div>
          </div>
        </div>
      </div>

      {/* Desktop vignette effect */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20 pointer-events-none hidden sm:block"></div>
    </section>
  );
}