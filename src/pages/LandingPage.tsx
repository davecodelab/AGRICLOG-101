import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ScrollAnimate } from "../components/ScrollAnimate";
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import { Button } from '@/components/ui/button';
import ProductCard, { Product } from '@/components/ProductCard';
import { ArrowRight, Truck, Users, ShoppingCart, Calendar } from 'lucide-react';

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    price: 40,
    unit: 'kg',
    farmer: 'Kwamina Ebo',
    location: 'Wiamoase, Kumasi',
    imageUrl: 'https://imgs.search.brave.com/ZQIwhe16XdfAcbluguBWxZzql2SVpSyGfi3pMATU9BA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vaE1SNjBf/cG9nd0hWXzRORmkt/dS1ra2JLQzBtM1ZP/Tm90bEJYX050cDdY/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk9E/UTMvTXpNMU1URTJM/M0JvYjNSdi9MM1J2/YldGMGIyVnpMVzl1/L0xYUm9aUzEyYVc1/bExtcHcvWno5elBU/WXhNbmcyTVRJbS9k/ejB3Sm1zOU1qQW1Z/ejFZL2MzQk5NbmxU/ZGxWbWNXcHUvZERk/SVREVnhTM2x1TUhS/NS9VbUkxY1V4elpq/RkhRVkEyL0xUTjRV/WE4zUFE.jpeg',
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

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Direct Connection',
    description: 'Connect directly with farmers or buyers without middlemen, ensuring better prices for everyone.'
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: 'Bulk Ordering',
    description: 'Place bulk orders for fresh produce and get volume discounts with convenient delivery options.'
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Local Delivery Network',
    description: 'We arrange reliable delivery using local transport networks to ensure produce freshness.'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Harvest Planning',
    description: 'Farmers can plan harvests based on confirmed orders, reducing waste and improving income.'
  }
];

const LandingPage = () => {
  return (
    <ScrollAnimate>
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow p-8">
        <Hero 
          title="Fresh Produce Direct From Farms"
          subtitle="We connect farmers directly to buyers in towns and cities. Say goodbye to middlemen and hello to fresher produce at better prices."
          image="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1470&auto=format&fit=crop"
          cta={{ text: "Join as Farmer", link: "/signup/farmer" }}
          secondaryCta={{ text: "Register as Buyer", link: "/signup/buyer" }}
        />
        
        <FeatureSection 
          title="Why Choose Agrodevs?"
          subtitle="We're revolutionizing how fresh produce reaches your table"
          features={features}
        />
        
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">Featured Products</h2>
                <p className="mt-2 text-gray-600">Discover the freshest selection from our farmers</p>
              </div>
              <Link to="/products/search" className="text-farm-green font-medium hover:text-farm-lightGreen flex items-center">
                View All Products <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
        
        <section className="bg-farm-green py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to transform how you buy and sell produce?</h2>
            <p className="text-green-100 mb-8 text-lg">
              Join thousands of farmers and buyers already using our platform
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/signup/farmer">
                <Button className="bg-white text-farm-green hover:bg-gray-100 px-8 py-2">
                  Start Selling
                </Button>
              </Link>
              <Link to="/signup/buyer">
                <Button className="bg-farm-lightGreen text-white hover:bg-green-500 px-8 py-2">
                  Start Buying
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
    </ScrollAnimate>
  );
};

export default LandingPage;
