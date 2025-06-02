
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ScrollAnimate } from "../components/ScrollAnimate";

const BuyerSignup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    businessType: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // In a real app, this would be an API call to register the buyer
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Registration Successful",
        description: "Your buyer account has been created!"
      });
      navigate('/dashboard/buyer');
    }, 1000);
  };

  return (
    <ScrollAnimate>
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow bg-gray-50 py-12"
        style={{
          backgroundImage: 'url(/consumer.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="max-w-md mx-auto px-4">
          <Card className="shadow-lg backdrop-blur-md bg-white/10 border border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-farm-green">Sign Up as a Consumer</CardTitle>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className='text-white'>Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone" className='text-white'>Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className='text-white'>Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="businessName" className='text-white'>Business Name</Label>
                    <Input
                      id="businessName"
                      name="businessName"
                      placeholder="Name of your business"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="businessType" className='text-white'>Business Type</Label>
                    <Input
                      id="businessType"
                      name="businessType"
                      placeholder="Restaurant, Store, etc."
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="address"className='text-white'>Delivery Address</Label>
                    <Input
                      id="address"
                      name="address"
                      placeholder="Your business address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password"className='text-white'>Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword"className='text-white'>Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                    />
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-farm-green hover:bg-farm-lightGreen"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Consumer Account"}
                  </Button>
                </div>
              </form>
            </CardContent>
            
            <CardFooter>
              <p className="text-sm text-white/80" >
                Already have an account? <Link to="/login" className=" text-white hover:underline"> Sign in</Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
    </ScrollAnimate>
  );
};

export default BuyerSignup;
