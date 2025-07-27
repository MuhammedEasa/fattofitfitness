"use client";
import { useState, useEffect } from "react";
import { Star, ExternalLink } from "lucide-react";

export default function ReviewsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Fat to Fit Gym completely transformed my life! The personal trainers are incredibly knowledgeable and supportive. I've lost 25 pounds in 4 months and gained so much confidence. The facilities are top-notch and always clean.",
    },
    {
      id: 2,
      name: "Mike Rodriguez",
      rating: 5,
      date: "1 month ago",
      review:
        "Best gym experience I've ever had! The kickboxing classes are intense and fun. The trainers push you to your limits while keeping it safe. Amazing community of people who genuinely support each other.",
    },
    {
      id: 3,
      name: "Emily Chen",
      rating: 5,
      date: "3 weeks ago",
      review:
        "The mobility classes here are a game changer! As someone who sits at a desk all day, these sessions have eliminated my back pain completely. The instructors are professional and really know their stuff.",
    },
    {
      id: 4,
      name: "David Thompson",
      rating: 5,
      date: "1 week ago",
      review:
        "Joined 6 months ago and it's the best decision I made. The aerobic classes are high energy and never boring. Lost 30 pounds and built muscle I never thought I could. Highly recommend to anyone serious about fitness!",
    },
    {
      id: 5,
      name: "Jessica Martinez",
      rating: 5,
      date: "2 months ago",
      review:
        "The personal training program is worth every penny. My trainer customized everything to my needs and injuries. The 24/7 access is perfect for my schedule. This place actually cares about your results!",
    },
    {
      id: 6,
      name: "Robert Kim",
      rating: 5,
      date: "5 days ago",
      review:
        "Clean facilities, modern equipment, and amazing staff! The kickboxing classes helped me lose weight while learning self-defense. The community here feels like family. Can't imagine working out anywhere else.",
    },
    {
      id: 7,
      name: "Amanda Davis",
      rating: 5,
      date: "3 months ago",
      review:
        "This gym changed my relationship with fitness. The trainers are patient, knowledgeable, and genuinely care. I went from hating exercise to looking forward to my workouts. Results speak for themselves!",
    },
    {
      id: 8,
      name: "Chris Wilson",
      rating: 5,
      date: "1 month ago",
      review:
        "Outstanding gym with premium equipment and expert trainers. The variety of classes keeps things interesting. Lost 40 pounds and gained incredible strength. The investment in my health was totally worth it!",
    },
  ];

  const handleGoogleReviewClick = () => {
    window.open("https://share.google/wS3gGPJ66FB24sIYH", "_blank");
  };

  return (
    <section
      id="reviews"
      className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-950 via-black to-gray-950 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`text-sm uppercase tracking-[0.3em] text-red-400 font-semibold mb-6 transition-all duration-1200 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Testimonials • Success Stories • Real Results
          </div>

          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-8 leading-[0.9] tracking-tight transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <span className="block bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
              WHAT OUR
            </span>
            <span className="block text-white/95 mt-2 text-2xl sm:text-3xl lg:text-4xl font-light">
              MEMBERS SAY
            </span>
          </h2>

          <p
            className={`text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Don't just take our word for it. See what our amazing members have
            to say about their
            <span className="text-white font-semibold">
              {" "}
              transformation journey
            </span>{" "}
            at Fat to Fit Gym.
          </p>

          {/* Google Reviews Stats */}
          <div
            className={`inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 transition-all duration-1000 delay-800 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                alt="Google"
                className="w-5 h-5"
              />
              <span className="text-white font-semibold">Google Reviews</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-white font-bold">4.9</span>
            <span className="text-gray-300">• 1000+ Reviews</span>
          </div>
        </div>

        {/* Reviews Scroll Container */}
        <div
          className={`relative transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Scrolling Reviews */}
          <div className="flex gap-6 animate-scroll-mobile sm:animate-scroll-tablet lg:animate-scroll-desktop">
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="flex-shrink-0 w-80 sm:w-96 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:border-red-500/30 hover:bg-white/15 transition-all duration-300 group"
              >
                {/* Review Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {review.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{review.date}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-200 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                  "{review.review}"
                </p>

                {/* Google Badge */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                      alt="Google"
                      className="w-4 h-4"
                    />
                    <span className="text-gray-400 text-xs">
                      Posted on Google
                    </span>
                  </div>

                  <div className="w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button
            onClick={handleGoogleReviewClick}
            className="group relative bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-4 rounded-full font-bold text-base uppercase tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 border border-red-400/30"
          >
            <span className="relative z-10 flex items-center gap-3">
              Read All Reviews on Google
              <ExternalLink
                className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                strokeWidth={2.5}
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 blur-xl scale-150"></div>
          </button>

          <p className="text-gray-400 text-sm mt-4">
            Join our community of satisfied members
          </p>
        </div>
      </div>

      {/* Custom CSS for responsive infinite scroll with consistent speed */}
      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Mobile: Slower speed for smaller cards */
        .animate-scroll-mobile {
          animation: scroll-horizontal 25s linear infinite;
        }

        .animate-scroll-mobile:hover {
          animation-play-state: paused;
        }

        /* Tablet: Medium speed */
        @media (min-width: 640px) {
          .animate-scroll-tablet {
            animation: scroll-horizontal 22s linear infinite;
          }

          .animate-scroll-tablet:hover {
            animation-play-state: paused;
          }
        }

        /* Desktop: Faster speed for larger cards */
        @media (min-width: 1024px) {
          .animate-scroll-desktop {
            animation: scroll-horizontal 20s linear infinite;
          }

          .animate-scroll-desktop:hover {
            animation-play-state: paused;
          }
        }

        /* Ultra-wide screens: Even faster */
        @media (min-width: 1536px) {
          .animate-scroll-desktop {
            animation: scroll-horizontal 18s linear infinite;
          }
        }
      `}</style>
    </section>
  );
}