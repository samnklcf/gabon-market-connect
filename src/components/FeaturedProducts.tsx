import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "Masque Traditionnel Fang",
    price: "45,000",
    originalPrice: "55,000",
    currency: "FCFA",
    image: "🎭",
    rating: 4.8,
    reviews: 23,
    seller: "Artisan Libreville",
    category: "Artisanat Gabonais",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Lave-vaisselle Italien Bosch",
    price: "850,000",
    originalPrice: "950,000",
    currency: "FCFA",
    image: "🏠",
    rating: 4.9,
    reviews: 15,
    seller: "ElectroItalia",
    category: "Électroménager",
    badge: "Promo"
  },
  {
    id: 3,
    name: "Tissu Wax Authentique",
    price: "25,000",
    originalPrice: null,
    currency: "FCFA",
    image: "🧵",
    rating: 4.7,
    reviews: 34,
    seller: "Tissus du Gabon",
    category: "Mode & Textile",
    badge: "Nouveau"
  },
  {
    id: 4,
    name: "Montre Italienne Luxe",
    price: "320,000",
    originalPrice: "380,000",
    currency: "FCFA",
    image: "⌚",
    rating: 4.9,
    reviews: 12,
    seller: "Luxury Milano",
    category: "Accessoires",
    badge: "Exclusif"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gabon-gray mb-4">
            Produits en Vedette
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection des meilleurs produits italiens et créations gabonaises
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 overflow-hidden">
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center overflow-hidden">
                  <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                    {product.image}
                  </span>
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
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs text-gabon-blue border-gabon-blue">
                      {product.category}
                    </Badge>
                  </div>
                  
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

        <div className="text-center mt-12">
          <Link to="/products">
            <Button size="lg" variant="outline" className="border-gabon-green text-gabon-green hover:bg-gabon-green hover:text-white px-8">
              Voir Tous les Produits
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
