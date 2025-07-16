
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

// Import cart product images
import maskGabon from '@/assets/mask-gabon.webp';
import applianceItalian from '@/assets/appliance-italian.webp';
import textileGabon from '@/assets/textile-gabon.webp';

const cartItems = [
  {
    id: 1,
    name: "Masque Traditionnel Fang",
    price: 45000,
    quantity: 1,
    image: maskGabon,
    seller: "Artisan Libreville"
  },
  {
    id: 2,
    name: "Lave-vaisselle Italien Bosch",
    price: 850000,
    quantity: 1,
    image: applianceItalian,
    seller: "ElectroItalia"
  },
  {
    id: 3,
    name: "Tissu Wax Authentique",
    price: 25000,
    quantity: 2,
    image: textileGabon,
    seller: "Tissus du Gabon"
  }
];

const Cart = () => {
  const [items, setItems] = useState(cartItems);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setItems(items.filter(item => item.id !== id));
    } else {
      setItems(items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5000; // Frais de livraison fixes
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center py-16">
            <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-4" />
            <h2 className="text-2xl font-bold text-gray-600 mb-2">Votre panier est vide</h2>
            <p className="text-gray-500 mb-8">Découvrez nos produits et ajoutez-les à votre panier</p>
            <Button className="bg-gabon-green hover:bg-gabon-green/90">
              Continuer les achats
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gabon-gray mb-8">Mon Panier</h1>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-gabon-gray">{item.name}</h3>
                      <p className="text-sm text-gray-600">par {item.seller}</p>
                      <p className="text-lg font-bold text-gabon-green mt-1">
                        {item.price.toLocaleString()} FCFA
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Résumé de la commande</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                
                <Button className="w-full bg-gabon-green hover:bg-gabon-green/90 mt-6">
                  Procéder au paiement
                </Button>
                
                <div className="text-center mt-4">
                  <Badge variant="outline" className="text-gabon-green border-gabon-green">
                    ✓ Paiement sécurisé
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
