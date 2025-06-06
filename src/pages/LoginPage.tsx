import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import axios from 'axios';


const LoginPage = () => {
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'farmer' | 'buyer'>('farmer');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async(e: React.FormEvent) => {
    e.preventDefault();
    const URI = import.meta.env.VITE_BACKEND_URI;
    if(!URI){
      console.log("backend route not found");
    }

    if (!URI) return;

    setIsLoading(true);

    const formData = {
      email: email,
      password: password,
      status: status,
    }
    try {
      const response = await axios.post(`${URI}/login` ,formData, {
        withCredentials: true
      })
      if(response.data.status === 200){
        setTimeout(() => {
          setIsLoading(false);
          toast({
            title: "Login Successful",
            description: `Welcome back! You are logged in as a ${status}.`
          });

          // Redirect based on user type
          navigate(status === 'farmer' ? '/dashboard/farmer' : '/dashboard/buyer');
        }, 1000);
      }else if(response.data.status === 401){
        toast({
          title: "Error",
          description: response?.data?.message,
          variant: "destructive",
        });
      }
      setIsLoading(false);

    } catch(err: any) {
      toast({
        title: "Error",
        description: err?.response?.data?.message,
        variant: "destructive",
      });
      setIsLoading(false)
    }
  };
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main 
        className="flex-grow flex items-center justify-center py-12 relative"
        style={{
          backgroundImage: 'url(./littlefarms.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="w-full max-w-md px-4 relative z-10">
          <Card className="shadow-lg backdrop-blur-md bg-white/10 border border-white/20">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-white">Sign In to AGRODEVS</CardTitle>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="farmer" onValueChange={value => setStatus(value as 'farmer' | 'buyer')}>
                <TabsList className="grid grid-cols-2 mb-6 bg-white/20 backdrop-blur-sm">
                  <TabsTrigger value="farmer" className="text-white data-[state=active]:bg-farm-green data-[state=active]:text-white">Farmer</TabsTrigger>
                  <TabsTrigger value="buyer" className="text-white data-[state=active]:bg-farm-green data-[state=active]:text-white">Consumer</TabsTrigger>
                </TabsList>
                
                <TabsContent value="farmer">
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="farmer-email" className="text-white">Email</Label>
                        <Input 
                          id="farmer-email" 
                          type="email" 
                          placeholder="your@email.com" 
                          value={email} 
                          onChange={e => setEmail(e.target.value)} 
                          required 
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="farmer-password" className="text-white">Password</Label>
                          <Link to="#" className="text-xs text-white/80 hover:text-white hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input 
                          id="farmer-password" 
                          type="password" 
                          placeholder="••••••••" 
                          value={password} 
                          onChange={e => setPassword(e.target.value)} 
                          required 
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-farm-green hover:bg-farm-lightGreen" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign In as Farmer"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
                
                <TabsContent value="buyer">
                  <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="buyer-email" className="text-white">Email</Label>
                        <Input 
                          id="buyer-email" 
                          type="email" 
                          placeholder="your@email.com" 
                          value={email} 
                          onChange={e => setEmail(e.target.value)} 
                          required 
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="buyer-password" className="text-white">Password</Label>
                          <Link to="#" className="text-xs text-white/80 hover:text-white hover:underline">
                            Forgot password?
                          </Link>
                        </div>
                        <Input 
                          id="buyer-password" 
                          type="password" 
                          placeholder="••••••••" 
                          value={password} 
                          onChange={e => setPassword(e.target.value)} 
                          required 
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-farm-green hover:bg-farm-lightGreen" disabled={isLoading}>
                        {isLoading ? "Signing in..." : "Sign In as Buyer"}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
            
            <CardFooter>
              <div className="w-full text-center">
                <p className="text-sm text-white/80">
                  Don't have an account?{" "}
                  <Link to={status === 'farmer' ? '/signup/farmer' : '/signup/buyer'} className="text-white hover:underline">
                    Sign up now
                  </Link>
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginPage;
