import { useParams } from 'react-router-dom';
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useCart } from '@/contexts/CartContext';
import ProductCard, { Product } from '@/components/ProductCard';
import { ArrowLeft, MinusCircle, PlusCircle, Truck, MapPin, Calendar, Shield, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Mock products data
const allProducts: Product[] = [
  {
    id: '1',
    name: 'Fresh Tomatoes',
    category: 'Vegetables',
    price: 40,
    unit: 'kg',
    farmer: 'Kwame Mensah',
    location: 'Accra, Ghana',
    imageUrl: 'https://imgs.search.brave.com/ZQIwhe16XdfAcbluguBWxZzql2SVpSyGfi3pMATU9BA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vaE1SNjBf/cG9nd0hWXzRORmkt/dS1ra2JLQzBtM1ZP/Tm90bEJYX050cDdY/SS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl0/WldScC9ZUzVwYzNS/dlkydHdhRzkwL2J5/NWpiMjB2YVdRdk9E/UTMvTXpNMU1URTJM/M0JvYjNSdi9MM1J2/YldGMGIyVnpMVzl1/L0xYUm9aUzEyYVc1/bExtcHcvWno5elBU/WXhNbmcyTVRJbS9k/ejB3Sm1zOU1qQW1Z/ejFZL2MzQk5NbmxU/ZGxWbWNXcHUvZERk/SVREVnhTM2x1TUhS/NS9VbUkxY1V4elpq/RkhRVkEyL0xUTjRV/WE4zUFE.jpeg', // Replace with actual image URL
    available: 100,
  },
  {
    id: '2',
    name: 'Organic Rice',
    category: 'Grains',
    price: 60,
    unit: 'kg',
    farmer: 'Agya Appiah',
    location: 'Kwahu, Wa',
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1470&auto=format&fit=crop',
    available: 500,
  },
  {
    id: '3',
    name: 'Fresh Green Peppers',
    category: 'Vegetables',
    price: 35,
    unit: 'kg',
    farmer: 'Kwame Mensah',
    location: 'Accra, Ghana',
    imageUrl: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1374&auto=format&fit=crop',
    available: 75,
  },
  {
    id: '4',
    name: 'Organic Potatoes',
    category: 'Vegetables',
    price: 30,
    unit: 'kg',
    farmer: 'Ama Serwaa',
    location: 'Fiapre, Sunyani',
    imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=1470&auto=format&fit=crop',
    available: 200,
  },
  {
    id: '5',
    name: 'Fresh Oranges',
    category: 'Fruits',
    price: 80,
    unit: 'kg',
    farmer: 'Obiri Jackson',
    location: 'Manhyia, Kumasi',
    imageUrl: 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1374&auto=format&fit=crop',
    available: 120,
  },
  {
    id: '6',
    name: 'Fresh Carrots',
    category: 'Vegetables',
    price: 25,
    unit: 'kg',
    farmer: 'Kwame Mensah',
    location: 'Accra, Ghana',
    imageUrl: 'https://images.unsplash.com/photo-1445282768818-728615cc910a?q=80&w=1374&auto=format&fit=crop',
    available: 150,
  }
];

const ProductListing = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  // Find the current product
  const product = allProducts.find(p => p.id === id) || allProducts[0];
  
  // Find products by the same farmer
  const sameSignerProducts = allProducts.filter(p => p.farmer === product.farmer && p.id !== product.id);
  
  // Find other products (different farmers)
  const otherProducts = allProducts.filter(p => p.farmer !== product.farmer).slice(0, 4);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= product.available) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.available) {
      setQuantity(quantity + 1);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.unit} of ${product.name} added to your cart`,
    });
  };

  const buyNow = () => {
    addToCart(product, quantity);
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.unit} of ${product.name} added to your cart`,
    });
    navigate('/order/confirmation');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products/search" className="inline-flex items-center text-farm-green mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Products
          </Link>
          
          {/* Main Product Details */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="bg-gray-100 p-4 flex items-center justify-center">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="max-h-96 object-contain rounded-lg"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-farm-green rounded-full px-3 py-1 text-xs font-semibold">
                    {product.category}
                  </span>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">(4.8) 124 reviews</span>
                  </div>
                </div>
                <p className="text-2xl font-bold text-farm-green mb-4">
                  GHS {product.price}/{product.unit}
                </p>
                
                <div className="border-t border-b py-4 my-4 space-y-3">
                  <div className="flex items-center">
                    <div className="w-1/3 text-gray-600 flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      Farmer:
                    </div>
                    <div className="w-2/3 font-medium">{product.farmer}</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 text-gray-600">Location:</div>
                    <div className="w-2/3">{product.location}</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 text-gray-600">Available:</div>
                    <div className="w-2/3 font-semibold text-green-600">{product.available} {product.unit}</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 text-gray-600 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Harvest Date:
                    </div>
                    <div className="w-2/3">December 2024</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 text-gray-600 flex items-center">
                      <Shield className="h-4 w-4 mr-2" />
                      Certification:
                    </div>
                    <div className="w-2/3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Organic Certified</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-gray-700 mb-2">Quantity ({product.unit})</label>
                  <div className="flex items-center">
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={decrementQuantity}
                      disabled={quantity <= 1}
                    >
                      <MinusCircle className="h-4 w-4" />
                    </Button>
                    <Input
                      type="number"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min={1}
                      max={product.available}
                      className="w-20 mx-2 text-center"
                    />
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.available}
                    >
                      <PlusCircle className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline"
                    className="flex-1 border-farm-green text-farm-green hover:bg-green-50"
                    onClick={handleAddToCart}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    className="flex-1 bg-farm-green hover:bg-farm-lightGreen"
                    onClick={buyNow}
                  >
                    Buy Now
                  </Button>
                </div>
                
                <div className="mt-6 flex items-center text-gray-600 text-sm">
                  <Truck className="h-4 w-4 mr-2" />
                  <span>Delivery available within 2-3 days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Product Description</h2>
            <p className="text-gray-700 leading-relaxed">
              Fresh {product.name} directly from {product.farmer}'s farm in {product.location}. 
              These are organically grown using sustainable farming practices, ensuring the highest quality and freshness. 
              Our {product.name.toLowerCase()} are carefully harvested at peak ripeness and are perfect for your daily nutrition needs.
              Rich in vitamins and minerals, these {product.name.toLowerCase()} are ideal for cooking, salads, and healthy meals.
            </p>
          </div>

          {/* More Products from Same Farmer */}
          {sameSignerProducts.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">More from {product.farmer}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {sameSignerProducts.map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}

          {/* Other Products */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherProducts.map(otherProduct => (
                <ProductCard key={otherProduct.id} product={otherProduct} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductListing;
