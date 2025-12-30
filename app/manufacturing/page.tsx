export default function Manufacturing() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Third-Party Manufacturing</h1>
          <p className="text-xl text-orange-50 max-w-3xl">
            WHO-GMP certified pharmaceutical manufacturing facility with comprehensive third-party services
          </p>
        </div>
      </section>

      {/* Manufacturing Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Your Trusted Manufacturing Partner
            </h2>
            <p className="text-lg text-gray-600">
              Daviate Healthcare offers comprehensive third-party pharmaceutical manufacturing services with 
              state-of-the-art facilities in Baddi, Himachal Pradesh. Our WHO-GMP certified facility ensures 
              the highest quality standards for all our manufacturing partners.
            </p>
          </div>

          {/* Manufacturing Capabilities */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
              <div className="text-orange-600 text-3xl mb-3">💊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Syrups & Suspensions</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 50ml to 300ml bottles</li>
                <li>• WHO-GMP certified</li>
                <li>• Various flavors available</li>
                <li>• Custom formulations</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg">
              <div className="text-green-600 text-3xl mb-3">💊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tablets & Capsules</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• All standard dosage forms</li>
                <li>• Film-coated & uncoated</li>
                <li>• Hard & soft gelatin</li>
                <li>• Blister & bottle packaging</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg">
              <div className="text-purple-600 text-3xl mb-3">🥤</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Protein Powders</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Various pack sizes</li>
                <li>• Multiple flavors</li>
                <li>• Custom blends</li>
                <li>• Premium quality</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-lg">
              <div className="text-orange-600 text-3xl mb-3">📦</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sachets & Drops</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Single & multi-dose packs</li>
                <li>• Pediatric drops</li>
                <li>• Probiotic sachets</li>
                <li>• Electrolyte formulations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Manufacturing */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Manufacturing Services?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-blue-600 mr-4 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">WHO-GMP Certified Facility</h3>
                  <p className="text-gray-600">
                    Our manufacturing unit is WHO-GMP certified, ensuring compliance with international 
                    quality standards and regulatory requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-blue-600 mr-4 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Infrastructure</h3>
                  <p className="text-gray-600">
                    State-of-the-art machinery and equipment with automated systems for precision 
                    manufacturing and quality control.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-blue-600 mr-4 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Competitive Pricing</h3>
                  <p className="text-gray-600">
                    Cost-effective manufacturing solutions without compromising on quality. Located in 
                    excise-free zone reducing overall costs.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-blue-600 mr-4 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Timely Delivery</h3>
                  <p className="text-gray-600">
                    Efficient production planning and logistics management ensuring on-time delivery 
                    across India.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-blue-600 mr-4 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Formulations</h3>
                  <p className="text-gray-600">
                    In-house R&D team to develop customized formulations tailored to your specific 
                    requirements and target market.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <div className="text-blue-600 mr-4 mt-1">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Regulatory Support</h3>
                  <p className="text-gray-600">
                    Complete documentation and regulatory compliance support for drug licensing 
                    and approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Manufacturing Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation & Requirements</h3>
                  <p className="text-gray-600">
                    Initial consultation to understand your requirements, target market, and product specifications.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Formulation Development</h3>
                  <p className="text-gray-600">
                    Our R&D team develops or optimizes formulations based on your specifications and regulatory requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Sample Production & Testing</h3>
                  <p className="text-gray-600">
                    Pilot batch production followed by comprehensive quality testing and stability studies.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial Production</h3>
                  <p className="text-gray-600">
                    Full-scale production with stringent quality control at every stage of manufacturing.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Packaging & Labeling</h3>
                  <p className="text-gray-600">
                    Professional packaging with custom labeling as per your brand requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 mr-4">
                  6
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Delivery & Support</h3>
                  <p className="text-gray-600">
                    Timely delivery with ongoing technical and regulatory support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Certifications */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quality Certifications & Compliance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">ISO</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600">Quality Management System Certified</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">WHO</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">WHO-GMP</h3>
              <p className="text-sm text-gray-600">Good Manufacturing Practice Certified</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl font-bold text-orange-600">FSSAI</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">FSSAI Approved</h3>
              <p className="text-sm text-gray-600">Food Safety Standards Authority</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">QRO</span>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">QRO Certified</h3>
              <p className="text-sm text-gray-600">Quality Research Organization</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Manufacturing?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your manufacturing requirements and how we can help bring your 
            pharmaceutical products to market
          </p>
          <a
            href="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all inline-block shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
