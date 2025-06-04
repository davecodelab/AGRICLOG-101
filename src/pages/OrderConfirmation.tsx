import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, CreditCard, MapPin, Truck, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const OrderConfirmation = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });
  const [momoDetails, setMomoDetails] = useState({
    network: '',
    phoneNumber: ''
  });
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const { items, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  
  const deliveryFee = 60;
  const subtotal = getTotalPrice();
  const total = subtotal + deliveryFee;

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handlePlaceOrder = () => {
    if (!termsAccepted) {
      alert('Please accept the Terms & Conditions to proceed.');
      return;
    }
    
    if (paymentMethod === 'online' && (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv || !cardDetails.cardName)) {
      alert('Please fill in all card details.');
      return;
    }
    
    if (paymentMethod === 'momo' && (!momoDetails.network || !momoDetails.phoneNumber)) {
      alert('Please select your network and enter your phone number.');
      return;
    }
    
    // In a real app, this would submit the order to an API
    window.location.href = '/order/tracking';
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow bg-gray-50 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
              <p className="text-gray-600 mb-6">Add some products to your cart to continue.</p>
              <Link to="/products/search">
                <Button className="bg-farm-green hover:bg-farm-lightGreen">
                  Browse Products
                </Button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
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
                  
                  {items.map(item => (
                    <div key={item.id} className="flex py-4 border-b">
                      <div className="h-20 w-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                        <img 
                          src={item.imageUrl} 
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="ml-4 flex-grow">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-gray-600 text-sm">
                          GHS {item.price} per {item.unit}
                        </p>
                        <p className="text-gray-600 text-sm">
                          From: {item.farmer}
                        </p>
                        <div className="flex items-center mt-2 space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 text-red-600 hover:text-red-700"
                            onClick={() => removeFromCart(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">GHS {item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>GHS {subtotal}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Delivery Fee</span>
                      <span>GHS {deliveryFee}</span>
                    </div>
                    <Separator className="my-2" />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>GHS {total}</span>
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
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
                      <div className="flex items-center mb-2">
                        <CreditCard className="h-4 w-4 mr-2" />
                        <span className="font-medium">Card Details</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="cardName">Cardholder Name</Label>
                          <Input
                            id="cardName"
                            placeholder="John Doe"
                            value={cardDetails.cardName}
                            onChange={(e) => setCardDetails({...cardDetails, cardName: e.target.value})}
                          />
                        </div>
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            value={cardDetails.cardNumber}
                            onChange={(e) => setCardDetails({...cardDetails, cardNumber: e.target.value})}
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input
                              id="expiryDate"
                              placeholder="MM/YY"
                              value={cardDetails.expiryDate}
                              onChange={(e) => setCardDetails({...cardDetails, expiryDate: e.target.value})}
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              value={cardDetails.cvv}
                              onChange={(e) => setCardDetails({...cardDetails, cvv: e.target.value})}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {paymentMethod === 'momo' && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg space-y-4">
                      <div className="flex items-center mb-2">
                        <span className="font-medium">Mobile Money Details</span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <Label htmlFor="network">Select Network</Label>
                          <Select value={momoDetails.network} onValueChange={(value) => setMomoDetails({...momoDetails, network: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose your network" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="mtn">MTN Mobile Money</SelectItem>
                              <SelectItem value="telecel">Telecel Cash</SelectItem>
                              <SelectItem value="atm">AirtelTigo Money</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="phoneNumber">Phone Number</Label>
                          <Input
                            id="phoneNumber"
                            placeholder="0241234567"
                            value={momoDetails.phoneNumber}
                            onChange={(e) => setMomoDetails({...momoDetails, phoneNumber: e.target.value})}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Order Notes (Optional)</h3>
                    <Textarea 
                      placeholder="Special instructions for delivery"
                      className="resize-none"
                    />
                  </div>
                  
                  <div className="mt-6 flex items-center">
                    <Checkbox 
                      id="terms" 
                      checked={termsAccepted}
                      onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                    />
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
                    disabled={!termsAccepted}
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
  );
};

export default OrderConfirmation;