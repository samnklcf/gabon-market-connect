
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Badge } from '@/components/ui/badge';

const ItalianProducts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-red-600 to-green-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Produits Italiens</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Découvrez l'excellence italienne : électroménager, mode, gastronomie et bien plus encore
          </p>
          <Badge className="mt-4 bg-white text-red-600 px-4 py-2 text-lg font-semibold">
            🇮🇹 Made in Italy
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <ProductGrid
          category="italian"
          searchTerm=""
          sortBy="popular"
          viewMode="grid"
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default ItalianProducts;
