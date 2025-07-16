
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shirt, Smartphone, Palette, ChefHat, Gem, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    icon: Smartphone,
    title: "Électronique Italienne",
    description: "Appareils et gadgets de qualité",
    color: "bg-blue-500",
    items: "250+ produits",
    link: "/italian-products"
  },
  {
    icon: Shirt,
    title: "Mode & Vêtements",
    description: "Style italien et africain",
    color: "bg-purple-500",
    items: "180+ produits",
    link: "/italian-products"
  },
  {
    icon: Palette,
    title: "Art & Artisanat",
    description: "Créations gabonaises authentiques",
    color: "bg-gabon-green",
    items: "120+ créations",
    link: "/gabon-crafts"
  },
  {
    icon: ChefHat,
    title: "Gastronomie",
    description: "Saveurs locales et italiennes",
    color: "bg-orange-500",
    items: "90+ produits",
    link: "/italian-products"
  },
  {
    icon: Gem,
    title: "Bijoux & Accessoires",
    description: "Pièces uniques et précieuses",
    color: "bg-pink-500",
    items: "75+ articles",
    link: "/gabon-crafts"
  },
  {
    icon: Home,
    title: "Maison & Décoration",
    description: "Électroménager et déco",
    color: "bg-gabon-blue",
    items: "300+ produits",
    link: "/italian-products"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gabon-gray mb-4">
            Explorez Nos Catégories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez une vaste sélection de produits italiens de qualité et d'artisanat gabonais authentique
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link key={index} to={category.link}>
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`${category.color} p-3 rounded-xl text-white group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-gabon-gray mb-2 group-hover:text-gabon-green transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gabon-green bg-gabon-green/10 px-3 py-1 rounded-full">
                            {category.items}
                          </span>
                          <span className="text-gabon-blue text-sm font-medium group-hover:translate-x-1 transition-transform">
                            Explorer →
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
