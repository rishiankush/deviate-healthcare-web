'use client';

import { useState } from 'react';

type Product = {
  name: string;
  composition: string;
  volume?: string;
  description?: string;
  flavor?: string;
  features?: string;
  category?: string;
  image?: string;
  imageUrl?: string;
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');

  const products: Record<string, Product[]> = {
    syrups: [
      {
        name: "BECOLIFE",
        composition: "Ferric Ammonium Citrate, Cyanocobalamin & Folic Acid Suspension",
        volume: "300 ML",
        description: "Health supplement for anemia and nutritional deficiency",
        image: "🧴",
        imageUrl: "/images/products/becolife.jpeg"
      },
      {
        name: "COLYDE",
        composition: "Lycopene, Multivitamin, Multimineral & Antioxidant Syrup",
        volume: "200ml",
        description: "A Complete Health Restorer",
        image: "🧴",
        imageUrl: "/images/products/colyde.jpeg"
      },
      {
        name: "COLSILIV",
        composition: "Silymarin, L-Ornithine L-Aspartate with Vitamin B-Complex Suspension",
        volume: "200ml",
        description: "Liver health support syrup",
        image: "🧴",
        imageUrl: "/images/products/colsiliv.jpeg"
      },
      {
        name: "RED ME",
        composition: "Ferrous Asparto Glycinate, Vitamin B9 & Cyanocobalamin Suspension",
        volume: "150 ml",
        flavor: "Mango Flavour",
        description: "Iron and vitamin B complex for anemia",
        image: "🥭",
        imageUrl: "/images/products/redme.jpeg"
      },
      {
        name: "COLZYME-PLUS",
        composition: "Fungal Diastase, Papain with L-Lysine & B-Complex Syrup",
        volume: "200ML",
        features: "Sugar Free",
        description: "Digestive enzyme syrup with essential vitamins",
        image: "🧴",
        imageUrl: "/images/products/colzyme-plus.jpeg"
      },
      {
        name: "AURBET XT",
        composition: "Ferrous Bisglycinate, Folic Acid and Zinc Suspension",
        volume: "200 ml",
        description: "Iron, folic acid and zinc supplement",
        image: "🧴",
        imageUrl: "/images/products/aurbet-xt.jpeg"
      },
      {
        name: "GEMS-XP Syrup",
        composition: "Multivitamins, Multiminerals & Antioxidants Syrup",
        volume: "200ml",
        flavor: "Pineapple Flavour",
        description: "Complete nutritional supplement",
        image: "🍍",
        imageUrl: "/images/products/gems-xp.jpeg"
      }
    ],
    tablets: [
      {
        name: "Magnesium, Glycine & Vitamin D3",
        composition: "Magnesium (Magnesium aspartate), Glycine, Vitamin D3 (cholecalciferol) – Animal source Tablet",
        image: "💊"
      },
      {
        name: "Nutraceutical Tablet",
        composition: "Myoinositol, Inositol, Chromium picolinate/nicotinate, Folic Acid, glucosamine salt, Vitamin D3, Selenium, Biotin",
        image: "💊"
      },
      {
        name: "Collagen & Hyaluronic Acid",
        composition: "Collagen and its hydrolysed peptides and chelates, Hyaluronic acid and its salts, Chondroitin sulphate, Vitamin C (Lascorbic acid) Tablet",
        image: "💊"
      },
      {
        name: "Calcium & Vitamin D3",
        composition: "Calcium (Calcium salts of citric acid), Zinc (Zinc sulphate), Vitamin D3 (cholecalciferol) – Animal source Tablet",
        image: "💊"
      }
    ],
    capsules: [
      {
        name: "Antioxidant Capsule",
        composition: "Glutathione / Sacetyl glutathione, Vitamin C (Lascorbic acid), Grape seed extract, Alpha Lipoic Acid, Vitamin E(Dalphatocopherol), Biotin (D-biotin) Capsuale",
        image: "💊"
      },
      {
        name: "Curcumin Complex",
        composition: "Curcuminoids – soft extract / powder and curcumin complex, Piper nigrum / Piper longum extract Capsule",
        image: "🌿"
      },
      {
        name: "Probiotic Capsule",
        composition: "Lactobacillus acidophilus, Lacticaseibacillus rhamnosus, Bifidobacterium bifidum, Bifidobacterium longum Saccharomyces boulardii, Fructooligosaccharides Hard Gelatin Capsule",
        image: "💊"
      }
    ],
    drops: [
      {
        name: "AZKO-ZYME Drops",
        composition: "Alpha Amylase & Papain",
        description: "Digestive enzyme drops for infants",
        image: "💧",
        imageUrl: "/images/products/azko-zyme.jpeg"
      },
      {
        name: "WAYVIT Drops",
        composition: "Multivitamin & Multimineral Drops",
        description: "Essential vitamins and minerals for children",
        image: "💧",
        imageUrl: "/images/products/wayvit.jpeg"
      },
      {
        name: "Vitamin D3 Drops",
        composition: "Vitamin D3: 400IU (66.67% RDA), DHA: 50mg DROP",
        image: "💧"
      }
    ],
    proteins: [
      {
        name: "High Protein BCAA",
        composition: "High protein content (68g per serving), BCAAs (essential amino acids), 43 essential nutrients, Vitamins and minerals, Vanilla flavor",
        image: "🥤"
      },
      {
        name: "Premium Protein",
        composition: "Trans Fat Free, Cholesterol Free, Gluten Free, Enriched with Saffron protein content",
        image: "🥤"
      }
    ],
    sachets: [
      {
        name: "Probiotic Sachet - Multi Strain",
        composition: "Fructooligosaccharides Lactobacillus rhamnosus, Bifidobacterium longum Saccharomyces boulardii, Zinc (Zinc acetate) Sachet",
        image: "📦"
      },
      {
        name: "Collagen Builder",
        composition: "Ceramides + Collagen Builder contains:- 500mg CollaBZen500mg SesZen-Bio 4% Phyto Ceramides sachet",
        image: "📦"
      },
      {
        name: "Energy Boost",
        composition: "Dextrose: 17.5 gm, Sucrose: 14 gm, Zinc Sulphate: 32.5 mg, Vitamin C (As Electrolyte): 50 mg sachet",
        image: "⚡"
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Products', icon: '🏥' },
    { id: 'syrups', name: 'Syrups & Suspensions', icon: '💊' },
    { id: 'tablets', name: 'Tablets', icon: '💊' },
    { id: 'capsules', name: 'Capsules', icon: '💊' },
    { id: 'proteins', name: 'Protein Powders', icon: '🥤' },
    { id: 'sachets', name: 'Sachets', icon: '📦' },
    { id: 'drops', name: 'Drops', icon: '💧' }
  ];

  const getFilteredProducts = () => {
    if (activeCategory === 'all') {
      return Object.entries(products).flatMap(([category, items]) =>
        items.map(item => ({ ...item, category }))
      );
    }
    return products[activeCategory as keyof typeof products].map(item => ({
      ...item,
      category: activeCategory
    }));
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-blue-100">
            Comprehensive range of pharmaceutical and nutraceutical products
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white shadow-md sticky top-20 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex overflow-x-auto space-x-4 pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full whitespace-nowrap transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span>{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="mb-8">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{getFilteredProducts().length}</span> products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredProducts().map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-6 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Product Image Icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {product.imageUrl ? (
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden shadow-md transform hover:scale-110 transition-transform bg-gradient-to-br from-blue-100 to-blue-200">
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-4 text-4xl transform hover:scale-110 transition-transform">
                        {product.image || '💊'}
                      </div>
                    )}
                    <div>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-2">
                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                  {product.volume && (
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                      {product.volume}
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Composition:</p>
                    <p className="text-sm text-gray-600">{product.composition}</p>
                  </div>

                  {product.description && (
                    <div>
                      <p className="text-sm font-semibold text-gray-700 mb-1">Description:</p>
                      <p className="text-sm text-gray-600">{product.description}</p>
                    </div>
                  )}

                  {product.flavor && (
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="mr-2">🍎</span>
                      <span>{product.flavor}</span>
                    </div>
                  )}

                  {product.features && (
                    <div className="flex items-center">
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {product.features}
                      </span>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>ISO Certified</span>
                    </div>
                    <a href="/contact" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                      Inquire Now →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Our Products?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us for detailed product information, pricing, and partnership opportunities
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
