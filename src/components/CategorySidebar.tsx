
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Shirt, Palette, ChefHat, Gem, Home, Monitor, Camera } from 'lucide-react';

const categories = [
  { id: 'all', name: 'Toutes les catégories', count: 850, icon: null },
  { id: 'electronics', name: 'Électronique', count: 250, icon: Smartphone },
  { id: 'fashion', name: 'Mode & Vêtements', count: 180, icon: Shirt },
  { id: 'art', name: 'Art & Artisanat', count: 120, icon: Palette },
  { id: 'food', name: 'Gastronomie', count: 90, icon: ChefHat },
  { id: 'jewelry', name: 'Bijoux & Accessoires', count: 75, icon: Gem },
  { id: 'home', name: 'Maison & Décoration', count: 135, icon: Home },
];

const brands = [
  'Bosch', 'Samsung', 'LG', 'Apple', 'Sony', 'Nike', 'Gucci', 'Prada', 'Artisan Libreville', 'Tissus du Gabon'
];

const priceRanges = [
  { label: 'Moins de 50,000 FCFA', min: 0, max: 50000 },
  { label: '50,000 - 100,000 FCFA', min: 50000, max: 100000 },
  { label: '100,000 - 250,000 FCFA', min: 100000, max: 250000 },
  { label: '250,000 - 500,000 FCFA', min: 250000, max: 500000 },
  { label: 'Plus de 500,000 FCFA', min: 500000, max: null },
];

interface CategorySidebarProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySidebar = ({ selectedCategory, onCategoryChange }: CategorySidebarProps) => {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Catégories</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-gabon-green text-white'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => onCategoryChange(category.id)}
              >
                <div className="flex items-center space-x-3">
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  <span className="text-sm font-medium">{category.name}</span>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {category.count}
                </Badge>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Prix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {priceRanges.map((range, index) => (
            <label key={index} className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">{range.label}</span>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Brands */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Marques</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {brands.slice(0, 8).map((brand) => (
            <label key={brand} className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <span className="text-sm">{brand}</span>
            </label>
          ))}
        </CardContent>
      </Card>

      {/* Rating */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Note</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="flex items-center space-x-2 cursor-pointer">
              <input type="checkbox" className="rounded" />
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${
                      i < rating ? 'text-gabon-yellow' : 'text-gray-300'
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-sm text-gray-600">& plus</span>
              </div>
            </label>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default CategorySidebar;
