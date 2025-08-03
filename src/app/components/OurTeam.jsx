"use client";
import { useState, useEffect } from "react";
import { Users } from "lucide-react";

export default function TeamSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Sahlu",
      image: "/Sahlu.jpg",
      languages: ["Hindi", "English", "Malayalam"],
    },
    {
      id: 2,
      name: "Naseeb Palottil",
      image: "/Naseeb-Palottil.jpg",
      languages: ["English", "Malayalam", "Arabic", "Hindi"],
    },
    {
      id: 3,
      name: "Ganga Devi Rai",
      image: "/Ganga-Devi-Rai.jpg",
      languages: ["Hindi", "English"],
    },
    {
      id: 4,
      name: "Vipin Harimani Nair",
      image: "/Vipin-Harimani-Nair.jpg",
      languages: ["Hindi", "English", "Malayalam"],
    },
    {
      id: 5,
      name: "Shimak",
      image: "/Shimak.JPG",
      languages: ["Hindi", "English", "Malayalam"],
    },
    {
      id: 6,
      name: "Vaishnav Seethamadathil",
      image: "/vaishnav.JPG",
      languages: ["Hindi", "English", "Malayalam"],
    },
    {
      id: 7,
      name: "Saranya Sudheer",
      image: "/Saranya.JPG",
      languages: ["Hindi", "English", "Malayalam"],
    },
  ];

  return (
    <section
      id="team"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `conic-gradient(from 45deg at 50% 50%, #ef4444 0deg, transparent 90deg, transparent 270deg, #ef4444 360deg)`,
            backgroundSize: "80px 80px",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className={`text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-6 transition-all duration-1200 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Expertise • Passion • Results
          </div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tight transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              MEET OUR
            </span>
            <span className="block text-white/95 mt-2 text-2xl sm:text-3xl lg:text-4xl font-light">
              ELITE TEAM
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Our world-class team of certified trainers and specialists are here
            to guide you on your transformation journey. Each member brings{" "}
            <span className="text-white font-semibold">years of expertise</span>{" "}
            and an unwavering commitment to your success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group relative transition-all duration-1000 ease-out transform ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${800 + index * 150}ms` }}
            >
              {/* Team Member Card */}
              <div className="relative bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-500 group-hover:transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-red-500/20">
                {/* Member Image  */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Subtle gradient only at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                {/* Member Info - Below Image */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-300">
                    {member.name}
                  </h3>

                  {/* Languages */}
                  <div>
                    <div className="text-sm text-gray-400 mb-3 font-medium uppercase tracking-wider">
                      Languages
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.languages.map((language, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-red-500/20 to-red-600/20 border border-red-500/30 text-red-300 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm hover:from-red-500/30 hover:to-red-600/30 transition-all duration-300"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
              </div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-4 -right-4 w-full h-full bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-1500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-full px-8 py-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-red-400" />
              <span className="text-white font-medium">Expert Team Ready</span>
            </div>
            <div className="w-px h-6 bg-gray-700"></div>
            <span className="text-gray-300">Book your consultation today</span>
          </div>
        </div>
      </div>
    </section>
  );
}
