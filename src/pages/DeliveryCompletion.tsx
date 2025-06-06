
import { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { 
  CheckCircle2, 
  ChevronRight,
  Star,
  ThumbsUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { ScrollAnimate } from "../components/ScrollAnimate";

const DeliveryCompletion = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Mock order data
  const order = {
    id: 'ORD123456789',
    date: '2025-05-22',
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
    farmer: 'Kwame Mensah',
    total: 500
  };

  const handleSubmitFeedback = () => {
    // In a real app, this would submit feedback to an API
    toast({
      title: "Thank you for your feedback!",
      description: "Your rating and comments have been submitted successfully.",
    });
    setSubmitted(true);
  };

  return (
    <ScrollAnimate>
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow bg-gray-50 py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                  <CheckCircle2 className="h-8 w-8 text-farm-green" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Delivery Completed!</h1>
                <p className="text-gray-600 mt-2">
                  Your order #{order.id} has been delivered successfully.
                </p>
              </div>
              
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  
                  <div className="space-y-4">
                    {order.items.map(item => (
                      <div key={item.id} className="flex justify-between">
                        <span className="text-gray-600">
                          {item.quantity} × {item.name}
                        </span>
                        <span>{item.quantity} {item.unit}</span>
                      </div>
                    ))}
                    
                    <Separator />
                    
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>GHS {order.total}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6">Rate Your Experience</h2>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 mb-3">How would you rate the quality of your produce?</p>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map(star => (
                        <button
                          key={star}
                          type="button"
                          className="focus:outline-none"
                          onClick={() => setRating(star)}
                        >
                          <Star 
                            className={`h-8 w-8 ${
                              star <= rating
                                ? 'text-yellow-400 fill-yellow-400'
                                : 'text-gray-300'
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2">Any feedback for the farmer?</label>
                    <Textarea 
                      placeholder="Share your experience about the produce quality, freshness, etc."
                      className="resize-none"
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-farm-green hover:bg-farm-lightGreen"
                    onClick={handleSubmitFeedback}
                  >
                    Submit Feedback
                  </Button>
                </CardContent>
              </Card>
            </>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <ThumbsUp className="h-8 w-8 text-farm-green" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Thank You!</h1>
              <p className="text-gray-600 mt-2 mb-6">
                Your feedback helps us improve the platform and supports local farmers.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button variant="outline" asChild>
                  <Link to="/products/search">
                    Continue Shopping
                  </Link>
                </Button>
                <Button className="bg-farm-green hover:bg-farm-lightGreen" asChild>
                  <Link to="/dashboard/buyer">
                    Go to Dashboard <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
    </ScrollAnimate>
  );
};

export default DeliveryCompletion;
