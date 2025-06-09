
import { useState , useEffect} from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { ScrollAnimate } from "../components/ScrollAnimate";
import { ArrowRight, CreditCard, MapPin, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import axios from "axios";

const OrderConfirmation = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [cartProduct, setCartProduct] = useState([]);
  const [description, setDescription] = useState('');
  const [agree , setAgree] = useState<boolean>();
  
  // Mock order data - in a real app, this would come from cart state or API

  const handlePlaceOrder = async() => {
    const URI = import.meta.env.VITE_BACKEND_URI;
    if(!URI)return
    try{
      for (const cart of cartProduct) {
        const formData = {
          cart_id: cart.id,
          user_id: cart?.user?.id,
          customer_id: cart?.customer?.id,
          product_id: cart.product?.id,
          quantity: cart.quantity,
          description: description, // make sure 'description' is defined in state
          agree: agree,
        };

        console.log(formData);

        const response = await axios.post(`${URI}/create/order`, formData, {
          withCredentials: true,
        });
        console.log(response.data)
      }


    }catch(e){
      console.log(e)
    }

    // In a real app, this would submit the order to an API
    // window.location.href = '/order/tracking';
  };

  const handleFetch = async()=>{
    const  URI = import.meta.env.VITE_BACKEND_URI;
    if(!URI) return;
    try{
      const response = await axios.get(`${URI}/fetch/cart/buyer`,{
        withCredentials: true
      })
      setCartProduct(response.data.cart)
      console.log(response.data)
    }catch(e){
      console.log(e)
    }
  }

  const totalCost = cartProduct.reduce((acc, cart) => {
    return acc + ((cart.quantity * cart.product?.price) || 0);
  }, 0);


  useEffect(() => {
    handleFetch()
  }, []);

  return (
    <ScrollAnimate>
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Order Confirmation</h1>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  
                  {cartProduct.map(item => (
                    <div key={item.id} className="flex py-4 border-b">
                      <div className="h-20 w-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                        <img 
                          src={`data:image/png;base64,${item?.product?.image}`}
                          alt={item.product?.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-grow">
                        <h3 className="font-medium text-gray-900">{item?.product?.name}</h3>
                        <p className="text-gray-600 text-sm">
                          GHS {item?.product?.price} per {item.product?.unit}
                        </p>
                        <p className="text-gray-600 text-sm">
                          Quantity: {item.quantity} {item?.product?.unit}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">GHS {item?.product?.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>GHS {totalCost.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span>GHS 60</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>GHS {(totalCost + 60).toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <div className="flex items-start mb-4">
                    <MapPin className="h-5 w-5 text-farm-green mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Delivery Address</h3>
                      <p className="text-gray-600">
                        45 Independence Avenue<br />
                        Accra, Ghana<br />
                        Phone: +233 24 123 4567
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Truck className="h-5 w-5 text-farm-green mr-2 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Delivery Method</h3>
                      <p className="text-gray-600">
                        Standard Delivery (2-3 days)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Payment */}
            <div className="lg:col-span-1">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                  
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod">Cash on Delivery</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="online" id="online" />
                      <Label htmlFor="online">Online Payment</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="momo" id="momo" />
                      <Label htmlFor="momo">Mobile Money</Label>
                    </div>
                  </RadioGroup>
                  
                  {paymentMethod === 'online' && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <CreditCard className="h-4 w-4 mr-2" />
                        <span className="font-medium">Card Details</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        You will be redirected to our payment partner after placing the order.
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Order Notes (Optional)</h3>
                    <Textarea
                        onChange={(e)=>setDescription(e.target.value)}
                      placeholder="Special instructions for delivery"
                      className="resize-none"
                    />
                  </div>
                  
                  <div className="mt-6 flex items-center">
                    <Checkbox id="terms" onCheckedChange={(checked) => setAgree(checked)}/>
                    <label 
                      htmlFor="terms" 
                      className="ml-2 text-sm text-gray-600"
                    >
                      I agree to the <a href="#" className="text-farm-green hover:underline">Terms & Conditions</a>
                    </label>
                  </div>
                  
                  <Button
                    className="w-full mt-6 bg-farm-green hover:bg-farm-lightGreen"
                    onClick={handlePlaceOrder}
                  >
                    Place Order <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
    </ScrollAnimate>
  );
};

export default OrderConfirmation;
