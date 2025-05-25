import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Package, TrendingUp, File, Truck, PlusCircle, Search, Calendar, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { ScrollAnimate } from "../components/ScrollAnimate";

const productData = [{
  id: '1',
  name: 'Fresh Tomatoes',
  category: 'Vegetables',
  price: 40,
  unit: 'kg',
  quantity: 100,
  status: 'Available'
}, {
  id: '2',
  name: 'Organic Potatoes',
  category: 'Vegetables',
  price: 30,
  unit: 'kg',
  quantity: 150,
  status: 'Available'
}, {
  id: '3',
  name: 'Green Chilies',
  category: 'Spices',
  price: 60,
  unit: 'kg',
  quantity: 50,
  status: 'Low Stock'
}];
const orderData = [{
  id: 'ORD-001',
  buyer: 'Namrata Restaurant',
  items: 'Tomatoes, Onions',
  total: 'GHS 2,400',
  status: 'En Route',
  date: '2025-05-18'
}, {
  id: 'ORD-002',
  buyer: 'Fresh Grocers',
  items: 'Potatoes, Chilies',
  total: 'GHS 1,800',
  status: 'Delivered',
  date: '2025-05-15'
}, {
  id: 'ORD-003',
  buyer: 'Green Market',
  items: 'Tomatoes, Potatoes',
  total: 'GHS 3,200',
  status: 'Processing',
  date: '2025-05-20'
}];
const FarmerDashboard = () => {
  const {
    toast
  } = useToast();
  const [activeTab, setActiveTab] = useState('products');
  return <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r">
        <div className="p-4 border-b">
          <h2 className="text-farm-green text-lg font-bold">Farm-to-Market</h2>
          <p className="text-sm text-gray-500">Farmer Dashboard</p>
        </div>
        
        <div className="flex flex-col flex-grow p-4">
          <div className="space-y-1">
            <button onClick={() => setActiveTab('products')} className={`flex items-center space-x-3 px-3 py-2 w-full text-left rounded-md ${activeTab === 'products' ? 'bg-green-50 text-farm-green' : 'hover:bg-gray-100'}`}>
              <Package className="h-5 w-5" />
              <span>My Products</span>
            </button>
            
            <button onClick={() => setActiveTab('orders')} className={`flex items-center space-x-3 px-3 py-2 w-full text-left rounded-md ${activeTab === 'orders' ? 'bg-green-50 text-farm-green' : 'hover:bg-gray-100'}`}>
              <File className="h-5 w-5" />
              <span>Orders</span>
            </button>
            
            <button onClick={() => setActiveTab('analytics')} className={`flex items-center space-x-3 px-3 py-2 w-full text-left rounded-md ${activeTab === 'analytics' ? 'bg-green-50 text-farm-green' : 'hover:bg-gray-100'}`}>
              <TrendingUp className="h-5 w-5" />
              <span>Analytics</span>
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
            <h2 className="text-farm-green text-lg font-bold">Farmer Dashboard</h2>
            <button className="p-1 rounded-md hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
          
          <div className="mt-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="products">Products</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        {/* Dashboard content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome, Agyemang
!</h1>
              <p className="text-gray-600">Here's what's happening with your farm today</p>
            </div>
            
            <div className="flex space-x-3 mt-4 md:mt-0">
              <Button variant="outline" className="flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </Button>
              
              <Button className="bg-farm-green hover:bg-farm-lightGreen text-white flex items-center space-x-2">
                <PlusCircle className="h-4 w-4" />
                <span>Add Product</span>
              </Button>
            </div>
          </div>
          
          {/* Stats overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Total Revenue</p>
                    <h3 className="text-2xl font-bold">GHS 68,500</h3>
                    <p className="text-xs text-green-600 flex items-center mt-1">
                      +12% from last month
                    </p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-full">
                    <TrendingUp className="h-6 w-6 text-farm-green" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Active Orders</p>
                    <h3 className="text-2xl font-bold">8</h3>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      2 pending delivery
                    </p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <File className="h-6 w-6 text-farm-blue" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Products Listed</p>
                    <h3 className="text-2xl font-bold">36</h3>
                    <p className="text-xs text-orange-600 flex items-center mt-1">
                      3 low in stock
                    </p>
                  </div>
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Package className="h-6 w-6 text-farm-orange" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="hidden md:grid grid-cols-4 mb-6">
                <TabsTrigger value="products">My Products</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="deliveries">Deliveries</TabsTrigger>
              </TabsList>
              
              <TabsContent value="products">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">My Products</h2>
                  <Button className="bg-farm-green hover:bg-farm-lightGreen">Add New Product</Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {productData.map(product => <tr key={product.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{product.name}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{product.category}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">GHS {product.price}/{product.unit}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{product.quantity} {product.unit}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${product.status === 'Available' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {product.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button variant="ghost" size="sm" className="text-farm-green hover:text-farm-lightGreen">Edit</Button>
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="orders">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold">Recent Orders</h2>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Buyer</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {orderData.map(order => <tr key={order.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">{order.id}</div>
                            <div className="text-xs text-gray-500">{order.date}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{order.buyer}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{order.items}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{order.total}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : order.status === 'En Route' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {order.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <Button variant="ghost" size="sm" className="text-farm-green hover:text-farm-lightGreen">View</Button>
                          </td>
                        </tr>)}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="analytics">
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium text-gray-500">Analytics Dashboard Coming Soon</h3>
                  <p className="text-gray-400 mt-2">Track your sales, popular products, and market insights</p>
                </div>
              </TabsContent>
              
              <TabsContent value="deliveries">
                <div className="text-center py-16">
                  <h3 className="text-xl font-medium text-gray-500">Delivery Management Coming Soon</h3>
                  <p className="text-gray-400 mt-2">Track logistics, arrange transportation, and monitor deliveries</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>;
};
export default FarmerDashboard;
