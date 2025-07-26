'use client'
import { useState, useEffect } from 'react';
import { User, Zap, Heart, Dumbbell } from 'lucide-react';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Personal Training",
      description: "Get personalized one-on-one coaching tailored to your specific goals. Our certified trainers create custom workout plans and provide expert guidance to maximize your results and keep you motivated.",
      image: "/Personal_Training.jpg",
      icon: User,
      features: ["1-on-1 Coaching", "Custom Plans", "Expert Guidance"]
    },
    {
      id: 2,
      title: "Kickboxing",
      description: "Unleash your inner warrior with high-energy kickboxing sessions. Build strength, improve coordination, and burn calories while learning self-defense techniques in a fun, supportive environment.",
      image: "/kickboxing.jpg",
      icon: Zap,
      features: ["High Energy", "Self Defense", "Strength Building"]
    },
    {
      id: 3,
      title: "Mobility Class",
      description: "Enhance your flexibility and movement quality with specialized mobility training. Perfect for injury prevention, recovery, and improving your overall athletic performance and daily movement patterns.",
      image: "/Mobility.jpg",
      icon: Heart,
      features: ["Flexibility", "Injury Prevention", "Recovery Focus"]
    },
    {
      id: 4,
      title: "Aerobic Class",
      description: "Join our energetic group aerobic sessions designed to boost cardiovascular health and endurance. Dance, move, and sweat your way to better fitness in a motivating group atmosphere.",
      image: "/Aerobic.jpg",
      icon: Dumbbell,
      features: ["Cardio Health", "Group Energy", "Endurance Building"]
    }
  ];

   return (
    <section id="services" className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #ef4444 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className={`text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-6 transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Transform • Train • Triumph
          </div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tight transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              OUR SERVICES
            </span>
            <span className="block text-white/95 mt-2 text-2xl sm:text-3xl lg:text-4xl font-light">
              ELITE TRAINING PROGRAMS
            </span>
          </h2>

          <p className={`text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Discover our premium fitness programs designed to push your limits and transform your body. 
            Each service is crafted by experts to deliver <span className="text-white font-semibold">maximum results</span> and 
            keep you motivated on your fitness journey.
          </p>
        </div>

        {/* Services Grid - 4 columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className={`group relative transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${800 + index * 150}ms` }}
              >
                
                {/* Service Card - Compact Version */}
                <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden hover:border-red-500/30 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-red-500/20 h-full">
                  
                  {/* Image Section - Smaller */}
                  <div className="relative h-48 sm:h-52 overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                    
                    {/* Icon Badge - Smaller */}
                    <div className="absolute top-4 right-4 bg-red-500/90 backdrop-blur-sm p-2 rounded-full group-hover:bg-red-400 transition-all duration-300">
                      <IconComponent className="w-4 h-4 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Title Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content Section - More Compact */}
                  <div className="p-4 sm:p-5">
                    
                    {/* Description - Shorter */}
                    <p className="text-gray-300 leading-relaxed mb-4 text-sm line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features - Compact */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <span 
                          key={idx}
                          className="bg-red-500/10 border border-red-500/20 text-red-400 px-2 py-1 rounded-full text-xs font-medium hover:bg-red-500/20 transition-colors duration-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Action Area - Simplified */}
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                        Premium
                      </div>
                      
                      <div className="w-8 h-8 bg-gradient-to-r from-red-500/20 to-red-600/20 rounded-full flex items-center justify-center group-hover:from-red-500/30 group-hover:to-red-600/30 transition-all duration-300 cursor-pointer">
                        <div className="w-3 h-3 bg-red-500 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
                </div>

                {/* Background Decoration - Smaller */}
                <div className="absolute -z-10 top-2 -right-2 w-full h-full bg-gradient-to-br from-red-500/10 to-transparent rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            )}
          )}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-full px-8 py-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full border-2 border-black"></div>
              <div className="w-8 h-8 bg-red-400 rounded-full border-2 border-black"></div>
              <div className="w-8 h-8 bg-red-600 rounded-full border-2 border-black"></div>
            </div>
            <span className="text-white font-medium">Join 500+ Members Already Training</span>
          </div>
        </div>

      </div>
    </section>
  );
}