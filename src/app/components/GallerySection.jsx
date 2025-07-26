'use client'
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn, X } from 'lucide-react';

export default function GallerySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryImages = [
    {
      id: 1,
      src: "/gallery_1.png",
      alt: "Main gym floor with premium equipment",
      category: "Equipment"
    },
    {
      id: 2,
      src: "/gallery_2.png",
      alt: "Personal training session in progress",
      category: "Training"
    },
    {
      id: 3,
      src: "/gallery_3.png",
      alt: "High-energy kickboxing class",
      category: "Classes"
    },
    {
      id: 4,
      src: "/gallery_4.png",
      alt: "State-of-the-art cardio machines",
      category: "Equipment"
    },
    {
      id: 5,
      src: "/gallery_5.png",
      alt: "Professional weight training zone",
      category: "Equipment"
    },
    {
      id: 6,
      src: "/gallery_6.png",
      alt: "Group workout session with high energy",
      category: "Classes"
    },
    {
      id: 7,
      src: "/gallery_7.png",
      alt: "Dedicated mobility and stretching space",
      category: "Facilities"
    },
    {
      id: 8,
      src: "/gallery_8.png",
      alt: "Fun aerobic dance session",
      category: "Classes"
    },
    {
      id: 9,
      src: "/gallery_9.png",
      alt: "Clean and modern locker facilities",
      category: "Facilities"
    },
    {
      id: 10,
      src: "/gallery_10.png",
      alt: "Functional training equipment area",
      category: "Equipment"
    },
    {
      id: 11,
      src: "/gallery_11.png",
      alt: "Nutrition consultation with expert",
      category: "Services"
    },
    {
      id: 12,
      src: "/gallery_12.jpg",
      alt: "Outdoor training area",
      category: "Facilities"
    },
    {
      id: 13,
      src: "/gallery_13.jpg",
      alt: "Professional boxing training equipment",
      category: "Equipment"
    }
  ];

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const currentScroll = scrollContainerRef.current.scrollLeft;
      const targetScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: targetScroll,
        behavior: 'smooth'
      });
    }
  };

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="gallery" className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `conic-gradient(from 0deg at 50% 50%, #ef4444 0deg, transparent 60deg, transparent 300deg, #ef4444 360deg)`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-6 transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Gallery • Experience • Atmosphere
          </div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tight transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              OUR GYM
            </span>
            <span className="block text-white/95 mt-2 text-2xl sm:text-3xl lg:text-4xl font-light">
              IN ACTION
            </span>
          </h2>

          <p className={`text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Take a virtual tour through our <span className="text-white font-semibold">world-class facilities</span>, 
            see our premium equipment in action, and witness the energy that makes Fat to Fit Gym extraordinary.
          </p>
        </div>

        {/* Gallery Navigation */}
        <div className={`relative mb-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Scroll Controls */}
          <div className="flex justify-center gap-4 mb-6">
            <button 
              onClick={() => scroll('left')}
              className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" strokeWidth={2.5} />
            </button>
            
            <div className="flex items-center gap-4 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
              <span className="text-white font-semibold">Scroll to Explore</span>
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse delay-75"></div>
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
            
            <button 
              onClick={() => scroll('right')}
              className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 hover:text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            >
              <ChevronRight className="w-6 h-6" strokeWidth={2.5} />
            </button>
          </div>

          {/* Gallery Scroll Container */}
          <div className="relative">
            {/* Scrollable Gallery */}
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 lg:gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {galleryImages.map((image, index) => (
                <div 
                  key={image.id}
                  className="flex-shrink-0 group relative cursor-pointer transition-all duration-500 hover:scale-105 w-80 sm:w-96 lg:w-[28rem]"
                  onClick={() => openLightbox(image)}
                >
                  
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-xl shadow-2xl h-80 sm:h-96 lg:h-[28rem]">
                    <img 
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-red-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {image.category}
                    </div>

                    {/* Zoom Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="bg-white/20 backdrop-blur-sm p-4 rounded-full border border-white/30">
                        <ZoomIn className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Image Title */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <p className="text-white font-medium text-sm leading-tight">
                        {image.alt}
                      </p>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-transparent to-red-600/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute -top-12 right-0 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-lg mb-1">{selectedImage.alt}</p>
                    <span className="bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {selectedImage.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}