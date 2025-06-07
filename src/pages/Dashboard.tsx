
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Package, 
  ShoppingCart, 
  DollarSign, 
  Eye, 
  Users,
  Plus,
  BarChart3,
  Calendar
} from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar
} from 'recharts';

const Dashboard = () => {
  // Données simulées pour les graphiques
  const salesData = [
    { month: 'Jan', sales: 4000, orders: 24 },
    { month: 'Fév', sales: 3000, orders: 18 },
    { month: 'Mar', sales: 5000, orders: 32 },
    { month: 'Avr', sales: 4500, orders: 28 },
    { month: 'Mai', sales: 6000, orders: 42 },
    { month: 'Jun', sales: 5500, orders: 38 },
  ];

  const recentOrders = [
    { id: '#001', client: 'Marie Dupont', produit: 'Masque Traditionnel', montant: 75000, statut: 'Livré' },
    { id: '#002', client: 'Jean Mboma', produit: 'Sculpture Bois', montant: 120000, statut: 'En cours' },
    { id: '#003', client: 'Alice Martin', produit: 'Tissu Wax', montant: 45000, statut: 'Expédié' },
    { id: '#004', client: 'Paul Nguema', produit: 'Collier Perles', montant: 35000, statut: 'Préparation' },
  ];

  const topProducts = [
    { nom: 'Masque Traditionnel', ventes: 45, revenus: 337500 },
    { nom: 'Sculpture Éléphant', ventes: 32, revenus: 480000 },
    { nom: 'Tissu Wax Premium', ventes: 28, revenus: 252000 },
    { nom: 'Collier Authentique', ventes: 21, revenus: 157500 },
  ];

  const chartConfig = {
    sales: {
      label: "Ventes (FCFA)",
      color: "#10b981",
    },
    orders: {
      label: "Commandes",
      color: "#3b82f6",
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* En-tête du Dashboard */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">Dashboard Vendeur</h1>
            <p className="text-slate-600">Bonjour, voici un aperçu de vos performances</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button className="bg-gabon-green hover:bg-gabon-green/90">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter Produit
            </Button>
            <Button variant="outline">
              <BarChart3 className="w-4 h-4 mr-2" />
              Rapport Détaillé
            </Button>
          </div>
        </div>

        {/* Métriques Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm font-medium">Revenus Totaux</p>
                  <p className="text-3xl font-bold">1.2M FCFA</p>
                  <div className="flex items-center text-green-100 text-sm mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +12% ce mois
                  </div>
                </div>
                <DollarSign className="w-12 h-12 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Commandes</p>
                  <p className="text-3xl font-bold">142</p>
                  <div className="flex items-center text-blue-100 text-sm mt-1">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    +8% ce mois
                  </div>
                </div>
                <ShoppingCart className="w-12 h-12 text-blue-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Produits</p>
                  <p className="text-3xl font-bold">24</p>
                  <div className="flex items-center text-purple-100 text-sm mt-1">
                    <Package className="w-4 h-4 mr-1" />
                    3 nouveaux
                  </div>
                </div>
                <Package className="w-12 h-12 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm font-medium">Visiteurs</p>
                  <p className="text-3xl font-bold">2.8K</p>
                  <div className="flex items-center text-orange-100 text-sm mt-1">
                    <Eye className="w-4 h-4 mr-1" />
                    +15% ce mois
                  </div>
                </div>
                <Users className="w-12 h-12 text-orange-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Graphiques et Statistiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-800">
                <TrendingUp className="w-5 h-5 mr-2 text-gabon-green" />
                Évolution des Ventes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line 
                    type="monotone" 
                    dataKey="sales" 
                    stroke="var(--color-sales)" 
                    strokeWidth={3}
                    dot={{ fill: "var(--color-sales)", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-800">
                <BarChart3 className="w-5 h-5 mr-2 text-gabon-green" />
                Commandes par Mois
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-80">
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar 
                    dataKey="orders" 
                    fill="var(--color-orders)" 
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
        </div>

        {/* Tables et Listes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Commandes Récentes */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-800">
                <Calendar className="w-5 h-5 mr-2 text-gabon-green" />
                Commandes Récentes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-slate-800">{order.id} - {order.client}</p>
                      <p className="text-sm text-slate-600">{order.produit}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-800">{order.montant.toLocaleString()} FCFA</p>
                      <Badge 
                        variant={order.statut === 'Livré' ? 'default' : 'secondary'}
                        className={order.statut === 'Livré' ? 'bg-green-500' : ''}
                      >
                        {order.statut}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Produits Top Ventes */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center text-slate-800">
                <Package className="w-5 h-5 mr-2 text-gabon-green" />
                Produits Top Ventes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topProducts.map((product, index) => (
                  <div key={product.nom} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 ${
                        index === 0 ? 'bg-yellow-500' : 
                        index === 1 ? 'bg-gray-400' : 
                        index === 2 ? 'bg-orange-600' : 'bg-slate-400'
                      }`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{product.nom}</p>
                        <p className="text-sm text-slate-600">{product.ventes} ventes</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-800">{product.revenus.toLocaleString()} FCFA</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
