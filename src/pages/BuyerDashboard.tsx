import React from 'react';
import ProductCard, { Product } from '@/components/ProductCard';
import { ScrollAnimate } from "../components/ScrollAnimate";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, 
  Package, 
  Search, 
  Truck, 
  Calendar, 
  User,
  LogOut,
  Heart,
  Home,
  Scroll
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const recentOrderData = [
  {
    id: 'ORD-501',
    items: 'Tomatoes (10kg), Onions (5kg), Potatoes (15kg)',
    farm: 'Ramesh Patel Farms',
    total: 'GHS 1,400',
    status: 'Delivered',
    date: '2025-05-18',
  },
  {
    id: 'ORD-502',
    items: 'Apples (8kg), Carrots (3kg)',
    farm: 'Green Valley Organics',
    total: 'GHS 2,160',
    status: 'En Route',
    date: '2025-05-20',
  },
  {
    id: 'ORD-503',
    items: 'Rice (25kg), Wheat (20kg)',
    farm: 'Sharma Grain Farms',
    total: 'GHS 2,800',
    status: 'Processing',
    date: '2025-05-21',
  },
];

const recommendedProducts: Product[] = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    price: 40,
    unit: 'kg',
    farmer: 'Kwamina Ebo',
    location: 'Wiamoasi, Kumasi',
    imageUrl: 'https://images.unsplash.com/photo-1592924357228-9b03954a1d30?q=80&w=1374&auto=format&fit=crop',
    available: 100,
  },
  {
    id: '2',
    name: 'Organic Rice',
    category: 'Grains',
    price: 60,
    unit: 'kg',
    farmer: 'Agyeiwaa Adomako',
    location: 'Oyibi, Accra',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1470&auto=format&fit=crop',
    available: 500,
  },
  {
    id: '3',
    name: 'Fresh Apples',
    category: 'Fruits',
    price: 120,
    unit: 'kg',
    farmer: 'Julius Owusu',
    location: 'Doboro, Accra',
    imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?q=80&w=1374&auto=format&fit=crop',
    available: 80,
  }
];

const BuyerDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('home');


  return (
    <ScrollAnimate delay="delay-150">
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-4 border-b">
          <h2 className="text-farm-green text-lg font-bold">Farm-to-Market</h2>
          <p className="text-sm text-gray-500">Buyer Dashboard</p>
        </div>
        
        <div className="flex flex-col flex-grow p-4">
          <div className="space-y-1">
            <button onClick={() => setActiveTab('home')} className={`flex items-center space-x-3 px-3 py-2 w-full text-left rounded-md ${activeTab === 'home' ? 'bg-green-50 text-farm-green' : 'hover:bg-gray-100'}`}>
              <Home className="h-5 w-5" />
              <span>Home</span>
            </button>
            
            <button onClick={() => setActiveTab('marketplace')} className={`flex items-center space-x-3 px-3 py-2 w-full text-left rounded-md ${activeTab === 'marketplace' ? 'bg-green-50 text-farm-green' : 'hover:bg-gray-100'}`}>
              <Search className="h-5 w-5" />
              <span>Marketplace</span>
            </button>
            
            <button onClick={() => setActiveTab('orders')} className={`flex items-center space-x-3 px-3 py-2 w-full text-left rounded-md ${activeTab === 'orders' ? 'bg-green-50 text-farm-green' : 'hover:bg-gray-100'}`}>
              <Package className="h-5 w-5" />
              <span>My Orders</span>
            </button>
            
            <button onClick={() => setActiveTab('cart')} className={`flex items-center space-x-3 px-3 py-2 w-full text-left rounded-md ${activeTab === 'cart' ? 'bg-green-50 text-farm-green' : 'hover:bg-gray-100'}`}>
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </button>
            
            <button onClick={() => setActiveTab('favorites')} className={`flex items-center space-x-3 px-3 py-2 w-full text-left rounded-md ${activeTab === 'favorites' ? 'bg-green-50 text-farm-green' : 'hover:bg-gray-100'}`}>
              <Heart className="h-5 w-5" />
              <span>Favorites</span>
            </button>
            
            <button onClick={() => setActiveTab('deliveries')} className={`flex items-center space-x-3 px-3 py-2 w-full text-left rounded-md ${activeTab === 'deliveries' ? 'bg-green-50 text-farm-green' : 'hover:bg-gray-100'}`}>
              <Truck className="h-5 w-5" />
              <span>Deliveries</span>
            </button>
            
            <button onClick={() => setActiveTab('schedule')} className={`flex items-center space-x-3 px-3 py-2 w-full text-left rounded-md ${activeTab === 'schedule' ? 'bg-green-50 text-farm-green' : 'hover:bg-gray-100'}`}>
              <Calendar className="h-5 w-5" />
              <span>Schedule</span>
            </button>
            
            <button onClick={() => setActiveTab('profile')} className={`flex items-center space-x-3 px-3 py-2 w-full text-left rounded-md ${activeTab === 'profile' ? 'bg-green-50 text-farm-green' : 'hover:bg-gray-100'}`}>
              <User className="h-5 w-5" />
              <span>Profile</span>
            </button>
          </div>
          
          <div className="mt-auto pt-4">
            <Link to="/">
              <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-red-600 hover:bg-red-50">
                <LogOut className="h-5 w-5 mr-2" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1">
        {/* Mobile header */}
        <div className="md:hidden bg-white p-4 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-farm-green text-lg font-bold">Buyer Dashboard</h2>
            <button className="p-1 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          
          <div className="mt-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="marketplace">Market</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        {/* Dashboard content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome, Hot & Crispy Restaurant!</h1>
              <p className="text-gray-600">Find the freshest produce for your business</p>
            </div>
            
            <div className="flex space-x-3 mt-4 md:mt-0">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input placeholder="Search products..." className="pl-9 w-64" />
              </div>
              
              <Link to="/products/search">
                <Button className="bg-farm-green hover:bg-farm-lightGreen text-white">
                  Browse All
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Content based on active tab */}
          <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="hidden md:grid grid-cols-4 mb-6">
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
              <TabsTrigger value="orders">My Orders</TabsTrigger>
              <TabsTrigger value="cart">Cart</TabsTrigger>
            </TabsList>
            
            <TabsContent value="home">
              {/* Order status summary */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Active Orders</p>
                        <h3 className="text-2xl font-bold">2</h3>
                        <p className="text-xs text-blue-600 flex items-center mt-1">
                          1 out for delivery
                        </p>
                      </div>
                      <div className="bg-blue-100 p-3 rounded-full">
                        <Package className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Cart Items</p>
                        <h3 className="text-2xl font-bold">5</h3>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          GHS 3,200 total
                        </p>
                      </div>
                      <div className="bg-green-100 p-3 rounded-full">
                        <ShoppingCart className="h-6 w-6 text-farm-green" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Upcoming Deliveries</p>
                        <h3 className="text-2xl font-bold">3</h3>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          Next: June 22, 2025
                        </p>
                      </div>
                      <div className="bg-orange-100 p-3 rounded-full">
                        <Truck className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Recent orders */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recent Orders</h2>
                  <Link to="/dashboard/buyer?tab=orders">
                    <Button variant="ghost" className="text-farm-green">View All Orders</Button>
                  </Link>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farm</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {recentOrderData.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{order.id}</div>
                            <div className="text-xs text-gray-500">{order.date}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-500">{order.items}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{order.farm}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{order.total}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              order.status === 'Delivered' 
                                ? 'bg-green-100 text-green-800' 
                                : order.status === 'En Route'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button variant="ghost" size="sm" className="text-farm-green hover:text-farm-lightGreen">Track</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Recommended products */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recommended for You</h2>
                  <Link to="/products/search">
                    <Button variant="ghost" className="text-farm-green">View All Products</Button>
                  </Link>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {recommendedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="marketplace">
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-500">Full Marketplace Coming Soon</h3>
                <p className="text-gray-400 mt-2">Browse all available products with advanced filtering</p>
                <Link to="/products/search" className="mt-4 inline-block">
                  <Button className="bg-farm-green hover:bg-farm-lightGreen">Go to Product Search</Button>
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="orders">
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-500">Order History Coming Soon</h3>
                <p className="text-gray-400 mt-2">View all your past and current orders with detailed tracking</p>
              </div>
            </TabsContent>
            
            <TabsContent value="cart">
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-500">Shopping Cart Coming Soon</h3>
                <p className="text-gray-400 mt-2">Manage your items and complete checkout</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
    </ScrollAnimate>
  );
};

export default BuyerDashboard;
