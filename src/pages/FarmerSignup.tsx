
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ScrollAnimate } from '@/components/ScrollAnimate';
import axios from "axios"

const FarmerSignup = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const URI = import.meta.env.VITE_BACKEND_URI;
    if(!URI){
      console.log("user not found")
    }
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Passwords don't match",
        variant: "destructive",
      });
      return;
    }


    setIsLoading(true);

    const response = await axios.post(`${URI}/create` , formData , {
      withCredentials: true
    })

    if(response.status === 302){
      toast({
        title: "Error",
        description: response.data?.message,
        variant: "destructive",
      });
      setIsLoading(false);
    }else if(response.data.status === 301){
      setIsLoading(false)
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Registration Successful",
          description: "Your farmer account has been created!"
        });
        // navigate('/dashboard/farmer');
      }, 1000);
    }
  };

  return (
    <ScrollAnimate>
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main
        className="flex-grow bg-gray-50 py-12 relative"
        style={{
          backgroundImage: 'url(/farmland.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="max-w-md mx-auto px-4 relative z-10">
          <Card className="shadow-lg backdrop-blur-md bg-white/10 border border-white/20">
        <CardHeader>
              <CardTitle className="text-2xl text-center text-farm-green">Sign Up as a Farmer</CardTitle>
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
                     // className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
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
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="location" className='text-white'>Farm Location</Label>
                    <Input
                      id="location"
                      name="location"
                      placeholder="City, State"
                      value={formData.location}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="password" className='text-white'>Password</Label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className='text-white'>Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button 
                    type="submit" 
                    className="w-full bg-farm-green hover:bg-farm-lightGreen"
                    disabled={isLoading}
                  >
                    {isLoading ? "Creating Account..." : "Create Farmer Account"}
                  </Button>
                </div>
              </form>
            </CardContent>
            
            <CardFooter>
              <p className="text-sm text-center w-full text-white/80">
                Already have an account? <Link to="/login" className="text-white hover:underline">Sign in</Link>
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

export default FarmerSignup;
