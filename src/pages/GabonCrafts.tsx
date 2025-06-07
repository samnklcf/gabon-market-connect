
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import { Badge } from '@/components/ui/badge';

const GabonCrafts = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-gabon-green to-gabon-yellow text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Artisanat Gabonais</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Explorez l'art traditionnel gabonais : masques, sculptures, tissus et créations authentiques
          </p>
          <Badge className="mt-4 bg-white text-gabon-green px-4 py-2 text-lg font-semibold">
            🇬🇦 Fait au Gabon
          </Badge>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <ProductGrid
          category="crafts"
          searchTerm=""
          sortBy="popular"
          viewMode="grid"
        />
      </div>
      
      <Footer />
    </div>
  );
};

export default GabonCrafts;
