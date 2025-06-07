
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 text-sm text-gray-600 border-b border-gray-100">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Globe className="w-4 h-4 mr-1" />
              Livraison au Gabon
            </span>
            <span>|</span>
            <span>Aide & Support</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Français</span>
            <span>|</span>
            <Link to="/become-seller" className="hover:text-gabon-green transition-colors">
              Devenir Vendeur
            </Link>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gabon-green to-gabon-blue bg-clip-text text-transparent">
                GabMarketHub
              </h1>
            </Link>
          </div>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Rechercher des produits, marques, artisans..."
                className="pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-gabon-green"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-gabon-green hover:bg-gabon-green/90 px-6">
                Rechercher
              </Button>
            </div>
          </div>

          {/* Right navigation */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="ghost" className="hidden md:flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span>Connexion</span>
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-gabon-yellow text-gabon-gray text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <Button 
              variant="ghost" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation menu */}
        <nav className={`md:block ${isMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
            <li><Link to="/" className="text-gabon-gray hover:text-gabon-green font-medium transition-colors">Accueil</Link></li>
            <li><Link to="/products" className="text-gabon-gray hover:text-gabon-green font-medium transition-colors">Tous les Produits</Link></li>
            <li><Link to="/italian-products" className="text-gabon-gray hover:text-gabon-green font-medium transition-colors">Produits Italiens</Link></li>
            <li><Link to="/gabon-crafts" className="text-gabon-gray hover:text-gabon-green font-medium transition-colors">Artisanat Gabonais</Link></li>
            <li><a href="#" className="text-gabon-gray hover:text-gabon-green font-medium transition-colors">Électronique</a></li>
            <li><a href="#" className="text-gabon-gray hover:text-gabon-green font-medium transition-colors">Mode & Beauté</a></li>
            <li><a href="#" className="text-gabon-gray hover:text-gabon-green font-medium transition-colors">Promotions</a></li>
          </ul>
        </nav>

        {/* Mobile search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Input 
              type="text" 
              placeholder="Rechercher..."
              className="pl-10 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-gabon-green w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
