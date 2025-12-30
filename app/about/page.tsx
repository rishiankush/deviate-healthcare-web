export default function About() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Daviate Healthcare</h1>
          <p className="text-xl text-orange-50 max-w-3xl">
            Empower Your Health - Leading pharmaceutical manufacturer committed to quality and innovation
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 mb-6">
              Daviate Healthcare is a leading pharmaceutical manufacturing company based in Baddi, Himachal Pradesh. 
              We specialize in the production of high-quality nutraceuticals, health supplements, and pharmaceutical 
              products that meet international standards.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              With our state-of-the-art WHO-GMP certified manufacturing facility, we are committed to delivering 
              superior quality products that enhance health and wellbeing. Our comprehensive range includes syrups, 
              tablets, capsules, protein powders, sachets, and drops.
            </p>
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Company Details</h3>
              <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-semibold">License Number:</p>
                  <p>10925999000069</p>
                </div>
                <div>
                  <p className="font-semibold">Location:</p>
                  <p>Baddi, Himachal Pradesh</p>
                </div>
                <div>
                  <p className="font-semibold">Certifications:</p>
                  <p>ISO 9001:2015, WHO-GMP, FSSAI</p>
                </div>
                <div>
                  <p className="font-semibold">Established:</p>
                  <p>With 15+ years of excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8 rounded-lg h-full shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg text-orange-50">
                  To empower health by providing innovative, high-quality pharmaceutical and nutraceutical 
                  products that improve the quality of life for people across India and beyond. We strive 
                  to be a trusted partner for healthcare providers and consumers alike.
                </p>
              </div>
            </div>
            <div>
              <div className="bg-gray-900 text-white p-8 rounded-lg h-full">
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-lg text-gray-300">
                  To become a leading pharmaceutical manufacturing company recognized globally for our 
                  commitment to quality, innovation, and customer satisfaction. We aim to set new standards 
                  in the pharmaceutical industry through continuous improvement and technological advancement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Certifications & Accreditations
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="bg-white w-32 h-32 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200 p-4">
                <img src="/images/certifications/who-gmp.jpg" alt="WHO-GMP Certified" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">WHO-GMP Certified</h3>
              <p className="text-sm text-gray-600">Good Manufacturing Practice</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="bg-white w-32 h-32 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200 p-4">
                <img src="/images/certifications/iso-9001.png" alt="ISO 9001:2015" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">ISO 9001:2015</h3>
              <p className="text-sm text-gray-600">Quality Management System</p>
            </div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300">
              <div className="bg-white w-32 h-32 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg border border-gray-200 p-4">
                <img src="/images/certifications/fssai.png" alt="FSSAI Certified" className="w-full h-full object-contain" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">FSSAI Approved</h3>
              <p className="text-sm text-gray-600">Food Safety Standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Daviate Healthcare?
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 5.523-4.477 10-10 10S1 17.523 1 12 5.477 2 11 2c2.31 0 4.438.793 6.118 2.016M15 9l-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Assurance</h3>
              <p className="text-gray-600">
                WHO-GMP and ISO 9001:2015 certified facility ensuring international quality standards 
                for all products
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">State-of-the-Art Facility</h3>
              <p className="text-gray-600">
                Modern manufacturing infrastructure equipped with latest technology and automated 
                systems
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Experienced Team</h3>
              <p className="text-gray-600">
                Skilled professionals with extensive experience in pharmaceutical manufacturing 
                and quality control
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Cost-effective solutions without compromising on quality, helping partners maximize 
                their margins
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h3>
              <p className="text-gray-600">
                Reliable production schedules and efficient logistics ensuring on-time delivery 
                across India
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Formulations</h3>
              <p className="text-gray-600">
                R&D capabilities to develop customized formulations tailored to specific market needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Location</h2>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-lg border border-orange-100">
              <p className="text-lg text-gray-700 mb-4">
                <strong>Daviate Healthcare</strong>
              </p>
              <p className="text-gray-600 mb-2">
                Plot No. 11-A, Apvare Park cum Industrial Area
              </p>
              <p className="text-gray-600 mb-2">
                Katha, Teh. Baddi, Distt. Solan (H.P.) - 173205
              </p>
              <p className="text-gray-600 mb-4">
                License No.: 10925999000069
              </p>
              <p className="text-sm text-gray-500 italic">
                Strategically located in Baddi, one of India&apos;s premier pharmaceutical manufacturing hubs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Partner With Us Today
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied partners who trust Daviate Healthcare for their 
            pharmaceutical manufacturing needs
          </p>
          <a
            href="/contact"
            className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition-all inline-block shadow-lg"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
}
