'use client'
import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function LocationSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const contactInfo = {
    phone: "+971 56 556 5003",
    email: "fattofitfitnessgym@gmail.com",
    address: "Sama Building 1st Floor, Al Barsha 1, Dubai - United Arab Emirates"
  };

  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/971565565003",
      icon: MessageCircle,
      color: "text-green-400 border-green-400/30 bg-green-400/10"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/fattofitfitness_gym",
      icon: Instagram,
      color: "text-pink-400 border-pink-400/30 bg-pink-400/10"
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@fattofitalbarsha",
      icon: "TikTok",
      color: "text-white border-white/30 bg-white/10"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/1YmQodvD3D/",
      icon: Facebook,
      color: "text-blue-400 border-blue-400/30 bg-blue-400/10"
    },
    {
      name: "Location",
      url: "https://g.co/kgs/qUULvFC",
      icon: MapPin,
      color: "text-red-400 border-red-400/30 bg-red-400/10"
    }
  ];

  const TikTokIcon = () => (
    <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43Z"/>
    </svg>
  );

  return (
    <section id="location" className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20px 20px, #ef4444 2px, transparent 2px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-6 transition-all duration-1200 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Visit • Connect • Transform
          </div>
          
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tight transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              FIND US
            </span>
            <span className="block text-white/95 mt-2 text-2xl sm:text-3xl lg:text-4xl font-light">
              START YOUR JOURNEY
            </span>
          </h2>

          <p className={`text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Ready to transform your life? Visit our <span className="text-white font-semibold">world-class facility</span> in 
            the heart of Dubai or connect with us through your preferred platform.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Side - Contact Info */}
          <div className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            
            {/* Logo Section */}
            <div className={`mb-12 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="bg-black p-8 rounded-2xl text-center shadow-2xl shadow-red-500/20 border border-gray-800">
                <img src="/color-logo.png" alt="Fat to Fit Fitness Gym Logo" className="h-16 w-auto mx-auto" />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* Phone */}
              <div className={`group flex items-start gap-4 p-6 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-red-500/30 transition-all duration-300 hover:bg-gray-900/70 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-red-500/20 p-3 rounded-full group-hover:bg-red-500/30 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-red-400" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Call Us Now</h4>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-lg font-medium"
                  >
                    {contactInfo.phone}
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Available 24/7 for inquiries</p>
                </div>
              </div>

              {/* Email */}
              <div className={`group flex items-start gap-4 p-6 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-red-500/30 transition-all duration-300 hover:bg-gray-900/70 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-red-500/20 p-3 rounded-full group-hover:bg-red-500/30 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-red-400" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Email Us</h4>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-300 hover:text-red-400 transition-colors duration-300 text-base font-medium break-all"
                  >
                    {contactInfo.email}
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Get detailed information</p>
                </div>
              </div>

              {/* Address */}
              <div className={`group flex items-start gap-4 p-6 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-red-500/30 transition-all duration-300 hover:bg-gray-900/70 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="bg-red-500/20 p-3 rounded-full group-hover:bg-red-500/30 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-red-400" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg mb-1">Visit Our Gym</h4>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {contactInfo.address}
                  </p>
                  <p className="text-gray-500 text-sm mt-1">Prime location in Dubai</p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className={`mt-12 transition-all duration-1000 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <h4 className="text-white font-semibold text-xl mb-6 text-center">Connect With Us</h4>
              
              <div className="grid grid-cols-5 gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon === "TikTok" ? TikTokIcon : social.icon;
                  
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center gap-2 p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-red-500/30"
                    >
                      <div className="relative">
                        <IconComponent className="w-6 h-6 text-white transition-all duration-300" strokeWidth={2} />
                        
                        {/* Glow effect */}
                        <div className="absolute inset-0 blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                          <IconComponent className="w-6 h-6 text-red-400" strokeWidth={2} />
                        </div>
                      </div>
                      
                      <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors duration-300">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Side - Map */}
          <div className={`transition-all duration-1000 ease-out transform delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            
            {/* Map Container */}
            <div className="relative group">
              <a 
                href="https://g.co/kgs/qUULvFC"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-800 group-hover:border-red-500/30 transition-all duration-500 cursor-pointer">
                  
                  {/* Google Maps Embed - Exact gym location from share link */}
                  <div className="aspect-[4/3] w-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.7431022023775!2d55.20034687508842!3d25.110556135205073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6bb8932b604b%3A0x8a44c575633c3bb6!2sFat%20To%20Fit%20Fitness%20Gym%20(Biggest%20Gym%20in%20Al%20Barsha)!5e0!3m2!1sen!2sae!4v1754241084678!5m2!1sen!2sae"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                      title="Fat to Fit Fitness Gym - Sama Building, Al Barsha 1, Dubai"
                    ></iframe>
                  </div>

                  {/* Map Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>
                  
                  {/* Map CTA */}
                  <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white font-semibold">Sama Building, Al Barsha 1</p>
                          <p className="text-gray-300 text-sm">Click to open in Google Maps</p>
                        </div>
                        <div className="bg-red-500 p-2 rounded-full">
                          <MapPin className="w-5 h-5 text-white" strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Decorative Elements */}
              <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -z-20 -top-2 -left-2 w-8 h-8 bg-red-500/30 rounded-full blur-lg animate-pulse"></div>
            </div>

            {/* Location Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center hover:border-red-500/30 transition-all duration-300">
                <div className="text-xl font-bold text-red-400 mb-1">10 Min</div>
                <div className="text-sm text-gray-400">From Metro</div>
              </div>
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 text-center hover:border-red-500/30 transition-all duration-300">
                <div className="text-xl font-bold text-red-400 mb-1">Premium</div>
                <div className="text-sm text-gray-400">Central Area</div>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-red-500/30 transition-all duration-300">
              <h4 className="text-white font-semibold text-lg mb-4 text-center">Opening Hours</h4>
              <div className="space-y-2 text-center">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Mon - Sun</span>
                  <span className="text-white font-medium">24/7</span>
                </div>
                <div className="text-sm text-green-400 font-medium">Always Open</div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-red-500/10 to-red-600/10 backdrop-blur-sm border border-red-500/20 rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Open Now</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <span className="text-gray-300">Ready to welcome you 24/7</span>
          </div>
        </div>

      </div>
    </section>
  );
}