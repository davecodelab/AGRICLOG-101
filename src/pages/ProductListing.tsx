import { useParams } from 'react-router-dom';
import {useEffect, useState} from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, MinusCircle, PlusCircle, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';  
import { useCart } from '@/contexts/CartContext';
import axios from 'axios';

const ProductListing = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [product , setProduct] = useState<any[]>({});

  const fetchProducts = async()=>{
    const  URI = import.meta.env.VITE_BACKEND_URI;
    if(!URI) return;
    try{
      const response = await axios.get(`${URI}/fetch/product/by/${id}`)
      console.log(response.data.product)
      setProduct(response.data?.product);
      // setProducts(response.data);
    }catch(e){
      console.log(e)
    }
  }

  useEffect(() => {
    console.log(id)
    fetchProducts()
  }, []);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 1 && value <= product.quantity) {
      setQuantity(value);
    }
  };

  const incrementQuantity = () => {
    if (quantity < product.quantity) {
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
    // In a real app, this would add the item to the cart and redirect to checkout
     addToCart(product, quantity);
    window.location.href = '/order/confirmation';
  };
  

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products/search" className="inline-flex items-center text-farm-green mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Products
          </Link>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="bg-gray-100 p-4 flex items-center justify-center">
                <img 
                  src={`data:image/png;base64,${product.image}`}
                  alt={product.name}
                  className="max-h-96 object-contain"
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
                <p className="text-2xl font-bold text-farm-green mb-4">
                  GHS {product.price}/{product.unit}
                </p>
                
                <div className="border-t border-b py-4 my-4">
                  <div className="flex items-center mb-4">
                    <div className="w-1/3 text-gray-600">Farmer:</div>
                    <div className="w-2/3 font-medium">{product.user?.name}</div>
                  </div>
                  <div className="flex items-center mb-4">
                    <div className="w-1/3 text-gray-600">Location:</div>
                    <div className="w-2/3">{product.user?.location}</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-1/3 text-gray-600">Available:</div>
                    <div className="w-2/3">{product.quantity} {product.unit}</div>
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
                      max={product.quantity}
                      className="w-20 mx-2 text-center"
                    />
                    <Button 
                      variant="outline" 
                      size="icon"
                      onClick={incrementQuantity}
                      disabled={quantity >= product.quantity}
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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductListing;
