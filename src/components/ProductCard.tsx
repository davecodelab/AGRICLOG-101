
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  unit: string;
  farmer: string;
  location: string;
  imageUrl: string;
  available: number;
}

interface ProductCardProps {
  product: Product;
}
const ProductCard = ({ product }) => {
const { addToCart } = useCart();
  const { toast } = useToast();
  const handleAddToCart = () => {
    addToCart(product, 1);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart`,
    });
  };
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-200 relative overflow-hidden">
        <img 
          src={`data:image/png;base64,${product.image}` || '/placeholder.svg'}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <CardContent className="pt-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-500 mb-1">{product.category}</p>
          </div>
          <div className="text-right">
            <p className="font-bold text-farm-green">GHS {product.price}/{product.unit}</p>
            <p className="text-xs text-gray-500">{product.quantity} {product.unit} available</p>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-xs text-gray-600">
            by <span className="font-medium">{product?.user?.name.split(" ")[0]}</span> • {product.user?.location.includes("Ghana") ? product.user?.location : `${product?.user?.location}, Ghana`}

          </p>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-gray-50 flex justify-between pt-3">
        <Link to={`/products/${product.id}`}>
          <Button variant="outline" size="sm" className="text-farm-green border-farm-green hover:bg-green-50">
            View Details
          </Button>
        </Link>
        <Button onClick={handleAddToCart} size="sm" className="bg-farm-green hover:bg-farm-lightGreen text-white">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
