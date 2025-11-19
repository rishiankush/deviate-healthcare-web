import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-blue-400">Daviate</span> Healthcare
            </h3>
            <p className="text-gray-400 mb-4">
              Empower Your Health
            </p>
            <p className="text-gray-400 text-sm">
              ISO 9001:2015 Certified Company
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Manufacturing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Plot No. 11-A, Apvare Park cum Industrial Area</li>
              <li>Katha, Teh. Baddi, Distt. Solan (H.P.) - 173205</li>
              <li className="mt-4">Lic. No.: 10925999000069</li>
              <li>Email: info@daviatehealthcare.com</li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>✓ WHO-GMP Certified</li>
              <li>✓ ISO 9001:2015</li>
              <li>✓ FSSAI Approved</li>
              <li>✓ Quality Assurance Organization</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Daviate Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
