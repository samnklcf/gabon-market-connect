
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CreditCard, Smartphone, Building, Shield, Check } from 'lucide-react';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const orderItems = [
    { name: "Masque Traditionnel Fang", price: 45000, quantity: 1 },
    { name: "Lave-vaisselle Italien Bosch", price: 850000, quantity: 1 },
    { name: "Tissu Wax Authentique", price: 25000, quantity: 2 }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5000;
  const total = subtotal + shipping;

  const handlePayment = () => {
    setIsProcessing(true);
    // Simulation du traitement du paiement
    setTimeout(() => {
      setIsProcessing(false);
      setIsComplete(true);
    }, 3000);
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gabon-gray mb-4">Commande confirmée !</h1>
              <p className="text-gray-600 mb-6">
                Merci pour votre achat. Votre commande #GAB-{Date.now()} a été traitée avec succès.
              </p>
              <div className="bg-gabon-green/10 rounded-lg p-4 mb-6">
                <p className="text-gabon-green font-semibold">
                  Total payé : {total.toLocaleString()} FCFA
                </p>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-8">
                <p>📧 Un email de confirmation vous a été envoyé</p>
                <p>📱 Vous recevrez un SMS avec le suivi de votre commande</p>
                <p>🚚 Livraison estimée : 2-3 jours ouvrables</p>
              </div>
              <div className="flex gap-4 justify-center">
                <Button variant="outline">Suivre ma commande</Button>
                <Button className="bg-gabon-green hover:bg-gabon-green/90">
                  Continuer les achats
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gabon-gray mb-8">Finaliser ma commande</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {/* Delivery Address */}
              <Card>
                <CardHeader>
                  <CardTitle>Adresse de livraison</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Prénom" />
                    <Input placeholder="Nom" />
                  </div>
                  <Input placeholder="Adresse complète" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Ville" />
                    <Input placeholder="Code postal" />
                  </div>
                  <Input placeholder="Téléphone" />
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Méthode de paiement</CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs value={paymentMethod} onValueChange={setPaymentMethod}>
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="card">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Carte
                      </TabsTrigger>
                      <TabsTrigger value="mobile">
                        <Smartphone className="w-4 h-4 mr-2" />
                        Mobile Money
                      </TabsTrigger>
                      <TabsTrigger value="bank">
                        <Building className="w-4 h-4 mr-2" />
                        Virement
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="card" className="space-y-4 mt-6">
                      <Input placeholder="Numéro de carte" />
                      <div className="grid grid-cols-2 gap-4">
                        <Input placeholder="MM/AA" />
                        <Input placeholder="CVV" />
                      </div>
                      <Input placeholder="Nom sur la carte" />
                    </TabsContent>

                    <TabsContent value="mobile" className="space-y-4 mt-6">
                      <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                          Choisissez votre opérateur mobile :
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                          <Button variant="outline" className="h-12">
                            📱 Airtel Money
                          </Button>
                          <Button variant="outline" className="h-12">
                            📱 Moov Money
                          </Button>
                        </div>
                        <Input placeholder="Numéro de téléphone" />
                      </div>
                    </TabsContent>

                    <TabsContent value="bank" className="space-y-4 mt-6">
                      <div className="space-y-4">
                        <p className="text-sm text-gray-600">
                          Informations de virement bancaire :
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg text-sm">
                          <p><strong>Banque :</strong> BGFI Bank Gabon</p>
                          <p><strong>IBAN :</strong> GA21 4001 2000 0123 4567 8901</p>
                          <p><strong>BIC :</strong> BGFIGAGL</p>
                          <p><strong>Référence :</strong> GAB-{Date.now()}</p>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Votre commande</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{item.name} x{item.quantity}</span>
                    <span>{(item.price * item.quantity).toLocaleString()} FCFA</span>
                  </div>
                ))}
                
                <hr />
                
                <div className="flex justify-between">
                  <span>Sous-total</span>
                  <span>{subtotal.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between">
                  <span>Livraison</span>
                  <span>{shipping.toLocaleString()} FCFA</span>
                </div>
                
                <hr />
                
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-gabon-green">{total.toLocaleString()} FCFA</span>
                </div>
                
                <Button 
                  className="w-full bg-gabon-green hover:bg-gabon-green/90 mt-6"
                  onClick={handlePayment}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Traitement en cours...
                    </>
                  ) : (
                    <>
                      <Shield className="w-4 h-4 mr-2" />
                      Payer {total.toLocaleString()} FCFA
                    </>
                  )}
                </Button>
                
                <div className="text-center mt-4 space-y-2">
                  <Badge variant="outline" className="text-gabon-green border-gabon-green">
                    ✓ Paiement sécurisé SSL
                  </Badge>
                  <p className="text-xs text-gray-500">
                    Vos données sont protégées par un cryptage 256-bit
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
