import { Truck, Users, ShoppingCart, Calendar, TrendingUp, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <div className="bg-farm-green py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-green-100 max-w-3xl mx-auto text-lg">
              We provide a comprehensive solution to connect farmers with buyers, streamlining the agricultural supply chain.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">For Farmers</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-farm-green">
                        <ShoppingCart className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Direct Market Access</h3>
                      <p className="text-gray-600">
                        List your produce directly on our platform and connect with a wide range of buyers in towns and cities without middlemen.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-farm-green">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Demand Insights</h3>
                      <p className="text-gray-600">
                        Access market analytics and forecasting tools to understand demand better and plan your harvests accordingly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-farm-green">
                        <Truck className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Logistics Support</h3>
                      <p className="text-gray-600">
                        We help arrange transportation for your produce, ensuring it reaches buyers fresh and on time using local transport networks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/signup/farmer">
                    <Button className="bg-farm-green hover:bg-farm-lightGreen text-white">
                      Start Selling Today
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="\smilingfarmer.jpg" 
                  alt="Farmers with produce" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1374&auto=format&fit=crop" 
                  alt="Restaurant chef with fresh produce" 
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">For Buyers</h2>
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-farm-green">
                        <Package className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Fresh, Quality Produce</h3>
                      <p className="text-gray-600">
                        Access a wide variety of fresh produce directly from farms, ensuring quality and supporting local agriculture.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-farm-green">
                        <Users className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Direct Farm Connections</h3>
                      <p className="text-gray-600">
                        Build relationships with farmers, learn about sustainable farming practices, and ensure transparent sourcing.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-farm-green">
                        <Calendar className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Regular Supply Management</h3>
                      <p className="text-gray-600">
                        Set up recurring orders and schedules for consistent supply, reducing uncertainty and ensuring your business runs smoothly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/signup/buyer">
                    <Button className="bg-farm-green hover:bg-farm-lightGreen text-white">
                      Start Buying Today
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">The AGRODEVS Process</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                How our platform connects farmers with buyers in a simple, efficient way.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-farm-green mx-auto mb-4">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Farmers List Produce</h3>
                <p className="text-gray-600">
                  Farmers add their available produce, pricing, and quantities on our platform.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-farm-green mx-auto mb-4">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Buyers Place Orders</h3>
                <p className="text-gray-600">
                  Businesses browse listings, compare options, and place orders directly with farmers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-farm-green mx-auto mb-4">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">We Arrange Delivery</h3>
                <p className="text-gray-600">
                  Our platform coordinates local transportation to deliver produce from farms to buyers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-farm-green mx-auto mb-4">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Secure Transactions</h3>
                <p className="text-gray-600">
                  Payment is released to farmers once delivery is confirmed, ensuring trust for all parties.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-farm-green">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-green-100 max-w-3xl mx-auto text-xl mb-8">
              Join thousands of farmers and buyers already using our platform to grow their businesses and access fresher produce.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup/farmer">
                <Button className="bg-white text-farm-green hover:bg-gray-100 px-8 py-2">
                  Join as Farmer
                </Button>
              </Link>
              <Link to="/signup/buyer">
                <Button className="bg-farm-lightGreen text-white hover:bg-green-500 px-8 py-2">
                  Join as Buyer
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
