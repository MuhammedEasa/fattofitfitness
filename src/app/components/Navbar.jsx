"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Our Team", href: "/team" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Location", href: "/#location" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-900/95 backdrop-blur-md shadow-2xl"
            : "bg-black/90 backdrop-blur-sm border-b border-gray-800/50"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 rounded-lg blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <a href="/">
                <Image
                  src="/logo.png"
                  alt="Fat to Fit Fitness Gym Logo"
                  width={48}
                  height={48}
                  className="relative h-10 w-10 md:h-12 md:w-12 lg:h-14 lg:w-14 rounded-lg object-cover"
                />
                </a>
              </div>
              <div>
                <h1 className="text-white text-lg sm:text-xl lg:text-3xl font-extrabold tracking-wide">
                  FAT TO FIT FITNESS GYM
                </h1>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="flex items-center space-x-1">
                {/* Mobile Menu Items */}
                {menuItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative group text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg overflow-hidden"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <div className="absolute inset-0 bg-red-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-lg"></div>
                    <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-red-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative p-2 text-gray-300 hover:text-white transition-colors duration-300 group"
              >
                <div className="absolute inset-0 bg-red-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="bg-gray-900/98 backdrop-blur-md border-t border-red-500/20">
            <div className="px-4 py-6 space-y-2">
              {menuItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block relative group text-gray-300 hover:text-white px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10 flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item.name}
                  </span>
                  <div className="absolute inset-0 bg-red-500/10 translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-lg"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
}
