
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';

// Import all product images
import maskGabon from '@/assets/mask-gabon.webp';
import applianceItalian from '@/assets/appliance-italian.webp';
import textileGabon from '@/assets/textile-gabon.webp';
import watchItalian from '@/assets/watch-italian.webp';
import smartphone from '@/assets/smartphone.webp';
import coffeeItalian from '@/assets/coffee-italian.webp';
import necklaceGabon from '@/assets/necklace-gabon.webp';
import tv from '@/assets/tv.webp';
import dressItalian from '@/assets/dress-italian.webp';
import sculptureGabon from '@/assets/sculpture-gabon.webp';
import laptop from '@/assets/laptop.webp';
import honey from '@/assets/honey.webp';
import sneakersItalian from '@/assets/sneakers-italian.webp';
import sofa from '@/assets/sofa.webp';
import spices from '@/assets/spices.webp';
import handbagItalian from '@/assets/handbag-italian.webp';
import camera from '@/assets/camera.webp';
import lightbulb from '@/assets/lightbulb.webp';
import oliveOilItalian from '@/assets/olive-oil-italian.webp';

const products = [
  {
    id: 1,
    name: "Masque Traditionnel Fang",
    price: "45,000",
    originalPrice: "55,000",
    currency: "FCFA",
    image: maskGabon,
    rating: 4.8,
    reviews: 23,
    seller: "Artisan Libreville",
    category: "art",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Lave-vaisselle Italien Bosch",
    price: "850,000",
    originalPrice: "950,000",
    currency: "FCFA",
    image: applianceItalian,
    rating: 4.9,
    reviews: 15,
    seller: "ElectroItalia",
    category: "home",
    badge: "Promo"
  },
  {
    id: 3,
    name: "Tissu Wax Authentique",
    price: "25,000",
    originalPrice: null,
    currency: "FCFA",
    image: textileGabon,
    rating: 4.7,
    reviews: 34,
    seller: "Tissus du Gabon",
    category: "fashion",
    badge: "Nouveau"
  },
  {
    id: 4,
    name: "Montre Italienne Luxe",
    price: "320,000",
    originalPrice: "380,000",
    currency: "FCFA",
    image: watchItalian,
    rating: 4.9,
    reviews: 12,
    seller: "Luxury Milano",
    category: "jewelry",
    badge: "Exclusif"
  },
  {
    id: 5,
    name: "Smartphone Samsung Galaxy",
    price: "450,000",
    originalPrice: null,
    currency: "FCFA",
    image: smartphone,
    rating: 4.6,
    reviews: 87,
    seller: "TechGabon",
    category: "electronics",
    badge: null
  },
  {
    id: 6,
    name: "Café Arabica du Gabon",
    price: "15,000",
    originalPrice: "18,000",
    currency: "FCFA",
    image: coffeeItalian,
    rating: 4.8,
    reviews: 156,
    seller: "Plantations Gabonaises",
    category: "food",
    badge: "Bio"
  },
  {
    id: 7,
    name: "Collier Perles Traditionnelles",
    price: "65,000",
    originalPrice: null,
    currency: "FCFA",
    image: necklaceGabon,
    rating: 4.7,
    reviews: 43,
    seller: "Bijoux Ancestraux",
    category: "jewelry",
    badge: "Artisanal"
  },
  {
    id: 8,
    name: "Télévision LG 55 pouces",
    price: "680,000",
    originalPrice: "750,000",
    currency: "FCFA",
    image: tv,
    rating: 4.5,
    reviews: 29,
    seller: "ElectroMax",
    category: "electronics",
    badge: "Promo"
  },
  {
    id: 9,
    name: "Robe Traditionnelle Gabonaise",
    price: "85,000",
    originalPrice: null,
    currency: "FCFA",
    image: dressItalian,
    rating: 4.9,
    reviews: 67,
    seller: "Mode Afrique",
    category: "fashion",
    badge: "Tendance"
  },
  {
    id: 10,
    name: "Sculpture en Ébène",
    price: "120,000",
    originalPrice: "150,000",
    currency: "FCFA",
    image: sculptureGabon,
    rating: 4.8,
    reviews: 18,
    seller: "Art Traditionnel",
    category: "art",
    badge: "Unique"
  },
  {
    id: 11,
    name: "Laptop Dell Inspiron",
    price: "780,000",
    originalPrice: null,
    currency: "FCFA",
    image: laptop,
    rating: 4.4,
    reviews: 93,
    seller: "Informatique Pro",
    category: "electronics",
    badge: null
  },
  {
    id: 12,
    name: "Miel Naturel du Gabon",
    price: "22,000",
    originalPrice: null,
    currency: "FCFA",
    image: honey,
    rating: 4.9,
    reviews: 124,
    seller: "Apiculture Locale",
    category: "food",
    badge: "Naturel"
  },
  {
    id: 13,
    name: "Chaussures Nike Air Max",
    price: "95,000",
    originalPrice: "110,000",
    currency: "FCFA",
    image: sneakersItalian,
    rating: 4.6,
    reviews: 78,
    seller: "Sport Fashion",
    category: "fashion",
    badge: "Sport"
  },
  {
    id: 14,
    name: "Canapé Italien Design",
    price: "1,200,000",
    originalPrice: "1,400,000",
    currency: "FCFA",
    image: sofa,
    rating: 4.7,
    reviews: 24,
    seller: "Mobilier Milano",
    category: "home",
    badge: "Luxe"
  },
  {
    id: 15,
    name: "Tablette iPad Pro",
    price: "650,000",
    originalPrice: null,
    currency: "FCFA",
    image: smartphone,
    rating: 4.8,
    reviews: 156,
    seller: "Apple Store Gabon",
    category: "electronics",
    badge: "Pro"
  },
  {
    id: 16,
    name: "Épices Traditionnelles Mix",
    price: "18,000",
    originalPrice: null,
    currency: "FCFA",
    image: spices,
    rating: 4.5,
    reviews: 89,
    seller: "Saveurs d'Afrique",
    category: "food",
    badge: "Authentique"
  },
  {
    id: 17,
    name: "Sac à Main Cuir Italien",
    price: "180,000",
    originalPrice: "220,000",
    currency: "FCFA",
    image: handbagItalian,
    rating: 4.8,
    reviews: 45,
    seller: "Maroquinerie Milano",
    category: "fashion",
    badge: "Cuir"
  },
  {
    id: 18,
    name: "Appareil Photo Canon",
    price: "520,000",
    originalPrice: null,
    currency: "FCFA",
    image: camera,
    rating: 4.7,
    reviews: 38,
    seller: "Photo Pro",
    category: "electronics",
    badge: null
  },
  {
    id: 19,
    name: "Lampe Artisanale Bambou",
    price: "35,000",
    originalPrice: null,
    currency: "FCFA",
    image: lightbulb,
    rating: 4.6,
    reviews: 62,
    seller: "Déco Nature",
    category: "home",
    badge: "Éco"
  },
  {
    id: 20,
    name: "Huile de Palme Bio",
    price: "12,000",
    originalPrice: "15,000",
    currency: "FCFA",
    image: oliveOilItalian,
    rating: 4.9,
    reviews: 234,
    seller: "Agriculture Bio Gabon",
    category: "food",
    badge: "Bio"
  }
];

interface ProductGridProps {
  category: string;
  searchTerm: string;
  sortBy: string;
  viewMode: string;
}

const ProductGrid = ({ category, searchTerm, sortBy, viewMode }: ProductGridProps) => {
  // Filter products based on category and search term
  const filteredProducts = products.filter(product => {
    const matchesCategory = category === 'all' || product.category === category;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return parseInt(a.price.replace(',', '')) - parseInt(b.price.replace(',', ''));
      case 'price-high':
        return parseInt(b.price.replace(',', '')) - parseInt(a.price.replace(',', ''));
      case 'newest':
        return b.id - a.id;
      case 'popular':
      default:
        return b.reviews - a.reviews;
    }
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-gray-600">
          {sortedProducts.length} produits trouvés
        </p>
      </div>

      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
          : 'grid-cols-1'
      }`}>
        {sortedProducts.map((product) => (
          <Card key={product.id} className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 overflow-hidden">
            <CardContent className="p-0">
              {/* Product Image */}
              <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.badge && (
                  <Badge className={`absolute top-3 left-3 ${
                    product.badge === 'Promo' ? 'bg-red-500' :
                    product.badge === 'Nouveau' ? 'bg-gabon-green' :
                    product.badge === 'Exclusif' ? 'bg-purple-500' :
                    'bg-gabon-blue'
                  } text-white`}>
                    {product.badge}
                  </Badge>
                )}
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-600 hover:text-red-500 p-2"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-gabon-gray mb-2 group-hover:text-gabon-green transition-colors line-clamp-2">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-2">
                  <div className="flex items-center mr-2">
                    <Star className="w-4 h-4 fill-gabon-yellow text-gabon-yellow" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs text-gray-500">({product.reviews} avis)</span>
                </div>

                <p className="text-xs text-gray-600 mb-3">par {product.seller}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gabon-green">
                      {product.price} {product.currency}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <Button className="w-full bg-gabon-green hover:bg-gabon-green/90 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Ajouter au panier
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
