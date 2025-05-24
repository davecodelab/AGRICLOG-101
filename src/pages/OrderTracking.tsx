
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  CheckCircle2, 
  CircleDashed, 
  MapPin, 
  Package, 
  Phone, 
  ShoppingBag, 
  Truck 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderTracking = () => {
  // Mock order data - in a real app, this would come from API
  const order = {
    id: 'ORD123456789',
    date: '2025-05-19',
    total: 500,
    status: 'in_transit',
    statusText: 'In Transit',
    estimatedDelivery: '2025-05-22',
    items: [
      {
        id: '1',
        name: 'Fresh Tomatoes',
        quantity: 5,
        unit: 'kg',
      },
      {
        id: '3',
        name: 'Fresh Apples',
        quantity: 2,
        unit: 'kg',
      }
    ],
    deliveryPartner: 'Express Delivery',
    driverName: 'Kofi Asante',
    driverPhone: '+233 24 123 4567',
    vehicleNumber: 'GR 1234-22'
  };

  const deliverySteps = [
    { id: 'ordered', label: 'Order Placed', date: '2025-05-19', time: '10:30 AM', completed: true },
    { id: 'processed', label: 'Order Processed', date: '2025-05-20', time: '09:15 AM', completed: true },
    { id: 'in_transit', label: 'In Transit', date: '2025-05-21', time: '11:45 AM', completed: true },
    { id: 'out_delivery', label: 'Out for Delivery', date: '', time: '', completed: false },
    { id: 'delivered', label: 'Delivered', date: '', time: '', completed: false }
  ];
  
  const activeStep = deliverySteps.findIndex(step => step.id === order.status);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Track Your Order</h1>
              <p className="text-gray-600">Order #{order.id}</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex gap-4">
              <Button variant="outline" asChild>
                <Link to="/order/confirmation">Order Details</Link>
              </Button>
              <Button className="bg-farm-green hover:bg-farm-lightGreen" asChild>
                <Link to="/delivery/completion">Confirm Delivery</Link>
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Tracking Status */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold">Delivery Status</h2>
                    <div className="bg-farm-green/10 text-farm-green font-medium px-3 py-1 rounded-full text-sm">
                      {order.statusText}
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
                    
                    {deliverySteps.map((step, index) => (
                      <div key={step.id} className="relative pl-12 pb-8 last:pb-0">
                        <div className="absolute left-0 flex items-center justify-center">
                          {step.completed ? (
                            <CheckCircle2 className="h-8 w-8 text-farm-green" />
                          ) : (
                            <CircleDashed className="h-8 w-8 text-gray-300" />
                          )}
                        </div>
                        
                        <div className={`${index === activeStep ? 'font-semibold' : ''}`}>
                          <h3 className="text-lg">{step.label}</h3>
                          {step.completed && (
                            <p className="text-gray-600">
                              {step.date} at {step.time}
                            </p>
                          )}
                          {index === activeStep && !step.completed && (
                            <p className="text-farm-green">Current Status</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-farm-green">
                      Estimated delivery by <span className="font-semibold">{order.estimatedDelivery}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              {/* Delivery Partner */}
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Delivery Partner</h2>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{order.deliveryPartner}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                          Driver: {order.driverName}
                        </p>
                        <p className="text-sm text-gray-600">
                          Vehicle: {order.vehicleNumber}
                        </p>
                      </div>
                      
                      <Button className="bg-farm-green hover:bg-farm-lightGreen" size="sm">
                        <Phone className="h-4 w-4 mr-2" /> Call Driver
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Order Summary */}
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <ShoppingBag className="h-5 w-5 text-farm-green mr-2" />
                    <h2 className="text-xl font-semibold">Order Summary</h2>
                  </div>
                  
                  <div className="border-t border-b py-4 space-y-2">
                    {order.items.map(item => (
                      <div key={item.id} className="flex justify-between">
                        <span className="text-gray-600">
                          {item.quantity} × {item.name}
                        </span>
                        <span>{item.quantity} {item.unit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4 flex justify-between font-semibold">
                    <span>Total Amount:</span>
                    <span>GHS {order.total}</span>
                  </div>
                  
                  <div className="mt-6">
                    <div className="flex items-start mb-4">
                      <MapPin className="h-5 w-5 text-farm-green mr-2 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Delivery Address</h3>
                        <p className="text-sm text-gray-600">
                          45 Independence Avenue<br />
                          Accra, Ghana
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Package className="h-5 w-5 text-farm-green mr-2" />
                      <div>
                        <h3 className="font-medium">Payment Method</h3>
                        <p className="text-sm text-gray-600">Cash on Delivery</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderTracking;
