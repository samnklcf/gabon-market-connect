
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ShoppingBag, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden h-screen">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)'
        }}
      />
      
      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gabon-green/90 via-gabon-blue/85 to-gabon-green/90"></div>
      
      {/* Hero pattern overlay */}
      <div className="absolute inset-0 hero-pattern"></div>

      <div className="relative container mx-auto px-4 py-16 lg:py-24 h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left content */}
          <div className="text-white space-y-6 animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Bienvenue sur
              <span className="block text-gabon-yellow">GabMarketHub</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
              La première marketplace gabonaise connectant entreprises italiennes et artisans locaux
            </p>
            <p className="text-lg text-white/80">
              Découvrez des produits authentiques du Gabon et des marques italiennes de qualité, 
              tout en soutenant l'économie locale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/products">
                <Button size="lg" className="bg-gabon-yellow text-gabon-gray hover:bg-gabon-yellow/90 px-8 py-4 text-lg font-semibold">
                  Explorer les Produits
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gabon-green bg-transparent px-8 py-4 text-lg font-semibold">
                Devenir Vendeur
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <ShoppingBag className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Produits Authentiques</h3>
                  <p className="text-sm text-white/80">Qualité garantie</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Livraison Rapide</h3>
                  <p className="text-sm text-white/80">Partout au Gabon</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-white/20 p-3 rounded-full backdrop-blur-sm">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Paiement Sécurisé</h3>
                  <p className="text-sm text-white/80">Protection acheteur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Hero image/illustration */}
          <div className="relative lg:h-96 animate-float">
            <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20"></div>
            <div className="relative p-8 h-full flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-32 h-32 mx-auto mb-6 bg-gabon-yellow rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-16 h-16 text-gabon-gray" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Marketplace Innovante</h3>
                <p className="text-white/80">Connectant l'Italie et le Gabon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gabon-yellow/10 rounded-full -translate-y-32 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-24 -translate-x-24"></div>
    </section>
  );
};

export default HeroSection;
