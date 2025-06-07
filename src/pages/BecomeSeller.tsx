
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Store, TrendingUp, Shield, Users, Globe, Star } from 'lucide-react';

const BecomeSeller = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    businessType: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Seller application:', formData);
    alert('Votre demande a été envoyée ! Nous vous contactons sous 48h.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gabon-green to-gabon-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Devenir Vendeur</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Rejoignez GabMarketHub et développez votre business au Gabon. 
            Que vous soyez une entreprise italienne ou un artisan gabonais, nous vous accompagnons !
          </p>
          <Badge className="mt-6 bg-gabon-yellow text-gabon-gray px-6 py-3 text-lg font-semibold">
            🚀 Inscription Gratuite
          </Badge>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gabon-gray mb-4">Pourquoi Vendre sur GabMarketHub ?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez tous les avantages de notre plateforme
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gabon-green rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gabon-gray">Marché en Croissance</h3>
                <p className="text-gray-600">
                  Accédez à un marché gabonais en pleine expansion avec 2,5 millions d'habitants
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gabon-blue rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gabon-gray">Ventes Garanties</h3>
                <p className="text-gray-600">
                  Nos vendeurs voient en moyenne une augmentation de 300% de leurs ventes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gabon-yellow rounded-full flex items-center justify-center mx-auto">
                  <Shield className="w-8 h-8 text-gabon-gray" />
                </div>
                <h3 className="text-xl font-semibold text-gabon-gray">Paiements Sécurisés</h3>
                <p className="text-gray-600">
                  Système de paiement sécurisé avec protection vendeur et transferts rapides
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gabon-gray">Support Dédié</h3>
                <p className="text-gray-600">
                  Équipe de support dédiée pour vous accompagner dans votre réussite
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gabon-gray">Boutique Personnalisée</h3>
                <p className="text-gray-600">
                  Créez votre boutique personnalisée avec vos couleurs et votre identité
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gabon-gray">Visibilité Maximale</h3>
                <p className="text-gray-600">
                  Bénéficiez de notre marketing et de notre visibilité sur les réseaux sociaux
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-gabon-gray">
                  Candidature Vendeur
                </CardTitle>
                <p className="text-gray-600">Remplissez ce formulaire pour commencer</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="businessType">Type d'activité</Label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    >
                      <option value="">Sélectionnez votre activité</option>
                      <option value="italian-company">Entreprise Italienne</option>
                      <option value="gabon-artisan">Artisan Gabonais</option>
                      <option value="local-business">Entreprise Locale</option>
                      <option value="individual">Particulier</option>
                    </select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="companyName">Nom de l'entreprise/Activité</Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        type="text"
                        placeholder="Nom de votre entreprise"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="contactName">Nom du contact</Label>
                      <Input
                        id="contactName"
                        name="contactName"
                        type="text"
                        placeholder="Votre nom"
                        value={formData.contactName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email professionnel</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="contact@entreprise.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+241 XX XX XX XX"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="country">Pays</Label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    >
                      <option value="">Sélectionnez votre pays</option>
                      <option value="gabon">Gabon</option>
                      <option value="italy">Italie</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="description">Description de votre activité</Label>
                    <textarea
                      id="description"
                      name="description"
                      rows={4}
                      placeholder="Décrivez vos produits et services..."
                      value={formData.description}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border rounded-md"
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" required />
                    <span className="text-sm">
                      J'accepte les conditions de vente et la politique de confidentialité
                    </span>
                  </div>

                  <Button type="submit" className="w-full bg-gabon-green hover:bg-gabon-green/90 text-lg py-3">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Envoyer ma Candidature
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-gabon-green/10 rounded-lg">
                  <p className="text-sm text-gabon-green font-semibold">
                    💡 Après validation de votre candidature, vous recevrez vos identifiants de connexion 
                    et pourrez commencer à vendre immédiatement !
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BecomeSeller;
