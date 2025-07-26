'use client'
import { useState, useEffect } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="about" className="relative py-20 lg:py-32 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            
            {/* Section Label */}
            <div className={`text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-6 transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              About • Mission • Vision
            </div>

            {/* Main Heading */}
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-8 leading-[0.9] tracking-tight transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
              <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                FOCUS
              </span>
              <span className="block text-white/95 mt-2 text-3xl sm:text-4xl lg:text-5xl font-light">
                ON YOUR GOALS
              </span>
            </h2>

            {/* Description */}
            <div className={`space-y-6 mb-10 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Our mission at <span className="text-white font-semibold">FAT TO FIT GYM</span> is to empower 
                individuals to achieve their fitness goals through personalized training programs and a supportive 
                community.
              </p>
              
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                We believe in promoting a healthy lifestyle, providing the tools and resources needed 
                for sustainable transformations. Our dedication to inclusivity ensures that everyone feels welcome, 
                regardless of their current fitness level, as they embark on their journey towards a fitter lifestyle.
              </p>
            </div>

            {/* Stats */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-400 mb-1">1000+</div>
                <div className="text-xs sm:text-sm text-gray-400">Happy Members</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-400 mb-1">5+</div>
                <div className="text-xs sm:text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-400 mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400">Access Available</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-400 mb-1">10+</div>
                <div className="text-xs sm:text-sm text-gray-400">Expert Trainers</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-400 mb-1">📶</div>
                <div className="text-xs sm:text-sm text-gray-400">Free Wi-Fi Zone</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-400 mb-1">🔒</div>
                <div className="text-xs sm:text-sm text-gray-400">Secure Lockers</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-400 mb-1">🚿</div>
                <div className="text-xs sm:text-sm text-gray-400">Shower Facilities</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-xl sm:text-2xl font-bold text-red-400 mb-1">🚗</div>
                <div className="text-xs sm:text-sm text-gray-400">Easy to Reach</div>
              </div>
            </div>

          </div>

          {/* Image Side */}
          <div className={`relative transition-all duration-1000 ease-out transform delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="/about_image.webp" 
                  alt="Modern gym equipment at Fat to Fit Gym"
                  className="w-full h-[400px] sm:h-[450px] lg:h-[500px] xl:h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-red-500/20 group-hover:from-black/30 transition-all duration-500"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-red-500/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Premium Equipment
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-8 -right-8 w-full h-full bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl blur-xl"></div>
              <div className="absolute -z-20 -top-4 -left-4 w-24 h-24 bg-red-500/30 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Stats or Features (Optional) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-6 sm:mt-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-3 sm:p-4 text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-400 mb-1">Premium</div>
                <div className="text-xs sm:text-sm text-gray-400">Equipment</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-3 sm:p-4 text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold text-red-400 mb-1">Modern</div>
                <div className="text-xs sm:text-sm text-gray-400">Facilities</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </section>
  );
}