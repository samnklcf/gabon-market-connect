
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Globe, Handshake, Target, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gabon-green to-gabon-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">À Propos de GabMarketHub</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            La première marketplace gabonaise connectant entreprises italiennes et artisans locaux 
            pour promouvoir l'échange commercial et culturel entre l'Italie et le Gabon.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gabon-gray mb-4">Notre Mission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Faciliter les échanges commerciaux et créer des ponts entre les cultures italienne et gabonaise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gabon-green rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gabon-gray">Connecter les Marchés</h3>
                <p className="text-gray-600">
                  Créer un pont commercial entre l'excellence italienne et l'authenticité gabonaise
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gabon-blue rounded-full flex items-center justify-center mx-auto">
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gabon-gray">Promouvoir l'Artisanat</h3>
                <p className="text-gray-600">
                  Valoriser le savoir-faire local et offrir une vitrine internationale aux artisans gabonais
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gabon-yellow rounded-full flex items-center justify-center mx-auto">
                  <Heart className="w-8 h-8 text-gabon-gray" />
                </div>
                <h3 className="text-xl font-semibold text-gabon-gray">Soutenir l'Économie</h3>
                <p className="text-gray-600">
                  Stimuler l'économie locale en favorisant les échanges commerciaux durables
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gabon-gray mb-4">Nos Valeurs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <Badge className="bg-gabon-green text-white px-4 py-2 mb-4">Authenticité</Badge>
              <p className="text-gray-600">Produits authentiques et de qualité garantie</p>
            </div>
            <div className="text-center">
              <Badge className="bg-gabon-blue text-white px-4 py-2 mb-4">Innovation</Badge>
              <p className="text-gray-600">Solutions technologiques modernes et sécurisées</p>
            </div>
            <div className="text-center">
              <Badge className="bg-gabon-yellow text-gabon-gray px-4 py-2 mb-4">Transparence</Badge>
              <p className="text-gray-600">Relations claires et honnêtes avec nos partenaires</p>
            </div>
            <div className="text-center">
              <Badge className="bg-gray-600 text-white px-4 py-2 mb-4">Excellence</Badge>
              <p className="text-gray-600">Service client de haute qualité et satisfaction garantie</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gabon-gray mb-4">L'Équipe</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une équipe passionnée dédiée au développement du commerce entre l'Italie et le Gabon
            </p>
          </div>

          <div className="bg-gradient-to-r from-gabon-green/10 to-gabon-blue/10 rounded-lg p-8 text-center">
            <Users className="w-16 h-16 text-gabon-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gabon-gray mb-2">
              Sous l'impulsion de Monsieur Guy
            </h3>
            <p className="text-gray-600 mb-4">
              Travaillant à l'ambassade des États-Unis, Monsieur Guy porte cette vision d'un 
              pont commercial entre l'Italie et le Gabon.
            </p>
            <Badge className="bg-gabon-green text-white px-6 py-2">
              Leadership & Vision
            </Badge>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gabon-gray text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-gabon-yellow mb-2">850+</div>
              <p>Produits disponibles</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gabon-yellow mb-2">150+</div>
              <p>Vendeurs partenaires</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gabon-yellow mb-2">2,500+</div>
              <p>Clients satisfaits</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-gabon-yellow mb-2">50+</div>
              <p>Artisans gabonais</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
