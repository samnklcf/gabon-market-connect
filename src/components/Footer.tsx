
import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gabon-gray text-white">
      {/* Newsletter section */}
      <div className="bg-gabon-green py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Restez Informé</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Recevez les dernières offres, nouveaux produits et actualités du marketplace gabonais
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Votre adresse email"
              className="flex-1 bg-white text-gray-900 border-none"
            />
            <Button className="bg-gabon-yellow text-gabon-gray hover:bg-gabon-yellow/90 font-semibold">
              S'abonner
            </Button>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gabon-yellow">GabMarketHub</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                La première marketplace gabonaise connectant entreprises italiennes et artisans locaux 
                pour promouvoir l'échange commercial et culturel.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-white hover:text-gabon-yellow p-2">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-gabon-yellow p-2">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button size="sm" variant="ghost" className="text-white hover:text-gabon-yellow p-2">
                  <Twitter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Liens Rapides</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-300 hover:text-gabon-yellow transition-colors text-sm">À Propos</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-gabon-yellow transition-colors text-sm">Comment Ça Marche</a></li>
                <li><Link to="/become-seller" className="text-gray-300 hover:text-gabon-yellow transition-colors text-sm">Devenir Vendeur</Link></li>
                <li><a href="#" className="text-gray-300 hover:text-gabon-yellow transition-colors text-sm">Programme Partenaire</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gabon-yellow transition-colors text-sm">Carrières</a></li>
              </ul>
            </div>

            {/* Customer service */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Service Client</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-gabon-yellow transition-colors text-sm">Centre d'Aide</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gabon-yellow transition-colors text-sm">Livraison & Retours</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gabon-yellow transition-colors text-sm">Politique de Confidentialité</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gabon-yellow transition-colors text-sm">Conditions d'Utilisation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-gabon-yellow transition-colors text-sm">Signaler un Problème</a></li>
              </ul>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gabon-yellow" />
                  <span className="text-gray-300 text-sm">Libreville, Gabon</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-gabon-yellow" />
                  <span className="text-gray-300 text-sm">+241 74570040</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gabon-yellow" />
                  <span className="text-gray-300 text-sm">contact@gabmarkethub.ga</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-600 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GabMarketHub. Tous droits réservés.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Paiement sécurisé</span>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-blue-600 rounded text-xs flex items-center justify-center text-white">VISA</div>
                <div className="w-8 h-5 bg-red-600 rounded text-xs flex items-center justify-center text-white">MC</div>
                <div className="w-8 h-5 bg-gray-600 rounded text-xs flex items-center justify-center text-white">PP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
