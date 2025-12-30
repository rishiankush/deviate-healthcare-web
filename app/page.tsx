'use client';

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=1920&q=80",
      title: "Welcome to Daviate Healthcare",
      subtitle: "Best Third Party Manufacturer in Baddi"
    },
    {
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80",
      title: "WHO-GMP Certified Manufacturing",
      subtitle: "State-of-the-art pharmaceutical facility"
    },
    {
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1920&q=80",
      title: "Quality Health Supplements",
      subtitle: "Comprehensive range of nutraceuticals"
    },
    {
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1920&q=80",
      title: "Advanced Pharmaceutical Solutions",
      subtitle: "Innovation and excellence in healthcare"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section with Full-Width Background Carousel */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Images Carousel */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                filter: 'brightness(0.5)'
              }}
            />
          </div>
        ))}
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-3xl md:text-4xl mb-8 text-orange-400 font-semibold animate-fade-in">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-xl mb-10 text-gray-100 leading-relaxed animate-fade-in">
                We are committed to delivering superior quality pharmaceutical products with WHO-GMP certified manufacturing facilities. Our expertise spans across tablets, capsules, syrups, and more.
              </p>
              <div className="flex gap-4 animate-fade-in">
                <Link href="/contact" className="bg-orange-500 text-white px-10 py-4 rounded-md font-semibold hover:bg-orange-600 transition transform hover:scale-105 shadow-lg text-lg">
                  Get Started
                </Link>
                <Link href="/about" className="bg-white/20 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-md font-semibold hover:bg-white/30 transition transform hover:scale-105 text-lg">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide 
                  ? 'bg-orange-500 w-12' 
                  : 'bg-white/50 hover:bg-white/80 w-2'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">INNOVATION AS THE COMPANY'S ETHOS FOR 15+ YEARS</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Daviate Healthcare is a trusted name in pharmaceutical manufacturing, located in Baddi, Himachal Pradesh. We specialize in third-party manufacturing, providing comprehensive solutions from formulation development to packaging. Our WHO-GMP certified facility ensures international quality standards for all our products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">OUR MISSION</h3>
              <p className="text-gray-600 text-center">
                Daviate Healthcare aims to reach the maximum number of consumers and cater to the healthcare needs of the entire nation and internationally.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏆</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">OUR ACHIEVEMENTS</h3>
              <p className="text-gray-600 text-center">
                Daviate Healthcare has continued to maintain a prestigious position in quality commitments with advanced technology.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">WHO-GMP CERTIFIED</h3>
              <p className="text-gray-600 text-center">
                Our state-of-the-art manufacturing facility is WHO-GMP certified, ensuring the highest quality standards for all products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-orange-500 mb-2">100+</div>
              <div className="text-gray-600 font-semibold">Formulations</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-orange-500 mb-2">600+</div>
              <div className="text-gray-600 font-semibold">Domestic Clients</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-orange-500 mb-2">15+</div>
              <div className="text-gray-600 font-semibold">Years Experience</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-5xl font-bold text-orange-500 mb-2">4</div>
              <div className="text-gray-600 font-semibold">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Categories</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a WHO-GMP-certified manufacturing company and majorly work as a third-party / contract manufacturer. We are manufacturing Tablets, Capsules, and Syrups in various categories including Nutraceuticals, Multivitamins, and Health Supplements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl">💊</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Capsules</h3>
              <p className="text-gray-600 text-center mb-4">
                A wide variety of allopathic capsules that are well-tested, approved while simultaneously delivering longer shelf lives.
              </p>
              <div className="text-center">
                <Link href="/products" className="text-orange-500 font-semibold hover:text-orange-600">View Products →</Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl">💊</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Tablets</h3>
              <p className="text-gray-600 text-center mb-4">
                More than 200+ molecules have been launched to form tablets where quality stays as a priority.
              </p>
              <div className="text-center">
                <Link href="/products" className="text-orange-500 font-semibold hover:text-orange-600">View Products →</Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-full flex items-center justify-center">
                  <span className="text-4xl">🧪</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Dry Syrups</h3>
              <p className="text-gray-600 text-center mb-4">
                Powdered form of dry syrups in all kinds of packaging such as HDPE and glass bottle formulations.
              </p>
              <div className="text-center">
                <Link href="/products" className="text-green-600 font-semibold hover:text-green-700">View Products →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Third-Party Manufacturing Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We offer comprehensive third-party pharmaceutical manufacturing services with state-of-the-art facilities and expert teams dedicated to quality production.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  RC
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center mb-2">Ready to Compress</h3>
              <p className="text-sm text-gray-600 text-center">GRANULES - Excellent Quality</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl">
                  💊
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center mb-2">Products</h3>
              <p className="text-sm text-gray-600 text-center">World-Class Packaging</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl">
                  📦
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center mb-2">Product Range</h3>
              <p className="text-sm text-gray-600 text-center">Wide Variety Available</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-center mb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl">
                  ✓
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 text-center mb-2">Quality Control</h3>
              <p className="text-sm text-gray-600 text-center">WHO-GMP Certified</p>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Services Include:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">✓</span>
                    <span>Contract Manufacturing of Pharmaceuticals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">✓</span>
                    <span>Formulation Development & R&D</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">✓</span>
                    <span>Custom Packaging & Labeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">✓</span>
                    <span>Quality Testing & Assurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-500 mr-2 font-bold">✓</span>
                    <span>Regulatory Compliance Support</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Us:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>State-of-the-art WHO-GMP certified facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Experienced team of pharmaceutical experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Competitive pricing and flexible MOQs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Pan-India distribution network</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 font-bold">✓</span>
                    <span>Dedicated customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Our Products</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Browse through our comprehensive list of available tablets, capsules, and syrups formulated for healthcare needs.</p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src="/images/products/becolife.jpeg" 
                  alt="BECOLIFE"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">Health Supplement Syrup</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src="/images/products/colyde.jpeg" 
                  alt="COLYDE"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">Multivitamin Syrup</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src="/images/products/colsiliv.jpeg" 
                  alt="COLSILIV"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">Liver Health Syrup</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <img 
                  src="/images/products/redme.jpeg" 
                  alt="RED ME"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">Iron Supplement</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/products" className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition shadow-md inline-block">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Certifications & Accreditations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="bg-white w-32 h-32 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200 p-4">
                <img src="/images/certifications/who-gmp.jpg" alt="WHO-GMP Certified" className="w-full h-full object-contain" />
              </div>
              <p className="font-semibold text-gray-800">WHO-GMP Certified</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="bg-white w-32 h-32 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200 p-4">
                <img src="/images/certifications/iso-9001.png" alt="ISO 9001:2015" className="w-full h-full object-contain" />
              </div>
              <p className="font-semibold text-gray-800">ISO 9001:2015</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="bg-white w-32 h-32 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200 p-4">
                <img src="/images/certifications/fssai.png" alt="FSSAI Certified" className="w-full h-full object-contain" />
              </div>
              <p className="font-semibold text-gray-800">FSSAI Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8">Join hundreds of satisfied clients who trust us for quality pharmaceutical manufacturing</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/contact" className="bg-white text-orange-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg">
              Contact Us Today
            </Link>
            <Link href="/products" className="border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-orange-600 transition transform hover:scale-105">
              View Products
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
