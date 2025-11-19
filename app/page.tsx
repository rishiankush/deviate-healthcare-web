'use client';

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen pt-20">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-bold mb-6">Welcome to Daviate Healthcare</h1>
              <p className="text-xl mb-4">Leading Third-Party Pharmaceutical Manufacturing Company</p>
              <p className="text-lg mb-8 text-blue-100">We are committed to delivering superior quality pharmaceutical products with WHO-GMP certified manufacturing facilities. Our expertise spans across tablets, capsules, syrups, and more.</p>
              <div className="flex gap-4">
                <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105">
                  Get Started
                </Link>
                <Link href="/about" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative hidden md:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-400 to-blue-600">
                  <img 
                    src="/images/products/company-building.png" 
                    alt="Daviate Healthcare Manufacturing Facility"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white text-blue-600 px-4 py-2 rounded-full font-bold shadow-lg animate-bounce">
                ISO Certified
              </div>
              <div className="absolute -bottom-4 -left-4 bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg animate-pulse">
                WHO-GMP
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse">100+</div>
              <div className="text-gray-600">Formulations</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse" style={{ animationDelay: '0.1s' }}>500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse" style={{ animationDelay: '0.2s' }}>15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="transform hover:scale-110 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2 animate-pulse" style={{ animationDelay: '0.3s' }}>4</div>
              <div className="text-gray-600">Certifications</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Daviate Healthcare</h2>
            <p className="text-lg text-gray-600">
              Daviate Healthcare is a trusted name in pharmaceutical manufacturing, located in Baddi, Himachal Pradesh. We specialize in third-party manufacturing, providing comprehensive solutions from formulation development to packaging. Our WHO-GMP certified facility ensures international quality standards for all our products.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              <strong>License No.:</strong> 10925999000069 | <strong>Location:</strong> Plot No. 11-A, Apvare Park cum Industrial Area, Katha, Teh. Baddi, Distt. Solan (H.P.) - 173205
            </p>
          </div>
        </div>
      </section>

      {/* Core Strengths */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Core Strengths</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">
                WHO-GMP and ISO certified manufacturing units. All products are approved by DCGI and FSSAI, ensuring international quality standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Affordable Cost</h3>
              <p className="text-gray-600">
                Cost-effective solutions without compromising quality. Manufacturing in excise-free zones reduces taxation burden for customers.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">On-Time Delivery</h3>
              <p className="text-gray-600">
                Extensive distribution network across India ensures timely delivery. 24x7 stock availability maintained at all times.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Third-Party Manufacturing Services</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
            We offer comprehensive third-party pharmaceutical manufacturing services with state-of-the-art facilities and expert teams dedicated to quality production.
          </p>
          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Our Services Include:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Contract Manufacturing of Pharmaceuticals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Formulation Development & R&D</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Custom Packaging & Labeling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Quality Testing & Assurance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Regulatory Compliance Support</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Why Choose Us:</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>State-of-the-art WHO-GMP certified facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Experienced team of pharmaceutical experts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Competitive pricing and flexible MOQs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Pan-India distribution network</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
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
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Product Range</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💊</div>
              <h3 className="text-xl font-bold mb-2">Tablets</h3>
              <p className="text-gray-600 text-sm">Wide range of pharmaceutical tablets including antibiotics, analgesics, and more.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💊</div>
              <h3 className="text-xl font-bold mb-2">Capsules</h3>
              <p className="text-gray-600 text-sm">High-quality hard and soft gelatin capsules for various therapeutic categories.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🧪</div>
              <h3 className="text-xl font-bold mb-2">Syrups</h3>
              <p className="text-gray-600 text-sm">Pediatric and adult syrups with excellent taste and efficacy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💉</div>
              <h3 className="text-xl font-bold mb-2">Injectables</h3>
              <p className="text-gray-600 text-sm">Sterile injectables manufactured under stringent quality controls.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Certifications & Accreditations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <span className="text-2xl font-bold text-blue-600">WHO</span>
              </div>
              <p className="font-semibold">WHO-GMP</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: '0.2s' }}>
                <span className="text-2xl font-bold text-blue-600">ISO</span>
              </div>
              <p className="font-semibold">ISO 9001:2015</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: '0.4s' }}>
                <span className="text-2xl font-bold text-blue-600">DCGI</span>
              </div>
              <p className="font-semibold">DCGI Approved</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 animate-float" style={{ animationDelay: '0.6s' }}>
                <span className="text-2xl font-bold text-blue-600">FSSAI</span>
              </div>
              <p className="font-semibold">FSSAI Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 animate-fade-in">Join hundreds of satisfied clients who trust us for quality pharmaceutical manufacturing</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition transform hover:scale-105 shadow-lg hover:shadow-xl">
              Contact Us Today
            </Link>
            <Link href="/products" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition transform hover:scale-105">
              View Products
            </Link>
          </div>
        </div>
      </section>


    </div>
  );
}
